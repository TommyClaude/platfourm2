<?php
/**
 * Title: Featured projects grid
 * Slug: platfourm/projects
 * Categories: platfourm
 * Viewport Width: 1400
 *
 * Each card's "HTML anchor" (block id) is the project slug — main.js uses
 * it to open the matching entry from its PROJECTS map in the detail modal.
 */
?>
<!-- wp:group {"tagName":"section","anchor":"projects","className":"section projects"} -->
<section class="wp-block-group section projects" id="projects">
<!-- wp:group {"className":"container"} -->
<div class="wp-block-group container">

<!-- wp:group {"className":"section-head"} -->
<div class="wp-block-group section-head">
<!-- wp:group -->
<div class="wp-block-group">
<!-- wp:paragraph {"className":"eyebrow reveal"} -->
<p class="eyebrow reveal">Featured Projects</p>
<!-- /wp:paragraph -->
<!-- wp:heading {"className":"section-title reveal"} -->
<h2 class="wp-block-heading section-title reveal">Recent work we’re<br>proud of</h2>
<!-- /wp:heading -->
</div>
<!-- /wp:group -->
</div>
<!-- /wp:group -->

<!-- wp:group {"className":"projects__grid"} -->
<div class="wp-block-group projects__grid">

<!-- wp:group {"anchor":"genesian-theatre","className":"project-card reveal"} -->
<div class="wp-block-group project-card reveal" id="genesian-theatre">
<!-- wp:group {"className":"project-card__media"} -->
<div class="wp-block-group project-card__media">
<!-- wp:paragraph {"className":"project-card__tag"} -->
<p class="project-card__tag">Commercial Fit-out</p>
<!-- /wp:paragraph -->
<!-- wp:image -->
<figure class="wp-block-image"><img src="<?php echo esc_url( get_theme_file_uri( 'assets/img/projects/genesian-theatre-1.jpg' ) ); ?>" alt="Genesian Theatre — teal staircase with gold balustrade and timber panelling"/></figure>
<!-- /wp:image -->
</div>
<!-- /wp:group -->
<!-- wp:group {"className":"project-card__body"} -->
<div class="wp-block-group project-card__body">
<!-- wp:heading {"level":3,"className":"project-card__title"} -->
<h3 class="wp-block-heading project-card__title">Genesian Theatre</h3>
<!-- /wp:heading -->
<!-- wp:paragraph {"className":"project-card__location"} -->
<p class="project-card__location">Sydney, NSW</p>
<!-- /wp:paragraph -->
</div>
<!-- /wp:group -->
</div>
<!-- /wp:group -->

<!-- wp:group {"anchor":"new-build-duplex","className":"project-card reveal"} -->
<div class="wp-block-group project-card reveal" id="new-build-duplex">
<!-- wp:group {"className":"project-card__media"} -->
<div class="wp-block-group project-card__media">
<!-- wp:paragraph {"className":"project-card__tag"} -->
<p class="project-card__tag">Residential · New Build</p>
<!-- /wp:paragraph -->
<!-- wp:image -->
<figure class="wp-block-image"><img src="<?php echo esc_url( get_theme_file_uri( 'assets/img/projects/new-build-duplex-1.jpg' ) ); ?>" alt="New build duplex in Mudgee NSW — finished street view"/></figure>
<!-- /wp:image -->
</div>
<!-- /wp:group -->
<!-- wp:group {"className":"project-card__body"} -->
<div class="wp-block-group project-card__body">
<!-- wp:heading {"level":3,"className":"project-card__title"} -->
<h3 class="wp-block-heading project-card__title">New Build Duplex</h3>
<!-- /wp:heading -->
<!-- wp:paragraph {"className":"project-card__location"} -->
<p class="project-card__location">Mudgee, NSW</p>
<!-- /wp:paragraph -->
</div>
<!-- /wp:group -->
</div>
<!-- /wp:group -->

<!-- wp:group {"anchor":"full-home-renovation","className":"project-card reveal"} -->
<div class="wp-block-group project-card reveal" id="full-home-renovation">
<!-- wp:group {"className":"project-card__media"} -->
<div class="wp-block-group project-card__media">
<!-- wp:paragraph {"className":"project-card__tag"} -->
<p class="project-card__tag">Residential · Renovation</p>
<!-- /wp:paragraph -->
<!-- wp:image -->
<figure class="wp-block-image"><img src="<?php echo esc_url( get_theme_file_uri( 'assets/img/projects/full-home-renovation-1.jpg' ) ); ?>" alt="Fully renovated weatherboard home with new carport and white picket fence"/></figure>
<!-- /wp:image -->
</div>
<!-- /wp:group -->
<!-- wp:group {"className":"project-card__body"} -->
<div class="wp-block-group project-card__body">
<!-- wp:heading {"level":3,"className":"project-card__title"} -->
<h3 class="wp-block-heading project-card__title">Full Home Renovation</h3>
<!-- /wp:heading -->
<!-- wp:paragraph {"className":"project-card__location"} -->
<p class="project-card__location">Central Coast, NSW</p>
<!-- /wp:paragraph -->
</div>
<!-- /wp:group -->
</div>
<!-- /wp:group -->

