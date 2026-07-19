<?php
/**
 * Project detail modal — opened by clicking a project card.
 * Content is injected by assets/js/main.js from its PROJECTS map.
 */
?>
<div class="modal" id="projectModal" aria-hidden="true">
  <div class="modal__overlay" data-modal-close></div>
  <div class="modal__dialog" role="dialog" aria-modal="true" aria-labelledby="modalTitle">
    <button class="modal__close" type="button" aria-label="Close" data-modal-close>
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" aria-hidden="true"><path d="M6 6l12 12M18 6L6 18"/></svg>
    </button>
    <div class="modal__scroll">
      <header class="modal__head">
        <span class="modal__tag" id="modalTag"></span>
        <h2 class="modal__title" id="modalTitle"></h2>
        <p class="modal__location" id="modalLocation"></p>
        <p class="modal__desc" id="modalDesc"></p>
        <a class="modal__cta" href="#contact" data-modal-close>
          <span class="u-line">Start a project like this</span>
        </a>
      </header>
      <div class="modal__gallery" id="modalGallery"></div>
    </div>
  </div>
</div>
