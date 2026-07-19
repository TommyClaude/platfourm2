<?php
/**
 * Projects — custom post type, category taxonomy, and the location field.
 *
 * The Featured Projects grid and the detail modal are both driven by these
 * posts, so a project is edited entirely from wp-admin (Projects menu).
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

function platfourm_register_projects() {
	register_post_type(
		'project',
		array(
			'labels'       => array(
				'name'          => __( 'Projects', 'platfourm' ),
				'singular_name' => __( 'Project', 'platfourm' ),
				'add_new_item'  => __( 'Add New Project', 'platfourm' ),
				'edit_item'     => __( 'Edit Project', 'platfourm' ),
				'new_item'      => __( 'New Project', 'platfourm' ),
				'view_item'     => __( 'View Project', 'platfourm' ),
				'search_items'  => __( 'Search Projects', 'platfourm' ),
				'menu_name'     => __( 'Projects', 'platfourm' ),
			),
			'public'       => true,
			'has_archive'  => false,
			'show_in_rest' => true,
			'menu_icon'    => 'dashicons-building',
			'menu_position' => 20,
			'supports'     => array( 'title', 'editor', 'excerpt', 'thumbnail', 'page-attributes' ),
			'rewrite'      => array( 'slug' => 'projects' ),
		)
	);

	register_taxonomy(
		'project_type',
		'project',
		array(
			'labels'            => array(
				'name'          => __( 'Project Categories', 'platfourm' ),
				'singular_name' => __( 'Project Category', 'platfourm' ),
				'menu_name'     => __( 'Categories', 'platfourm' ),
			),
			'public'            => true,
			'hierarchical'      => true,
			'show_in_rest'      => true,
			'show_admin_column' => true,
		)
	);

	register_post_meta(
		'project',
		'_platfourm_location',
		array(
			'type'              => 'string',
			'single'            => true,
			'show_in_rest'      => true,
			'sanitize_callback' => 'sanitize_text_field',
			'auth_callback'     => function () {
				return current_user_can( 'edit_posts' );
			},
		)
	);
}
add_action( 'init', 'platfourm_register_projects' );

/**
 * Simple, editor-agnostic meta box for the project location.
 */
function platfourm_project_meta_boxes() {
	add_meta_box(
		'platfourm_location',
		__( 'Location', 'platfourm' ),
		'platfourm_location_meta_box',
		'project',
		'side',
		'high'
	);
}
add_action( 'add_meta_boxes', 'platfourm_project_meta_boxes' );

function platfourm_location_meta_box( $post ) {
	wp_nonce_field( 'platfourm_location_save', 'platfourm_location_nonce' );
	$value = get_post_meta( $post->ID, '_platfourm_location', true );
	printf(
		'<input type="text" name="platfourm_location" value="%s" style="width:100%%" placeholder="%s">',
		esc_attr( $value ),
		esc_attr__( 'e.g. Sydney, NSW', 'platfourm' )
	);
	echo '<p class="description">' . esc_html__( 'Shown on the card and in the project modal.', 'platfourm' ) . '</p>';
}

function platfourm_save_location( $post_id ) {
	if ( ! isset( $_POST['platfourm_location_nonce'] ) ||
		! wp_verify_nonce( sanitize_key( $_POST['platfourm_location_nonce'] ), 'platfourm_location_save' ) ) {
		return;
	}
	if ( defined( 'DOING_AUTOSAVE' ) && DOING_AUTOSAVE ) {
		return;
	}
	if ( ! current_user_can( 'edit_post', $post_id ) ) {
		return;
	}
	if ( isset( $_POST['platfourm_location'] ) ) {
		update_post_meta( $post_id, '_platfourm_location', sanitize_text_field( wp_unslash( $_POST['platfourm_location'] ) ) );
	}
}
add_action( 'save_post_project', 'platfourm_save_location' );

/**
 * Ordered list of published projects (shared by the grid and the modal data).
 *
 * @return WP_Post[]
 */
function platfourm_get_projects() {
	$query = new WP_Query(
		array(
			'post_type'      => 'project',
			'post_status'    => 'publish',
			'posts_per_page' => -1,
			'orderby'        => array( 'menu_order' => 'ASC', 'date' => 'ASC' ),
			'no_found_rows'  => true,
		)
	);
	return $query->posts;
}

/**
 * Gallery image URLs for a project, read from the core Image blocks in its
 * content so editing the project in wp-admin updates the modal automatically.
 *
 * @param WP_Post $post Project post.
 * @return string[]
 */
function platfourm_project_images( $post ) {
	$images = array();
	foreach ( parse_blocks( $post->post_content ) as $block ) {
		if ( 'core/image' === $block['blockName'] && preg_match( '/<img[^>]+src="([^"]+)"/', $block['innerHTML'], $m ) ) {
			$images[] = $m[1];
		}
	}
	if ( empty( $images ) && has_post_thumbnail( $post ) ) {
		$images[] = get_the_post_thumbnail_url( $post, 'large' );
	}
	return $images;
}
