# Drupal Base Theme for One-Agency

## Dependencies
1. Node.js (<http://nodejs.org/download>)
2. Grunt (<http://gruntjs.com/getting-started>)

## Installation
1. Rename the folder and .info-file according to your theme's name
2. Edit the .info-file (name & description)
3. Edit the template.php file and rename the oa_ functions according to your theme's name
4. Type `npm install` in the console (from within the theme folder)
4. Type `grunt watch` in the console (from within the theme folder)

## On the stylesheets
This theme uses Less (<http://lesscss.org/>) for styling.

## On Grunt automation
Grunt uses the following tasks:
 - Less compiler with css mapping!
 - CSS postprefixer (for cross-browser stuff)
 - Image optimalisation
 - JS Lint
 - Auto-refresh
 - Watcher