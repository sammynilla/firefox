// ==UserScript==
// @name          Kill Bandcamp (View Embedded Player)
// @version       0.0.3
// @description   Adds a button to view the album in an embedded player.
// @author        sammynilla
// @match         *://*.bandcamp.com/album/*
// @match         *://*.bandcamp.com/track/*
// ==/UserScript==

(function() {
  'use strict';

  const URL_BASE = 'https://bandcamp.com/EmbeddedPlayer/v=2';

  // USER SETTINGS
  const BACKGROUND_COLOR = '#000000';
  const LINK_COLOR       = '#989898';
  const PLAYER_SIZE      = 'medium'; // 'small', 'medium' or 'large'
  // (Recommended): Medium or Large for the best UI experience
  // I suggest pairing this userscript with the following add-ons:
  // - https://github.com/butterknight/bandcamp-volume-control
  // - https://github.com/sammynilla/firefox/blob/main/fire-monkey/bandcamp_embedded_player.user.css

  // Start of UserScript
  let URL = document.head.querySelector("meta[property~='og:video']").content;
  let keypairs = (URL.split(URL_BASE)[1]).split('/');

  const props = new Map();
  keypairs.forEach(add_to_props);

  // Default settings. Do not alter.
  props.set('tracklist', true);
  props.set('size', PLAYER_SIZE);
  switch (PLAYER_SIZE) {
    case "tiny": {
      return; // common tiny player L
    }break;
    case "small": {
      props.delete('artwork'); // prevents small player from having a broken display
    }break;
    case "medium": {
      // silly way to keep the player the medium size but still show the bandcamp volume control
      props.set('tracklist', false);
      props.set('size', 'large');
    }break;
  }
  // Integrate color props
  props.set('bgcol',   BACKGROUND_COLOR.replace('#', ''));
  props.set('linkcol', LINK_COLOR.replace('#', ''));

  // Prep the new URL
  URL = URL_BASE + '/';
  props.forEach(function(value, key) {
    URL = URL + key + '=' + value + '/';
  });

  // Add a clickable element to the page
  const click_me = '<a href="' + URL + '">' + 'Listen w/ Embedded Player</a>';
  document.querySelector('.hd').innerHTML = click_me;

  // HELPER FUNCTIONS
  function add_to_props(value) {
    let property = value.split('=');
    if (property[1]) {
      props.set(property[0], property[1]);
    }
  }
})();
