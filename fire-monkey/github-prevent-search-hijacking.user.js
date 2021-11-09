// ==UserScript==
// @name             Github Prevent Search Hijacking
// @version          0.0.1
// @description      Prevents forwardslash key from defaulting to Github's searchbox.
// @author           https://github.com/yurikhan/firefox-github-prevent-search-hijacking
// @match            *://*.github.com/*
// ==/UserScript==

(function() {
  'use strict';

  let searchbox = document.querySelector('input[name="q"]');
  let parent = searchbox.parentElement;
  let next = searchbox.nextSibling;
  parent.removeChild(searchbox);
  searchbox.setAttribute('data-hotkey', 's');
  parent.insertBefore(searchbox, next);
})();
