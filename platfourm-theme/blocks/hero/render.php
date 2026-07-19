<?php
/**
 * Front-end render for the Platfourm Hero block.
 *
 * @var array  $attributes Block attributes (image1/2/3 objects).
 * @var string $content    Inner blocks (the hero content).
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

$platfourm_slides = array();
foreach ( array( 'image1', 'image2', 'image3' ) as $platfourm_key ) {
	if ( ! empty( $attributes[ $platfourm_key ]['url'] ) ) {
		$platfourm_slides[] = $attributes[ $platfourm_key ]['url'];
	}
}

// Fallback to the bundled imagery before any image has been set.
if ( empty( $platfourm_slides ) ) {
	$platfourm_slides = array(
		platfourm_image_url( 'hero-1', 'assets/img/projects/genesian-theatre-1.jpg' ),
		platfourm_image_url( 'hero-2', 'assets/img/projects/genesian-theatre-2.jpg' ),
		platfourm_image_url( 'hero-3', 'assets/img/projects/genesian-theatre-9.jpg' ),
	);
}
?>
<section <?php echo get_block_wrapper_attributes( array( 'class' => 'hero', 'id' => 'home' ) ); // phpcs:ignore ?>>
	<div class="hero__slides" aria-hidden="true">
		<?php foreach ( $platfourm_slides as $platfourm_i => $platfourm_url ) : ?>
			<div class="hero__slide<?php echo 0 === $platfourm_i ? ' is-active' : ''; ?>">
				<img src="<?php echo esc_url( $platfourm_url ); ?>" alt="" loading="<?php echo 0 === $platfourm_i ? 'eager' : 'lazy'; ?>">
			</div>
		<?php endforeach; ?>
	</div>
	<div class="hero__overlay"></div>
	<div class="container hero__content">
		<?php echo $content; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped ?>
	</div>
	<div class="hero__dots" id="heroDots" role="tablist" aria-label="Hero slides"></div>
	<a href="#about" class="hero__scroll" aria-label="Scroll down">
		<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 5v14M19 12l-7 7-7-7"/></svg>
	</a>
</section>
