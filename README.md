![API Blueprint Focust Booster](http://i.imgur.com/Yz2chHL.png)

# API Blueprint Focus Booster

API Blueprint Focus Booster is a collection of [Gulp](http://gulpjs.com) tasks that help you write large [API Blueprints](https://apiblueprint.org) efficiently.

This tool lets you split one huge document into smaller ones and provides you with a task which concatenates them into one file (_among other things like templating or JSON validation_) which you can then copy & paste directly into the [Apiary](http://apiary.io) for example.

## So what does it do exactly?

1. Substitutes commonly used values (templating).
2. Validates JSON strings inside files (payloads).
3. Converts hard tabs to spaces.
4. Concatenates all files into one output file.

## Install

> Preferred way is to use [Slush generator for API Blueprint Focus Booster](https://www.npmjs.com/package/slush-api-blueprint-focus-booster).

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
cp config.example.js config.js
```

## Usage

Put your files (with `.apib` extension) into the `./src` directory and run following command.

```
gulp
```

Resulting API Blueprint is saved in `./build/output.apib` file.

## License

MIT License Copyright (c) 2015 Samir Djellil