<?php
/**
 * Title: Hero — slideshow intro
 * Slug: platfourm/hero
 * Categories: platfourm
 * Inserter: no
 *
 * The three slides are core Image blocks, so each background can be swapped
 * from the Media Library directly in the Site Editor. main.js cross-fades them
 * by toggling `is-active`.
 */

$platfourm_slides = array(
	array( 'hero-1', 'assets/img/projects/genesian-theatre-1.jpg' ),
	array( 'hero-2', 'assets/img/projects/genesian-theatre-2.jpg' ),
	array( 'hero-3', 'assets/img/projects/genesian-theatre-9.jpg' ),
);
?>
<!-- wp:group {"tagName":"section","anchor":"home","className":"hero"} -->
<section class="wp-block-group hero" id="home">

<!-- wp:group {"className":"hero__slides"} -->
<div class="wp-block-group hero__slides">
<?php
foreach ( $platfourm_slides as $platfourm_i => $platfourm_slide ) :
	$platfourm_id  = platfourm_image_id( $platfourm_slide[0] );
	$platfourm_url = platfourm_image_url( $platfourm_slide[0], $platfourm_slide[1] );
	$platfourm_cls = 'hero__slide' . ( 0 === $platfourm_i ? ' is-active' : '' );

	$platfourm_attrs = array(
		'sizeSlug'        => 'full',
		'linkDestination' => 'none',
		'className'       => $platfourm_cls,
	);
	if ( $platfourm_id ) {
		$platfourm_attrs['id'] = $platfourm_id;
	}
	?>
<!-- wp:image <?php echo wp_json_encode( $platfourm_attrs ); ?> -->
<figure class="wp-block-image size-full <?php echo esc_attr( $platfourm_cls ); ?>"><img src="<?php echo esc_url( $platfourm_url ); ?>" alt=""<?php echo $platfourm_id ? ' class="wp-image-' . (int) $platfourm_id . '"' : ''; ?>/></figure>
<!-- /wp:image -->
<?php endforeach; ?>
</div>
<!-- /wp:group -->

<!-- wp:html -->
<div class="hero__overlay"></div>
<!-- /wp:html -->

<!-- wp:group {"className":"container hero__content"} -->
<div class="wp-block-group container hero__content">

<!-- wp:paragraph {"className":"hero__eyebrow reveal"} -->
<p class="hero__eyebrow reveal">Australian Building &amp; Construction</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":1,"className":"hero__title reveal"} -->
<h1 class="wp-block-heading hero__title reveal">From Concept<br>to Completion</h1>
<!-- /wp:heading -->

<!-- wp:paragraph {"className":"hero__text reveal"} -->
<p class="hero__text reveal">Platfourm delivers new builds, renovations and commercial fit-outs for both private and public sectors — building open, collaborative relationships that go above and beyond.</p>
<!-- /wp:paragraph -->

<!-- wp:html -->
<div class="hero__actions reveal">
  <a href="#projects" class="btn btn--primary">View Our Projects</a>
  <a href="#contact" class="btn btn--ghost"><span class="u-line">Get in Touch</span></a>
</div>
<div class="hero__caption" id="heroCaption" aria-live="polite">
  <span class="hero__caption-tag">Featured</span>
  <span class="hero__caption-text">Genesian Theatre — Grand Staircase</span>
</div>
<!-- /wp:html -->

</div>
<!-- /wp:group -->

<!-- wp:html -->
<div class="hero__dots" id="heroDots" role="tablist" aria-label="Hero slides"></div>
<a href="#about" class="hero__scroll" aria-label="Scroll down">
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 5v14M19 12l-7 7-7-7"/></svg>
</a>
<!-- /wp:html -->

</section>
<!-- /wp:group -->
