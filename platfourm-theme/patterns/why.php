<?php
/**
 * Title: Why Platfourm
 * Slug: platfourm/why
 * Categories: platfourm
 * Viewport Width: 1400
 */
?>
<!-- wp:group {"tagName":"section","anchor":"why","className":"section why"} -->
<section class="wp-block-group section why" id="why">
<!-- wp:group {"className":"container why__grid"} -->
<div class="wp-block-group container why__grid">

<!-- wp:group {"className":"why__body"} -->
<div class="wp-block-group why__body">
<!-- wp:paragraph {"className":"eyebrow eyebrow--light reveal"} -->
<p class="eyebrow eyebrow--light reveal">Why Platfourm</p>
<!-- /wp:paragraph -->
<!-- wp:heading {"className":"section-title section-title--light reveal"} -->
<h2 class="wp-block-heading section-title section-title--light reveal">A builder that puts<br>the client first</h2>
<!-- /wp:heading -->

<!-- wp:group {"className":"why__item reveal"} -->
<div class="wp-block-group why__item reveal">
<!-- wp:paragraph {"className":"why__num"} -->
<p class="why__num">01</p>
<!-- /wp:paragraph -->
<!-- wp:group -->
<div class="wp-block-group">
<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading">Client-first, always</h3>
<!-- /wp:heading -->
<!-- wp:paragraph -->
<p>Our primary focus is the client — from the first concept meeting to the final handover.</p>
<!-- /wp:paragraph -->
</div>
<!-- /wp:group -->
</div>
<!-- /wp:group -->

<!-- wp:group {"className":"why__item reveal"} -->
<div class="wp-block-group why__item reveal">
<!-- wp:paragraph {"className":"why__num"} -->
<p class="why__num">02</p>
<!-- /wp:paragraph -->
<!-- wp:group -->
<div class="wp-block-group">
<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading">Open &amp; collaborative</h3>
<!-- /wp:heading -->
<!-- wp:paragraph -->
<p>We build relationships with clients and partners that are open, honest and collaborative.</p>
<!-- /wp:paragraph -->
</div>
<!-- /wp:group -->
</div>
<!-- /wp:group -->

<!-- wp:group {"className":"why__item reveal"} -->
<div class="wp-block-group why__item reveal">
<!-- wp:paragraph {"className":"why__num"} -->
<p class="why__num">03</p>
<!-- /wp:paragraph -->
<!-- wp:group -->
<div class="wp-block-group">
<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading">Above &amp; beyond</h3>
<!-- /wp:heading -->
<!-- wp:paragraph -->
<p>Decades of experience across private and public sectors — delivering results that go above and beyond.</p>
<!-- /wp:paragraph -->
</div>
<!-- /wp:group -->
</div>
<!-- /wp:group -->

</div>
<!-- /wp:group -->

<?php
$platfourm_why_id  = platfourm_image_id( 'why-1' );
$platfourm_why_url = platfourm_image_url( 'why-1', 'assets/img/genesian-bar.jpg' );
$platfourm_why_att = array( 'sizeSlug' => 'large', 'linkDestination' => 'none', 'className' => 'why__media reveal' );
if ( $platfourm_why_id ) {
	$platfourm_why_att['id'] = $platfourm_why_id;
}
?>
<!-- wp:image <?php echo wp_json_encode( $platfourm_why_att ); ?> -->
<figure class="wp-block-image size-large why__media reveal"><img src="<?php echo esc_url( $platfourm_why_url ); ?>" alt="Genesian Theatre bar — timber joinery with marble benchtop"<?php echo $platfourm_why_id ? ' class="wp-image-' . (int) $platfourm_why_id . '"' : ''; ?>/></figure>
<!-- /wp:image -->

</div>
<!-- /wp:group -->
</section>
<!-- /wp:group -->
