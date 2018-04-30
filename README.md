How to release:
- npm run browserify
- Move build/app.js to gh-pages branch.

Bugs: 
- Right now using commas in description or food names does not work, as app relies on parsing CSV as data source.

TODO:
- Utilize JSON instead of CSV.
- Separate excel into FIN and ENG foods
- Allow linking by users to specific search terms
- Figure out which language to show initially to user
- Remember which language user picked
- Figure out a way to manage food translations in an easier way
- Make it easier to make changes to foods
- Add google analytics
- Add google search console
- Figure out where to put images so that bundling is still easy
- Go through translations and make sure they make sense
- search for foods by category (for example, legumes, fruits, meat etc...)
- Change food list by diet
