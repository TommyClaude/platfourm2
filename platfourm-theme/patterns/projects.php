<?php
/**
 * Title: Featured projects grid
 * Slug: platfourm/projects
 * Categories: platfourm
 * Inserter: no
 *
 * The heading stays editable in the Site Editor; the grid itself is generated
 * from the Project posts (Projects menu in wp-admin), so adding or editing a
 * project updates the grid and the modal automatically. Each card carries its
 * project slug as the block "HTML anchor" id, which main.js uses to open the
 * matching modal.
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

<!-- wp:html -->
<div class="projects__grid">
<?php
$platfourm_projects = platfourm_get_projects();
foreach ( $platfourm_projects as $platfourm_project ) :
	$platfourm_pid   = $platfourm_project->ID;
	$platfourm_slug  = $platfourm_project->post_name;
	$platfourm_loc   = get_post_meta( $platfourm_pid, '_platfourm_location', true );
	$platfourm_terms = get_the_terms( $platfourm_pid, 'project_type' );
	$platfourm_tag   = ( $platfourm_terms && ! is_wp_error( $platfourm_terms ) ) ? $platfourm_terms[0]->name : '';
	?>
  <div class="project-card reveal" id="<?php echo esc_attr( $platfourm_slug ); ?>">
    <div class="project-card__media">
      <?php if ( $platfourm_tag ) : ?><span class="project-card__tag"><?php echo esc_html( $platfourm_tag ); ?></span><?php endif; ?>
      <?php
		if ( has_post_thumbnail( $platfourm_pid ) ) {
			echo get_the_post_thumbnail( $platfourm_pid, 'large', array( 'loading' => 'lazy', 'alt' => esc_attr( get_the_title( $platfourm_pid ) ) ) );
		}
		?>
    </div>
    <div class="project-card__body">
      <h3 class="project-card__title"><?php echo esc_html( get_the_title( $platfourm_pid ) ); ?></h3>
      <?php if ( $platfourm_loc ) : ?><p class="project-card__location"><?php echo esc_html( $platfourm_loc ); ?></p><?php endif; ?>
    </div>
  </div>
<?php endforeach; ?>
  <a class="project-card project-card--cta reveal" href="#contact">
    <div class="project-card__cta-body">
      <h3>Your project could be next</h3>
      <p>Tell us what you’re planning — we’ll take it from concept to completion.</p>
      <span class="btn btn--white">Start a Conversation</span>
    </div>
  </a>
</div>
<!-- /wp:html -->

</div>
<!-- /wp:group -->
</section>
<!-- /wp:group -->
