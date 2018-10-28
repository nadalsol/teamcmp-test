# TeamCMP Test

## Description

A skills test for TeamCMP.

TeamCMP Test is a Gulp-powered build system with these features:

* Image compression
* HTML minification
* ~~JS uglyfication~~
* Sass compilation and minification
* ~~Built-in BrowserSync server~~

## Installation

To use TeamCMP Test, your computer needs [Node.js](https://nodejs.org/en/) `v6.9.1` or greater.

### Setup

To set up TeamCMP Test, first download it with Git:

```bash
$ git clone git@github.com:nadalsol/teamcmp-test.git
```

Then open the folder in your command line, and install the needed dependencies:

```bash
$ cd teamcmp-test
$ npm install gulp-cli -g // install Gulp CLI (globally)
$ npm install // install rest of dev dependencies
```

## Build commands

Run project:

```
$ npm start
```

Load `index.html` in your browser:

~~Go to `/dist/index.html` and open the file in your browser (no "livereload" yet, sorry...).~~

## Environments

To switch between `development` and `production`, you must set a `process.env` variable as a reference to your environment:

```
$ SET NODE_ENV=development // Windows
$ export NODE_ENV=development // MacOSX or Linux
```

To know current env:

```
echo $NODE_ENV
```

**Important:** restart npm server after editing `process.env`.

## Author

<table>
  <tbody>
    <tr>
      <td align="center" valign="top">
        <img width="150" height="150" src="https://github.com/nadalsol.png?s=150">
        <br>
        <p>
          Nadal Soler<br>
          <a href="https://github.com/nadalsol">@nadalsol</a>
        </p>
        <p>Front-end Web Developer</p>
      </td>
    </tr>
  </tbody>
</table>
