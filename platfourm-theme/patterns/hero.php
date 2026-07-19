<?php
/**
 * Title: Hero — slideshow intro
 * Slug: platfourm/hero
 * Categories: platfourm
 * Inserter: no
 *
 * Uses the platfourm/hero block: a 3-image cross-fade slideshow (each slide
 * editable from the Media Library in the Site Editor) wrapping editable
 * heading/text/button blocks.
 */

$platfourm_hero_attrs = array();
foreach ( array( 'image1' => 'hero-1', 'image2' => 'hero-2', 'image3' => 'hero-3' ) as $platfourm_attr => $platfourm_key ) {
	$platfourm_id = platfourm_image_id( $platfourm_key );
	if ( $platfourm_id ) {
		$platfourm_hero_attrs[ $platfourm_attr ] = array(
			'id'  => $platfourm_id,
			'url' => wp_get_attachment_url( $platfourm_id ),
		);
	}
}
?>
<!-- wp:platfourm/hero <?php echo wp_json_encode( $platfourm_hero_attrs ); ?> -->
<!-- wp:paragraph {"className":"hero__eyebrow"} -->
<p class="hero__eyebrow">Australian Building &amp; Construction</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":1,"className":"hero__title"} -->
<h1 class="wp-block-heading hero__title">From Concept<br>to Completion</h1>
<!-- /wp:heading -->

<!-- wp:paragraph {"className":"hero__text"} -->
<p class="hero__text">Platfourm delivers new builds, renovations and commercial fit-outs for both private and public sectors — building open, collaborative relationships that go above and beyond.</p>
<!-- /wp:paragraph -->

<!-- wp:buttons {"className":"hero__actions"} -->
<div class="wp-block-buttons hero__actions">
<!-- wp:button {"className":"btn btn--primary"} -->
<div class="wp-block-button btn btn--primary"><a class="wp-block-button__link wp-element-button" href="#projects">View Our Projects</a></div>
<!-- /wp:button -->
<!-- wp:button {"className":"btn btn--ghost"} -->
<div class="wp-block-button btn btn--ghost"><a class="wp-block-button__link wp-element-button" href="#contact">Get in Touch</a></div>
<!-- /wp:button -->
</div>
<!-- /wp:buttons -->
<!-- /wp:platfourm/hero -->
