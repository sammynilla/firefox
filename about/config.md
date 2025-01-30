# General
* browser.quitShorcut.disabled `true`

# Hardware Acceleration
* gfx.webrender.all `true`
* media.ffmpeg.vaapi.enabled `true`

# Translation
* browser.translations.automaticallyPopup `false`
* browser.translations.enable `false`
* browser.translations.panelShown `false`

# Personalization
* toolkit.legacyUserProfileCustomizations.stylesheets `true`
* browser.compactmode.show `true`
* browser.uidensity `1`
* browser.toolbars.bookmarks.showOtherBookmarks `false`

# Privacy

## Disable WebRTC
* media.peerconnection.enabled `false`
* media.navigator.enabled `false`

> This disables the use of microphone/webcam across your entire browser

## Fingerprinting
* privacy.resistFingerprinting `true`
* ~~privacy.resistFingerprinting.exemptedDomains `*.discord.com`~~

# Development
* devtools.chrome.enabled `true`
