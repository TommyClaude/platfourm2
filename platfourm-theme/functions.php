<?php
/**
 * Platfourm block theme.
 *
 * The visual system lives in assets/css/style.css (shared with the static
 * build); block patterns reproduce the same markup so that stylesheet
 * applies unchanged. Projects and imagery are managed in wp-admin — see
 * inc/projects.php (Project CPT) and inc/setup.php (one-time import).
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

require_once get_theme_file_path( 'inc/projects.php' );
require_once get_theme_file_path( 'inc/setup.php' );

function platfourm_setup() {
	add_theme_support( 'title-tag' );
	add_theme_support( 'post-thumbnails' );
	add_theme_support( 'responsive-embeds' );
	add_editor_style( 'assets/css/style.css' );
}
add_action( 'after_setup_theme', 'platfourm_setup' );

/**
 * URL of an imported section image (hero/about/why/founder), falling back to
 * the bundled asset before the one-time import has run.
 *
 * @param string $key      Image key stored in the platfourm_images option.
 * @param string $fallback Path relative to the theme root.
 * @return string
 */
function platfourm_image_url( $key, $fallback ) {
	$ids = get_option( 'platfourm_images', array() );
	if ( ! empty( $ids[ $key ] ) ) {
		$url = wp_get_attachment_url( $ids[ $key ] );
		if ( $url ) {
			return $url;
		}
	}
	return get_theme_file_uri( $fallback );
}

/**
 * Attachment ID of an imported section image, or 0 if not imported yet.
 *
 * @param string $key Image key stored in the platfourm_images option.
 * @return int
 */
function platfourm_image_id( $key ) {
	$ids = get_option( 'platfourm_images', array() );
	return ! empty( $ids[ $key ] ) ? (int) $ids[ $key ] : 0;
}

function platfourm_enqueue_assets() {
	$version = wp_get_theme()->get( 'Version' );
	wp_enqueue_style( 'platfourm', get_theme_file_uri( 'assets/css/style.css' ), array(), $version );
	wp_enqueue_script( 'platfourm', get_theme_file_uri( 'assets/js/main.js' ), array(), $version, true );

	// Project data for the detail modal, built from the Project posts so
	// editing a project in wp-admin updates the modal.
	$projects = array();
	foreach ( platfourm_get_projects() as $post ) {
		$terms = get_the_terms( $post->ID, 'project_type' );
		$projects[ $post->post_name ] = array(
			'tag'      => ( $terms && ! is_wp_error( $terms ) ) ? $terms[0]->name : '',
			'title'    => get_the_title( $post ),
			'location' => (string) get_post_meta( $post->ID, '_platfourm_location', true ),
			'desc'     => $post->post_excerpt,
			'images'   => platfourm_project_images( $post ),
		);
	}
	wp_add_inline_script(
		'platfourm',
		'window.PLATFOURM_PROJECTS = ' . wp_json_encode( $projects ) . ';',
		'before'
	);
}
add_action( 'wp_enqueue_scripts', 'platfourm_enqueue_assets' );

function platfourm_preload_fonts() {
	foreach ( array( 'jost-latin.woff2', 'inter-latin.woff2' ) as $font ) {
		printf(
			'<link rel="preload" href="%s" as="font" type="font/woff2" crossorigin>' . "\n",
			esc_url( get_theme_file_uri( 'assets/fonts/' . $font ) )
		);
	}
}
add_action( 'wp_head', 'platfourm_preload_fonts', 1 );

function platfourm_pattern_category() {
	register_block_pattern_category(
		'platfourm',
		array( 'label' => __( 'Platfourm', 'platfourm' ) )
	);
}
add_action( 'init', 'platfourm_pattern_category' );

/**
 * Register the theme's custom blocks (no build step — the editor scripts are
 * plain JS that depend on the wp-* packages already shipped by WordPress).
 */
function platfourm_register_blocks() {
	$version = wp_get_theme()->get( 'Version' );
	$deps    = array( 'wp-blocks', 'wp-element', 'wp-block-editor', 'wp-components', 'wp-i18n' );

	wp_register_script( 'platfourm-hero-edit', get_theme_file_uri( 'blocks/hero/edit.js' ), $deps, $version, true );
	wp_register_script( 'platfourm-projects-edit', get_theme_file_uri( 'blocks/projects/edit.js' ), array_merge( $deps, array( 'wp-server-side-render' ) ), $version, true );

	register_block_type( get_theme_file_path( 'blocks/hero' ) );
	register_block_type( get_theme_file_path( 'blocks/projects' ) );
}
add_action( 'init', 'platfourm_register_blocks' );

/**
 * The project detail modal is site chrome (not editable content); it is
 * printed once per page and populated by assets/js/main.js.
 */
function platfourm_render_project_modal() {
	require get_theme_file_path( 'inc/project-modal.php' );
}
add_action( 'wp_footer', 'platfourm_render_project_modal' );
