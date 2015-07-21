![API Blueprint Focust Booster](http://i.imgur.com/Yz2chHL.png)

# API Blueprint Focus Booster

API Blueprint Focus Booster is a collection of [Gulp](http://gulpjs.com) tasks that help you write large [API Blueprints](https://apiblueprint.org) efficiently.

This tool lets you split one huge document into smaller ones so you can _easily_ edit them in your favorite text editor.

When you're done, it will validate your API Blueprints (JSON payloads), concatenate them into one file and publish the resulting API Blueprint into the [Apiary.io](http://apiary.io).

## So what does it do exactly?

1. Substitutes commonly used values (templating).
2. Validates JSON strings inside files (payloads).
3. Converts hard tabs to spaces.
4. Concatenates all files into one output file.
5. Publishes to Apiary.io.

## Install

> Preferred way is to use [Slush generator for API Blueprint Focus Booster](https://www.npmjs.com/package/slush-api-blueprint-focus-booster).

Clone this repository.

```bash
git clone https://github.com/saamo/api-blueprint-focus-booster.git
```

Since this tool is powered by [Gulp](http://gulpjs.com), you need to install all the dependencies via [NPM](https://npmjs.com) first.

```bash
cd api-blueprint-focus-booster
npm install
```

And finally copy the example config file.

```bash
cp config.example.js config.js
```

## Usage

Put your files (with `.apib` extension) into the `./src` directory and run following command.

```bash
gulp
```

Resulting API Blueprint is saved in `./build/output.apib` file.

### Publish to Apiary.io

In order to use publish task, you need to install the [Apiary CLI](https://client.apiary.io) first.

```bash
gem install apiaryio
```

Setup API _name_ and _token_ in the config file and then publish your API Blueprint using following command.

```bash
gulp publish
```

## License

MIT © [Samir Djellil](http://samirdjellil.com)
