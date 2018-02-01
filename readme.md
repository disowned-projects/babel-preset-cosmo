# babel-preset-cosmo

> Babel preset for Cosmo CLI

If you have bootstrapped your project with `cosmo`, you are already using this preset. If you would like to configure it, Add `.babelrc` to your project root. `Cosmo` will use that as babel config instead of default preset.

To use it in a non-cosmo project, Follow the steps bellow:

## Install

```bash
$ npm install @babel/core @babel/cli babel-preset-cosmo

$ npm install @babel/runtime --save
```

Or using `yarn`:

```bash
$ yarn add --dev @babel/core @babel/cli babel-preset-cosmo

$ yarn add @babel/runtime
```

## Usage

In your `.babelrc`:

```json
{
  "presets": ["cosmo"]
}
```

## ESNext supported features:

* All the features supported by `babel-preset-env`

* Support for `flow` types:

```js
const add = (x: number, y: number): number => x + y;
```

* Class properties

```js
class Dog {
  bark = () => console.log("Wooof!");
}
```

* Async/Await

```js
const sleep = ms => new Promise(res => setTimeout(res, ms));

const logAfterTenMs = async () => {
  await sleep(10);
  console.log("This will log after 10ms");
};
```

* Object rest-spread

```js
// Rest properties
let { x, y, ...z } = { x: 1, y: 2, a: 3, b: 4 };
console.log(x); // 1
console.log(y); // 2
console.log(z); // { a: 3, b: 4 }

// Spread properties
let n = { x, y, ...z };
console.log(n); // { x: 1, y: 2, a: 3, b: 4 }
```

## License

MIT © [Sid Doshi](https://sid.sh)
# babel-preset-cosmo
