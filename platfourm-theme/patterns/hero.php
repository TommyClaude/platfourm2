<?php
/**
 * Title: Hero — slideshow intro
 * Slug: platfourm/hero
 * Categories: platfourm
 * Viewport Width: 1400
 */
?>
<!-- wp:group {"tagName":"section","anchor":"home","className":"hero"} -->
<section class="wp-block-group hero" id="home">

<!-- wp:html -->
<div class="hero__slides" aria-hidden="true">
  <div class="hero__slide is-active" style="background-image:url('<?php echo esc_url( get_theme_file_uri( 'assets/img/projects/genesian-theatre-1.jpg' ) ); ?>')"></div>
  <div class="hero__slide" style="background-image:url('<?php echo esc_url( get_theme_file_uri( 'assets/img/projects/genesian-theatre-2.jpg' ) ); ?>')"></div>
  <div class="hero__slide" style="background-image:url('<?php echo esc_url( get_theme_file_uri( 'assets/img/projects/genesian-theatre-9.jpg' ) ); ?>')"></div>
</div>
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