<!-- wp:group {"anchor":"sydney-airport-terminal","className":"project-card reveal"} -->
<div class="wp-block-group project-card reveal" id="sydney-airport-terminal">
<!-- wp:group {"className":"project-card__media"} -->
<div class="wp-block-group project-card__media">
<!-- wp:paragraph {"className":"project-card__tag"} -->
<p class="project-card__tag">Commercial · Airport</p>
<!-- /wp:paragraph -->
<!-- wp:image -->
<figure class="wp-block-image"><img src="<?php echo esc_url( get_theme_file_uri( 'assets/img/projects/sydney-airport-terminal-1.jpg' ) ); ?>" alt="Sydney Airport T2 food court seating with charger upgrade benches"/></figure>
<!-- /wp:image -->
</div>
<!-- /wp:group -->
<!-- wp:group {"className":"project-card__body"} -->
<div class="wp-block-group project-card__body">
<!-- wp:heading {"level":3,"className":"project-card__title"} -->
<h3 class="wp-block-heading project-card__title">Sydney Airport Terminal</h3>
<!-- /wp:heading -->
<!-- wp:paragraph {"className":"project-card__location"} -->
<p class="project-card__location">Mascot, NSW</p>
<!-- /wp:paragraph -->
</div>
<!-- /wp:group -->
</div>
<!-- /wp:group -->

<!-- wp:group {"anchor":"redland-grammar-school","className":"project-card reveal"} -->
<div class="wp-block-group project-card reveal" id="redland-grammar-school">
<!-- wp:group {"className":"project-card__media"} -->
<div class="wp-block-group project-card__media">
<!-- wp:paragraph {"className":"project-card__tag"} -->
<p class="project-card__tag">Education</p>
<!-- /wp:paragraph -->
<!-- wp:image -->
<figure class="wp-block-image"><img src="<?php echo esc_url( get_theme_file_uri( 'assets/img/projects/redland-grammar-school-1.jpg' ) ); ?>" alt="Redland Grammar School corridor with new acoustic wall panels and carpet"/></figure>
<!-- /wp:image -->
</div>
<!-- /wp:group -->
<!-- wp:group {"className":"project-card__body"} -->
<div class="wp-block-group project-card__body">
<!-- wp:heading {"level":3,"className":"project-card__title"} -->
<h3 class="wp-block-heading project-card__title">Redland Grammar School</h3>
<!-- /wp:heading -->
<!-- wp:paragraph {"className":"project-card__location"} -->
<p class="project-card__location">Cremorne, NSW</p>
<!-- /wp:paragraph -->
</div>
<!-- /wp:group -->
</div>
<!-- /wp:group -->

<!-- wp:group {"anchor":"kindalin-childcare","className":"project-card reveal"} -->
<div class="wp-block-group project-card reveal" id="kindalin-childcare">
<!-- wp:group {"className":"project-card__media"} -->
<div class="wp-block-group project-card__media">
<!-- wp:paragraph {"className":"project-card__tag"} -->
<p class="project-card__tag">Education · Joinery</p>
<!-- /wp:paragraph -->
<!-- wp:image -->
<figure class="wp-block-image"><img src="<?php echo esc_url( get_theme_file_uri( 'assets/img/projects/kindalin-childcare-1.jpg' ) ); ?>" alt="Kindalin Childcare Rouse Hill — curved timber batten staircase screen"/></figure>
<!-- /wp:image -->
</div>
<!-- /wp:group -->
<!-- wp:group {"className":"project-card__body"} -->
<div class="wp-block-group project-card__body">
<!-- wp:heading {"level":3,"className":"project-card__title"} -->
<h3 class="wp-block-heading project-card__title">Kindalin Childcare</h3>
<!-- /wp:heading -->
<!-- wp:paragraph {"className":"project-card__location"} -->
<p class="project-card__location">Rouse Hill, NSW</p>
<!-- /wp:paragraph -->
</div>
<!-- /wp:group -->
</div>
<!-- /wp:group -->

<!-- wp:group {"anchor":"elanora-aged-care","className":"project-card reveal"} -->
<div class="wp-block-group project-card reveal" id="elanora-aged-care">
<!-- wp:group {"className":"project-card__media"} -->
<div class="wp-block-group project-card__media">
<!-- wp:paragraph {"className":"project-card__tag"} -->
<p class="project-card__tag">Aged Care</p>
<!-- /wp:paragraph -->
<!-- wp:image -->
<figure class="wp-block-image"><img src="<?php echo esc_url( get_theme_file_uri( 'assets/img/projects/elanora-aged-care-1.jpg' ) ); ?>" alt="Elanora aged care lounge with upholstered banquette seating"/></figure>
<!-- /wp:image -->
</div>
<!-- /wp:group -->
<!-- wp:group {"className":"project-card__body"} -->
<div class="wp-block-group project-card__body">
<!-- wp:heading {"level":3,"className":"project-card__title"} -->
<h3 class="wp-block-heading project-card__title">Elanora Aged Care</h3>
<!-- /wp:heading -->
<!-- wp:paragraph {"className":"project-card__location"} -->
<p class="project-card__location">Elanora, NSW</p>
<!-- /wp:paragraph -->
</div>
<!-- /wp:group -->
</div>
<!-- /wp:group -->

<!-- wp:html -->
<a class="project-card project-card--cta reveal" href="#contact">
  <div class="project-card__cta-body">
    <h3>Your project could be next</h3>
    <p>Tell us what you’re planning — we’ll take it from concept to completion.</p>
    <span class="btn btn--white">Start a Conversation</span>
  </div>
</a>
<!-- /wp:html -->

</div>
<!-- /wp:group -->

</div>
<!-- /wp:group -->
</section>
<!-- /wp:group -->
