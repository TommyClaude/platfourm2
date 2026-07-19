<?php
/**
 * One-time content setup.
 *
 * On first activation the bundled imagery is imported into the Media Library
 * and the seven existing projects are created as `project` posts, so that all
 * images and project content are managed in wp-admin rather than the theme
 * source. Runs once, guarded by the `platfourm_setup_done` option.
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Copy a bundled theme image into the Media Library.
 *
 * @param string $relative  Path relative to the theme root.
 * @param int    $parent_id Attach to this post (0 = unattached).
 * @return int Attachment ID, or 0 on failure.
 */
function platfourm_sideload_image( $relative, $parent_id = 0 ) {
	$file = get_theme_file_path( $relative );
	if ( ! file_exists( $file ) ) {
		return 0;
	}

	require_once ABSPATH . 'wp-admin/includes/image.php';
	require_once ABSPATH . 'wp-admin/includes/file.php';
	require_once ABSPATH . 'wp-admin/includes/media.php';

	$tmp = wp_tempnam( basename( $file ) );
	if ( ! $tmp || ! copy( $file, $tmp ) ) {
		return 0;
	}

	$file_array = array(
		'name'     => basename( $file ),
		'tmp_name' => $tmp,
	);

	$id = media_handle_sideload( $file_array, $parent_id );

	if ( is_wp_error( $id ) ) {
		if ( file_exists( $tmp ) ) {
			wp_delete_file( $tmp );
		}
		return 0;
	}
	return (int) $id;
}

/**
 * Seed data for the existing projects (display order top to bottom).
 *
 * @return array[]
 */
function platfourm_project_seed() {
	return array(
		array(
			'slug'     => 'genesian-theatre',
			'title'    => 'Genesian Theatre',
			'location' => 'Sydney, NSW',
			'category' => 'Commercial Fit-out',
			'images'   => 10,
			'desc'     => 'A heritage theatre transformation in the heart of Sydney. Platfourm delivered bespoke timber joinery throughout — the grand staircase, bar and foyer — pairing rich timber panelling and brass detailing with a modern teal palette, all while meeting the compliance demands of a working performance venue.',
		),
		array(
			'slug'     => 'new-build-duplex',
			'title'    => 'New Build Duplex',
			'location' => 'Mudgee, NSW',
			'category' => 'Residential · New Build',
			'images'   => 6,
			'desc'     => 'Platfourm was entrusted with the management of this project, handling every stage — from the concept phase and design approval through construction and subdivision to its completion — delivering a pair of crisp, contemporary homes in regional NSW.',
		),
		array(
			'slug'     => 'full-home-renovation',
			'title'    => 'Full Home Renovation',
			'location' => 'Central Coast, NSW',
			'category' => 'Residential · Renovation',
			'images'   => 4,
			'desc'     => 'A full remodel of every internal space — bathroom, kitchen and bedrooms — together with an additional carport. Platfourm took a tired weatherboard cottage back to frame and rebuilt it into a bright, modern family home.',
		),
		array(
			'slug'     => 'sydney-airport-terminal',
			'title'    => 'Sydney Airport Terminal',
			'location' => 'Mascot, NSW',
			'category' => 'Commercial · Airport',
			'images'   => 4,
			'desc'     => 'A charger upgrade rolled out across the T2 food court at Sydney Airport. Platfourm retrofitted power and USB charging into the communal timber benches and delivered the works live, in a high-traffic terminal, with minimal disruption to travellers and retailers.',
		),
		array(
			'slug'     => 'redland-grammar-school',
			'title'    => 'Redland Grammar School',
			'location' => 'Cremorne, NSW',
			'category' => 'Education',
			'images'   => 4,
			'desc'     => 'Classroom and corridor upgrades at the Cremorne campus — acoustic wall panelling, joinery, storage and new floor finishes. The works were programmed around the school calendar to keep learning spaces available throughout.',
		),
		array(
			'slug'     => 'kindalin-childcare',
			'title'    => 'Kindalin Childcare',
			'location' => 'Rouse Hill, NSW',
			'category' => 'Education · Joinery',
			'images'   => 6,
			'desc'     => 'A custom joinery fit-out for a new childcare centre in Rouse Hill. Curved timber batten screens, plywood cabinetry and bespoke kitchen and storage were crafted for a bright, tactile and hard-wearing learning environment.',
		),
		array(
			'slug'     => 'elanora-aged-care',
			'title'    => 'Elanora Aged Care',
			'location' => 'Elanora, NSW',
			'category' => 'Aged Care',
			'images'   => 1,
			'desc'     => 'A common-area refurbishment for an aged-care facility — banquette seating, custom shelving and warm, accessible finishes designed for resident comfort, easy movement and everyday use.',
		),
	);
}

