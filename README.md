This project was bootstrapped with [Create Contentful App](https://github.com/contentful/create-contentful-app).

Renders a custom Questionnaire UI to curate a range of questions.

The core of our functionality exists in the `/src/components/Field.tsx` & `/src/components/QuestionEditor.js` files.

Hosted on Github Page at https://dosomething.github.io/contentful-questionnaire-app via the [gh-pages](https://www.npmjs.com/package/gh-pages) library.

Installed on our **Phoenix** Contentful Space in the **Questionnaire Action** Content Type in the **Questions** field as a [Contentful App extension](https://www.contentful.com/developers/docs/extensibility/app-framework/).

## Available Scripts

In the project directory, you can run:

#### `npm start`

Creates or updates your app definition in contentful, and runs the app in development mode.
Open your app to view it in the browser.

The page will reload if you make edits.
You will also see any lint errors in the console.

#### `npm run build`

Builds the app for production to the `build` folder.
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.
Your app is ready to be deployed!

#### `npm run deploy`

Builds the app for production and deploys to the github-pages site (via the `gh-pages` branch).

## Libraries to use

To make your app look and feel like Contentful use the following libraries:

- [Forma 36](https://f36.contentful.com/) – Contentful's design system
- [Contentful Field Editors](https://www.contentful.com/developers/docs/extensibility/field-editors/) – Contentful's field editor React components

## Learn More

[Read more](https://www.contentful.com/developers/docs/extensibility/app-framework/create-contentful-app/) and check out the video on how to use the CLI.

Create Contentful App uses [Create React App](https://create-react-app.dev/). You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started) and how to further customize your app.
