## Hoodie-electron-demo(Hoodie Desktop application)
  We're team Rookies from Rails Girls Summer of code(RGSOC 2016).
  We are working on Hoodie native application(desktop app).
  For making it, we are planning to wrap the UI and functionalities with Electron.
  We are beginners in IT world.
  We would really appreciate any advice, comments or guidance that can help us learn.
  Thank you :D

## How to install electron-quick-start to get Electron started

After installing Node.js, we clone and install the electron-quick-start in our repo.

```bash
# Clone this repository
git clone https://github.com/Rookies-RGSOC2016/Hoodie-electron-demo
# Go into the repository
cd Hoodie-electron-demo
# Install dependencies and run the app
npm install && npm start
```
[Reference link] Electron and its API in the [documentation](http://electron.atom.io/docs/latest).

## Basic 3 files of Electron application:
- `package.json` - Points to the app's main file and lists its details and dependencies.
- `main.js` - Starts the app and creates a browser window to render HTML. This is the app's **main process**.
- `index.html` - A web page to render. This is the app's **renderer process**.
