<?php
/**
 * Front-end (and Site Editor preview) render for the Projects grid block.
 * Cards are generated from the Project posts; each carries its slug as an id
 * so main.js can open the matching detail modal.
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

$platfourm_projects = function_exists( 'platfourm_get_projects' ) ? platfourm_get_projects() : array();
?>
<div <?php echo get_block_wrapper_attributes( array( 'class' => 'projects__grid' ) ); // phpcs:ignore ?>>
	<?php
	foreach ( $platfourm_projects as $platfourm_project ) :
		$platfourm_pid   = $platfourm_project->ID;
		$platfourm_slug  = $platfourm_project->post_name;
		$platfourm_loc   = get_post_meta( $platfourm_pid, '_platfourm_location', true );
		$platfourm_terms = get_the_terms( $platfourm_pid, 'project_type' );
		$platfourm_tag   = ( $platfourm_terms && ! is_wp_error( $platfourm_terms ) ) ? $platfourm_terms[0]->name : '';
		?>
		<div class="project-card reveal" id="<?php echo esc_attr( $platfourm_slug ); ?>">
			<div class="project-card__media">
				<?php if ( $platfourm_tag ) : ?>
					<span class="project-card__tag"><?php echo esc_html( $platfourm_tag ); ?></span>
				<?php endif; ?>
				<?php
				if ( has_post_thumbnail( $platfourm_pid ) ) {
					echo get_the_post_thumbnail( $platfourm_pid, 'large', array( 'loading' => 'lazy', 'alt' => esc_attr( get_the_title( $platfourm_pid ) ) ) );
				}
				?>
			</div>
			<div class="project-card__body">
				<h3 class="project-card__title"><?php echo esc_html( get_the_title( $platfourm_pid ) ); ?></h3>
				<?php if ( $platfourm_loc ) : ?>
					<p class="project-card__location"><?php echo esc_html( $platfourm_loc ); ?></p>
				<?php endif; ?>
			</div>
		</div>
	<?php endforeach; ?>

	<a class="project-card project-card--cta reveal" href="#contact">
		<div class="project-card__cta-body">
			<h3>Your project could be next</h3>
			<p>Tell us what you&rsquo;re planning — we&rsquo;ll take it from concept to completion.</p>
			<span class="btn btn--white">Start a Conversation</span>
		</div>
	</a>
</div>
