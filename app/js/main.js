////////////////////////////////////////////////////////////////////////////////
//                                                                            //
// The document ready event executes already when the HTML-Document is loaded //
// and the DOM is ready, even if all the graphics haven't loaded yet.         //
//                                                                            //
////////////////////////////////////////////////////////////////////////////////

const _onLoadListener = function () {
  /**
   * Hamburger menu
   *
   * 1. Toggle `header-nav` visibility.
   * 2. Toggle `header-hamburger-open` and `header-hamburger-close` icons.
   */
  (function () {
    var headerHamburger = document.querySelectorAll('#header-hamburger'),
        headerHamburgerOpen = document.querySelectorAll('#header-hamburger-open'),
        headerHamburgerClose = document.querySelectorAll('#header-hamburger-close'),
        headerNav = document.querySelectorAll('#header-nav');

    headerHamburger.forEach(_element => _element.addEventListener('click', function (event) {
      event.preventDefault();
      headerNav.forEach(_element2 => _element2.classList.toggle('is-small-hidden')); // 1

      headerHamburgerOpen.forEach(_element3 => _element3.classList.toggle('is-hidden')); // 2
      headerHamburgerClose.forEach(_element4 => _element4.classList.toggle('is-hidden')); // 2
    }));
  })();

  /**
   * Download layer
   *
   * 1. Toggle `download` element visibility, for small devices.
   */
  (function () {
    var buttonDownload = document.querySelectorAll('#button-download'),
        download = document.querySelectorAll('#download');

    buttonDownload.forEach(_element5 => _element5.addEventListener('click', function (event) {
      event.preventDefault();
      download.forEach(_element6 => _element6.classList.toggle('is-small-hidden')); // 1
    }));
  })();
};

if (document.readyState !== 'loading') {
  _onLoadListener();
} else {
  document.addEventListener('DOMContentLoaded', _onLoadListener);
}
