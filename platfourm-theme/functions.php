<?php
/**
 * Platfourm block theme.
 *
 * The visual system lives in assets/css/style.css (shared with the static
 * build); block patterns reproduce the same markup so that stylesheet
 * applies unchanged.
 */

function platfourm_setup() {
	add_theme_support( 'title-tag' );
	add_theme_support( 'post-thumbnails' );
	add_theme_support( 'responsive-embeds' );
	add_editor_style( 'assets/css/style.css' );
}
add_action( 'after_setup_theme', 'platfourm_setup' );

function platfourm_enqueue_assets() {
	$version = wp_get_theme()->get( 'Version' );
	wp_enqueue_style( 'platfourm', get_theme_file_uri( 'assets/css/style.css' ), array(), $version );
	wp_enqueue_script( 'platfourm', get_theme_file_uri( 'assets/js/main.js' ), array(), $version, true );
	// main.js builds modal gallery image URLs from this base.
	wp_add_inline_script(
		'platfourm',
		'window.PLATFOURM_ASSETS = ' . wp_json_encode( get_theme_file_uri( 'assets' ) ) . ';',
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
 * The project detail modal is site chrome (not editable content); it is
 * printed once per page and driven by assets/js/main.js.
 */
function platfourm_render_project_modal() {
	require get_theme_file_path( 'inc/project-modal.php' );
}
add_action( 'wp_footer', 'platfourm_render_project_modal' );
