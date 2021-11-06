// ==UserScript==
// @name          EmuParadise Download Workaround
// @version       0.0.1
// @description   Replaces the download button link with a working one
// @match         https://www.emuparadise.me/*/*/*
// ==/UserScript==

(function() {
  'use strict';

  const id = encodeURIComponent(((document.URL).split('/'))[5]);
  let suf = '<a target="_blank" href="/roms/get-download.php' +
    '?gid=' + id +
    '&test=true"' +
    ' title="Download using the workaround script">' +
    'Download using the workaround script</a>' +
    '<br /><br />';
  Array.from(
    document.getElementsByClassName('download-link')
  ).map(dl => {
    dl.innerHTML = suf + dl.innerHTML;
  });
})();
