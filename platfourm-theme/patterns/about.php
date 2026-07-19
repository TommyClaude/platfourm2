<?php
/**
 * Title: About — who we are
 * Slug: platfourm/about
 * Categories: platfourm
 * Inserter: no
 *
 * The two photos are core Image blocks sourced from the Media Library, so they
 * can be swapped in the Site Editor.
 */

$platfourm_about_1    = platfourm_image_id( 'about-1' );
$platfourm_about_1_u  = platfourm_image_url( 'about-1', 'assets/img/who-we-are-1.jpg' );
$platfourm_about_2    = platfourm_image_id( 'about-2' );
$platfourm_about_2_u  = platfourm_image_url( 'about-2', 'assets/img/who-we-are-2.jpg' );
$platfourm_founder_u  = platfourm_image_url( 'founder', 'assets/img/sam-avatar.webp' );

$platfourm_img_attrs = function ( $id, $cls ) {
	$attrs = array( 'sizeSlug' => 'large', 'linkDestination' => 'none', 'className' => $cls );
	if ( $id ) {
		$attrs['id'] = $id;
	}
	return wp_json_encode( $attrs );
};
?>
<!-- wp:group {"tagName":"section","anchor":"about","className":"section about"} -->
<section class="wp-block-group section about" id="about">
<!-- wp:group {"className":"container about__grid"} -->
<div class="wp-block-group container about__grid">

<!-- wp:group {"className":"about__media reveal"} -->
<div class="wp-block-group about__media reveal">
<!-- wp:image <?php echo $platfourm_img_attrs( $platfourm_about_1, 'about__photo about__photo--main' ); ?> -->
<figure class="wp-block-image size-large about__photo about__photo--main"><img src="<?php echo esc_url( $platfourm_about_1_u ); ?>" alt="Platfourm joinery team member installing custom shelving"<?php echo $platfourm_about_1 ? ' class="wp-image-' . (int) $platfourm_about_1 . '"' : ''; ?>/></figure>
<!-- /wp:image -->
<!-- wp:image <?php echo $platfourm_img_attrs( $platfourm_about_2, 'about__photo about__photo--overlap' ); ?> -->
<figure class="wp-block-image size-large about__photo about__photo--overlap"><img src="<?php echo esc_url( $platfourm_about_2_u ); ?>" alt="Finished heritage theatre corridor with timber panelling"<?php echo $platfourm_about_2 ? ' class="wp-image-' . (int) $platfourm_about_2 . '"' : ''; ?>/></figure>
<!-- /wp:image -->
<!-- wp:group {"className":"about__badge"} -->
<div class="wp-block-group about__badge">
<!-- wp:paragraph {"className":"about__badge-value"} -->
<p class="about__badge-value">Est.</p>
<!-- /wp:paragraph -->
<!-- wp:paragraph {"className":"about__badge-year"} -->
<p class="about__badge-year">2016</p>
<!-- /wp:paragraph -->
</div>
<!-- /wp:group -->
</div>
<!-- /wp:group -->

<!-- wp:group {"className":"about__body"} -->
<div class="wp-block-group about__body">
<!-- wp:paragraph {"className":"eyebrow reveal"} -->
<p class="eyebrow reveal">Who We Are</p>
<!-- /wp:paragraph -->
<!-- wp:heading {"className":"section-title reveal"} -->
<h2 class="wp-block-heading section-title reveal">Building relationships,<br>delivering results</h2>
<!-- /wp:heading -->
<!-- wp:paragraph {"className":"reveal"} -->
<p class="reveal">Platfourm was founded in 2016 by Samuel Wilton with a passion for construction. Platfourm’s primary focus is the client, from concept to completion. We are about building relationships with our clients and partners that are open and collaborative to deliver results that go above and beyond.</p>
<!-- /wp:paragraph -->
<!-- wp:paragraph {"className":"reveal"} -->
<p class="reveal">We are an Australian company with decades of experience in handling new builds, renovations, and extensions for both private and public sectors. Over the years, we have been involved with the development and renovation of numerous residential and commercial building projects such as:</p>
<!-- /wp:paragraph -->
<!-- wp:list {"className":"about__list reveal"} -->
<ul class="wp-block-list about__list reveal">
<!-- wp:list-item --><li>Aged-care facilities</li><!-- /wp:list-item -->
<!-- wp:list-item --><li>Office fit-outs</li><!-- /wp:list-item -->
<!-- wp:list-item --><li>Airports</li><!-- /wp:list-item -->
<!-- wp:list-item --><li>Education</li><!-- /wp:list-item -->
<!-- wp:list-item --><li>Disability Housing (SDA)</li><!-- /wp:list-item -->
<!-- wp:list-item --><li>Residential new builds</li><!-- /wp:list-item -->
</ul>
<!-- /wp:list -->
<!-- wp:group {"className":"about__founder"} -->
<div class="wp-block-group about__founder">
<!-- wp:image <?php echo $platfourm_img_attrs( platfourm_image_id( 'founder' ), 'about__founder-avatar' ); ?> -->
<figure class="wp-block-image size-large about__founder-avatar"><img src="<?php echo esc_url( $platfourm_founder_u ); ?>" alt="Samuel Wilton"<?php echo platfourm_image_id( 'founder' ) ? ' class="wp-image-' . (int) platfourm_image_id( 'founder' ) . '"' : ''; ?>/></figure>
<!-- /wp:image -->
<!-- wp:group {"className":"about__founder-detail"} -->
<div class="wp-block-group about__founder-detail">
<!-- wp:paragraph {"className":"about__founder-name"} -->
<p class="about__founder-name">Samuel Wilton</p>
<!-- /wp:paragraph -->
<!-- wp:paragraph {"className":"about__founder-role"} -->
<p class="about__founder-role">Founder &amp; Managing Director</p>
<!-- /wp:paragraph -->
</div>
<!-- /wp:group -->
<!-- wp:buttons {"className":"about__founder-btns"} -->
<div class="wp-block-buttons about__founder-btns">
<!-- wp:button {"className":"btn about__founder-btn"} -->
<div class="wp-block-button btn about__founder-btn"><a class="wp-block-button__link wp-element-button" href="tel:0407033938">Talk to Sam</a></div>
<!-- /wp:button -->
</div>
<!-- /wp:buttons -->
</div>
<!-- /wp:group -->
</div>
<!-- /wp:group -->

</div>
<!-- /wp:group -->
</section>
<!-- /wp:group -->
