# General
* browser.quitShorcut.disabled `true`
* accessibility.typeaheadfind `false`
* accessibility.typeaheadfind.autostart `false`
* accessibility.typeaheadfind.manual `false`

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
> I occasionally use Discord via browser while on Linux, so WebRTC is required.
* ~~media.peerconnection.enabled `false`~~
* ~~media.navigator.enabled `false`~~

> [!NOTE]
> This will completely disable the use of microphones and webcams across your entire browser.

## Fingerprinting
* privacy.resistFingerprinting `true`
* privacy.resistFingerprinting.exemptedDomains `localhost,discord.com`

> [!WARNING]
> Setting privacy.resistFingerprinting can break some site functionality.

# Development
* devtools.chrome.enabled `true`
