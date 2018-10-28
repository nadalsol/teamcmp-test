# TeamCMP Test

## Description

A skills test for TeamCMP.

TeamCMP Test is a Gulp-powered build system with these features:

* Image compression
* HTML minification
* JS uglyfication
* Sass compilation and minification

## Installation

To use TeamCMP Test, your computer needs [Node.js](https://nodejs.org/en/) `v6.9.1` or greater.

### Setup

To set up TeamCMP Test, first download it with Git:

```
$ git clone git@github.com:nadalsol/teamcmp-test.git
```

Then open the folder in your command line, and install the needed dependencies:

```
$ cd teamcmp-test
$ npm install gulp-cli -g // install Gulp CLI (globally)
$ npm install // install rest of dev dependencies
```

## Build commands

Run project:

```
$ npm start
```

To access the main page go to `/dist/index.html` and open the file in your browser (no "BrowserSync" yet, sorry...).

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

## Pattern Library

To do this test I've missed some context (more pages and components) to help me understand "the big picture" of the current design system. For instance, there're no `<h1>` in the current page (not semantically ideal), just one button variation (primary type), etc.

That's why I've created a basic Pattern Library, rendering the identified components plus some imagined variations (i.e. secondary buttons, rest of headings, among others...).

To access the Pattern Library go to `/dist/pattern-library.html` and open the file in your browser (no "BrowserSync" yet, sorry...).

## Compatibility

Fully tested with [BrowserStack](https://www.browserstack.com/) on these browsers:

### Desktop browsers

* Google Chrome Version 69.0.3497.100 (MacOSX High Sierra).
* Firefox Quantum 63.0 (MacOSX High Sierra).
* Safari Version 11.1.2 (MacOSX High Sierra).
* Microsoft Edge 17 (Windows 10).
* Microsoft Edge 16 (Windows 10).
* Internet Explorer 11 (Windows 10).

### Mobile browsers

* Safari on iPhone X (iOS).
* Chrome on iPhone 6 (iOS).
* Safari on iPad 6th (iOS).
* Chrome on Samsung Galaxy S9 (Android).
* Chrome on Samsung Galaxy S8 (Android).

## What would I've done differently if I had had more time

I would love to...

* Use a template engine –like Liquid, Twig or Handlebars– to split different patterns in partial files, getting a more consistent and well organised code.
* Use Autoprefixer, to ensure more browser support for modern CSS properties.
* Use BrowserSync.
* Use inlined `svg` for all icons, rather than `png`, to save HTTP requests and provide better scalable and responsive icons.
* Use the `srcset` attribute for the `<img>` element, to let browsers choose the right image for a specific viewport size (at least small images for mobile devices, medium images for tablets, large images for desktop devices).
* Renamed images with more descriptive names, to improve semantics and "on-site" SEO.
* Automation for `svg` file optimisation, with [svgomg](https://jakearchibald.github.io/svgomg/), to improve performance and increase page speed.
* Rearrange social icons order for small devices in the footer, according to design.
* Replace video cover image for a real `<video>` element.
* Be more concerned about accessibility.
* Alternative solution to `display: grid`, not supported for IE 10 and IE11 (my actual hack is crappy).

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
