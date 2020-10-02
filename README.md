# Fibonacci Multiplication Table Console App

This app takes the output from a Fibonacci generator library and outputs it as a string to
stdout.

## Requirements
`nodejs >= 10.12`

`npm >= 6.4.1`

In order to run the tests, you need to have at least `nodejs` __v10.12__ or higher.
If you're not interested in running tests, you can safely use `nodejs` __v8+__

## How to use

### __(Option 1)__ Clone this repository to a directory of your choice

```sh
git clone https://github.com/Kaukov/fibonacci_app_consoleapp.git
```

### __(Option 2)__ Use it as an npm module

Install via `npm`:
```sh
npm install git+https://github.com/Kaukov/fibonacci_app_consoleapp.git
```

## Running or including in your project

### Include in your project
```js
const fibonacciTableString = require('fibonacci_app_consoleapp')
```

### __(Option 1)__ Use the node binary
```sh
./bin/fibonacci_table
```

### __(Option 2)__ Use one of the built releases or build one on your own
```sh
npm run build
```

It will generate 3 executables inside a `build/` directory

## Usage

The app requires only 1 parameter:
```sh
-n <number>
```
or
```sh
-n=<number>
```

Where __\<number\>__ is an integer value
