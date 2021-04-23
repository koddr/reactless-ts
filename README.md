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

```bash
vite v2.2.1 building for production...

✓ 40 modules transformed.

dist/assets/favicon.17e50649.svg   1.49kb
dist/index.html                    0.58kb
dist/assets/index.ec454dbd.js      4.38kb / brotli: 1.82kb
dist/assets/index.fa54e5c4.css     13.85kb / brotli: 3.02kb
dist/assets/vendor.a88e8b8c.js     38.04kb / brotli: 12.46kb
```

## 🤔 Why such a strange name? 

This template was created in pursuit of **reducing size** of the bundle, but with a great desire to make backward compatibility with React. Therefore, the name denotes the direction of the author's movement to **reduce the presence of React.js** in the template. Less React, less bundle size! That's it.

## ⚠️ License

MIT &copy; [Vic Shóstak](https://shostak.dev/) & [True web artisans](https://1wa.co/).