/**
 * Import bundled imagery and seed the projects (once).
 */
function platfourm_run_setup() {
	if ( get_option( 'platfourm_setup_done' ) ) {
		return;
	}
	// Claim the flag up-front so a second request can't run the import in parallel.
	update_option( 'platfourm_setup_done', 1 );

	// --- Section imagery (hero slides, about, why, founder) ---
	$section_sources = array(
		'hero-1'  => 'assets/img/projects/genesian-theatre-1.jpg',
		'hero-2'  => 'assets/img/projects/genesian-theatre-2.jpg',
		'hero-3'  => 'assets/img/projects/genesian-theatre-9.jpg',
		'about-1' => 'assets/img/who-we-are-1.jpg',
		'about-2' => 'assets/img/who-we-are-2.jpg',
		'why-1'   => 'assets/img/genesian-bar.jpg',
		'founder' => 'assets/img/sam-avatar.webp',
		'footer-logo' => 'assets/img/platfourm-combination-vertical.png',
	);
	$section_ids = array();
	foreach ( $section_sources as $key => $path ) {
		$id = platfourm_sideload_image( $path );
		if ( $id ) {
			$section_ids[ $key ] = $id;
		}
	}
	update_option( 'platfourm_images', $section_ids );

	// --- Projects ---
	foreach ( platfourm_project_seed() as $order => $p ) {
		if ( get_page_by_path( $p['slug'], OBJECT, 'project' ) ) {
			continue;
		}

		// Import the gallery images (first one becomes the card / featured image).
		$gallery = array();
		for ( $i = 1; $i <= $p['images']; $i++ ) {
			$gid = platfourm_sideload_image( 'assets/img/projects/' . $p['slug'] . '-' . $i . '.jpg' );
			if ( $gid ) {
				$gallery[] = $gid;
			}
		}

		// Content = one core Image block per gallery image (drives the modal).
		$content = '';
		foreach ( $gallery as $gid ) {
			$url      = wp_get_attachment_url( $gid );
			$content .= sprintf(
				'<!-- wp:image {"id":%1$d,"sizeSlug":"large","linkDestination":"none"} --><figure class="wp-block-image size-large"><img src="%2$s" alt="%3$s" class="wp-image-%1$d"/></figure><!-- /wp:image -->' . "\n",
				$gid,
				esc_url( $url ),
				esc_attr( $p['title'] )
			);
		}

		$post_id = wp_insert_post(
			array(
				'post_type'    => 'project',
				'post_status'  => 'publish',
				'post_title'   => $p['title'],
				'post_name'    => $p['slug'],
				'post_excerpt' => $p['desc'],
				'post_content' => $content,
				'menu_order'   => $order,
			),
			true
		);
		if ( is_wp_error( $post_id ) || ! $post_id ) {
			continue;
		}

		if ( ! empty( $gallery ) ) {
			set_post_thumbnail( $post_id, $gallery[0] );
			foreach ( $gallery as $gid ) {
				wp_update_post( array( 'ID' => $gid, 'post_parent' => $post_id ) );
			}
		}
		update_post_meta( $post_id, '_platfourm_location', $p['location'] );

		$term = term_exists( $p['category'], 'project_type' );
		if ( ! $term ) {
			$term = wp_insert_term( $p['category'], 'project_type' );
		}
		if ( ! is_wp_error( $term ) ) {
			wp_set_object_terms( $post_id, (int) $term['term_id'], 'project_type' );
		}
	}
}
add_action( 'after_switch_theme', 'platfourm_run_setup' );
// Fallback: also attempt on first admin load (e.g. if activation hook was missed).
add_action( 'admin_init', 'platfourm_run_setup' );
