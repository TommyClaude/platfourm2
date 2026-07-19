<?php
/**
 * Title: Site header
 * Slug: platfourm/header
 * Inserter: no
 */
?>
<!-- wp:html -->
<header class="header" id="header">
  <div class="container header__inner">
    <a href="<?php echo esc_url( home_url( '/' ) ); ?>" class="header__logo" aria-label="Platfourm — home">
      <img class="header__logo-img header__logo-img--light" src="<?php echo esc_url( get_theme_file_uri( 'assets/img/platfourm-horizontal-white.png' ) ); ?>" width="900" height="80" alt="">
      <img class="header__logo-img header__logo-img--dark" src="<?php echo esc_url( get_theme_file_uri( 'assets/img/platfourm-horizontal.png' ) ); ?>" width="900" height="80" alt="">
    </a>

    <nav class="nav" id="nav" aria-label="Main navigation">
      <ul class="nav__list">
        <li><a class="nav__link is-active" href="#home">Home</a></li>
        <li><a class="nav__link" href="#about">About</a></li>
        <li><a class="nav__link" href="#projects">Projects</a></li>
        <li><a class="nav__link" href="#services">Services</a></li>
        <li><a class="nav__link" href="#contact">Contact Us</a></li>
      </ul>
    </nav>

    <a href="tel:0407033938" class="header__phone">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
      <span class="u-line">0407 033 938</span>
    </a>

    <button class="header__burger" id="burger" aria-label="Open menu" aria-expanded="false" aria-controls="nav">
      <span></span><span></span><span></span>
    </button>
  </div>
</header>
<!-- /wp:html -->
