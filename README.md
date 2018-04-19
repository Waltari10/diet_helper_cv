How to release:
- browserify -t [ babelify --presets [ react ] ] src/index.js -g browserify-css -o build/app.js

TODO:
 - Make it easier to make changes to foods
 - Add contact form
 - Add google analytics
 - Add google search console
 - remove extra code from release
 - Figure out where to put images so that bundling is still easy
 - Add link to SCD diet website
 - Go through translations and make sure they make sense
 - search for foods by category (for example, legumes, fruits, meat etc...)
 - Change food list by diet 
 - Display food details as text
 - Add eslint and rules