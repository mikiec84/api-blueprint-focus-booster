# API Blueprint Focus Booster

API Blueprint Focus Booster is a collection of [Gulp](http://gulpjs.com) tasks that help you write large [API Blueprints](https://apiblueprint.org) efficiently.

This tool lets you split one huge document into smaller ones and provides you with a task which concatenates them into one file (_among other things like templating or JSON validation_) which you can then copy & paste directly into the [Apiary](http://apiary.io).

## So what does it do exactly?

1. Substitutes commonly used values (templating).
2. Validates JSON strings inside files (payloads).
3. Converts hard tabs to spaces.
4. Concatenates all files into one output file.

## Install

Clone this repository.

```
git clone https://github.com/saamo/api-blueprint-focus-booster.git
```

Since API Blueprint Focus Booster is powered by [Gulp](http://gulpjs.com), you need to install all the dependencies via [NPM](https://npmjs.com) first.

```
cd api-blueprint-focus-booster
npm install
```

And finally copy the example config file.

```
cp config/config.example.js config/config.js
```

## Usage

Put your files (with `.apib` extension) into the `./src` directory and run following command.

```
gulp
```

Resulting API Blueprint is saved in `./build/output.apib` file.

## License

Copyright (c) 2015 Samir Djellil

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE
