# ✨ Reactless.ts

A handy production-ready template for **rapidly** frontend development that you've often dreamed of.

Included awesome [Preact](https://preactjs.com/) framework with TypeScript, [Tailwind CSS](https://tailwindcss.com/) & [Headless UI](https://headlessui.dev/) visual frameworks, and configured next generation frontend tooling called [Vite](https://vitejs.dev/).

🔥 Yep, with **full backward compatibility** to all of [React.js](https://reactjs.org/) ecosystem, but without its overhead! 🔥

## ⚡️ Quick Start

Make sure that the [Node.js](https://nodejs.org/en/) is installed. Version `12.x` and higher is required.

For easily template installation process (_without `git clone` and other things_), please install `degit` tool:

```bash
npm install -g degit
```

Next, let's download `Reactless.ts` template:

```bash
degit koddr/reactless-ts my-app
```

And, finally, go to your app folder, install dependencies and run dev server:

```bash
cd ./my-app && npm install && npm run dev
```

![Screenshot](https://user-images.githubusercontent.com/11155743/115931263-8563f380-a493-11eb-8625-dd46969f703c.png)

## 🏗 Build for production

For create a production build, just run `npm run build` command:

```console
vite v2.X.X building for production...

✓ X modules transformed.

dist/index.html               0.64kb
dist/assets/favicon.XXX.svg   1.49kb
dist/assets/index.XXX.js      3.77kb / brotli: 1.55kb
dist/assets/index.XXX.css     13.85kb / brotli: 3.02kb
dist/assets/vendor.XXX.js     37.88kb / brotli: 12.34kb
```

## 🔄 Easy update for all dependencies

For update (and upgrade) all dependencies, just run `npm run update` command. This will do three things at once: check outdated packages, upgrade them, and then install new versions of those packages:

```console
# 1. npm outdated

Package       Current  Wanted  Latest  Location                   Depended by
@types/node    15.0.3  15.6.0  15.6.0  node_modules/@types/node   project
@types/react   17.0.5  17.0.6  17.0.6  node_modules/@types/react  project
postcss        8.2.15   8.3.0   8.3.0  node_modules/postcss       project
vite            2.3.2   2.3.3   2.3.3  node_modules/vite          project

# 2. npx npm-check-updates -u

Need to install the following packages:
  npm-check-updates

Ok to proceed? (y) ___ # <-- type 'Y' to continue process

Upgrading /user/folder/project/package.json

[====================] 19/19 100%

 @types/node   ^15.0.3  →  ^15.6.0
 @types/react  ^17.0.5  →  ^17.0.6
 postcss       ^8.2.15  →   ^8.3.0
 vite           ^2.3.2  →   ^2.3.3

# 3. npm install

added X package, removed X package, changed X packages, and audited XXX packages in 6s
```

## 🤔 Why such a strange name?

This template was created in pursuit of **reducing size** of the bundle, but with a great desire to make backward compatibility with React. Therefore, the name denotes the direction of the author's movement to **reduce the presence of React.js** in the template. Less React, less bundle size! That's it.

## ⚠️ License

MIT &copy; [Vic Shóstak](https://shostak.dev/) & [True web artisans](https://1wa.co/).
