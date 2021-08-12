# flathub-to-appcenter

A simple script that takes the Flatpak manifest of a Flathub app as an input and creates a manifest file compatible with elementary OS AppCenter.

## Usage

1. Clone this repo
2. `npm install`
3. Get the raw URL of the Flathub manifest (only JSON supported currently)
4. `node . https://github.com/flathub/com.github.yourusername.yourrepositoryname/raw/master/com.github.yourusername.yourrepositoryname.json`

This will create a file called `com.github.yourusername.yourrepositoryname.yml` in the current directory. Copy it wherever.

### Assumptions

- The app uses `io.elementary.BaseApp` as `base` in the Flathub manifest.
- In the list of modules, the app itself is the last entry.