## React Parcel Skeleton

React-Parcel-Skeleton is a React boilerplate that uses parcel.  
Ideal for those who want to quickly learn React without setting up a Webpack

### Requirement
![nodejs](https://img.shields.io/badge/nodejs-%3E%3D%208.x-red.svg)

### Directory structure
```
.babelrc          # babel config (js compiler)
.postcssrc        # postcss config (css compiler)
index.html        # entry html
index.js          # entry js
src               # application source code
|-- App.js
|-- styles.scss
```
Parcel does not need a config file.  
Only need the config file of the external module like `babelrc` `postcssrc`

### Script
|Command|Description|
|--|--|
|npm start|Start parcel development server; served at `localhost:1234`|
|npm build|Bundles the source in `build` directory|


