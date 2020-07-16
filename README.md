# Grocery List

> Just your standard grocery list

## Getting Started

The required files are in the ```dist``` folder and the source files to generate them are in ```src```

To build the final files in the case the files are not present or a change is made to the source files, run the command
```
npm run build
```
This generates the required files in the ```dist``` folder.


To watch for changes while editing the source files, run the command
```
npm run watch
```
This will open up a browsersync session and watches the ```src``` folder for changes. If you interact with the page, scroll, or make updates to the source code, all browsers connected to the live server session will be updated.

## Notes

Although the task could be "easily" accomplished with just an index.html and styles.css file, I wanted to make the development process smoother, but most importantly, I wanted to make the code somewhat reusable/maintainable. The ```groceries.json``` file can be updated with new values and the changes would be reflected without having to touch any other componenents, and the template for the groceries can be edited without having to touch any other components. Also, with this process, I could demonstrate some minimal Javascript capability through gulp since this project did not lend itself to sophisticated usage of Javascript. Although, I could have used Javascript to load the templates on page load, even without the need for handlebars templates, I figured for the most accessibility, I would leave the final document static in the case of a user not running Javascript.

Despite being a relatively simple project, I personally had a little bit of fun doing it. Thank you for this opportunity, and I am very excited to hopefully join the team.

## License

Copyright (c) David Oweh 2020