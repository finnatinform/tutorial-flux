# Step 01 : Projekt
Wir bauen ein Projekt mit React, Flux und Webpack. Ein gutes Tutorial für die Grundlage findet ihr [hier](https://www.typescriptlang.org/docs/handbook/react-&-webpack.html).
## Projekt aufsetzen
```
npm init
npm install -g webpack
npm install --save react react-dom @types/react @types/react-dom
npm install --save-dev typescript awesome-typescript-loader source-map-loader
```
## Dateien anlegen
Jetzt erstellen wir ein src und ein dist Verzeichnis.
Danach legen wir auf Root Ebene folgende Dateien an:
```
// tsconfig.json
{
    "compilerOptions": {
        "outDir": "./dist/",
        "sourceMap": true,
        "noImplicitAny": true,
        "module": "commonjs",
        "target": "es5",
        "jsx": "react"
    },
    "include": [
        "./src/**/*"
    ]
}
```
```
<!-- index.html -->
<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8" />
        <title>Hello React!</title>
    </head>
    <body>
        <div id="example"></div>

        <!-- Dependencies -->
        <script src="./node_modules/react/umd/react.development.js"></script>
        <script src="./node_modules/react-dom/umd/react-dom.development.js"></script>

        <!-- Main -->
        <script src="./dist/bundle.js"></script>
    </body>
</html>
```
```
// webpack.config.js
module.exports = {
    entry: "./src/index.tsx",
    output: {
        filename: "bundle.js",
        path: __dirname + "/dist"
    },

    // Enable sourcemaps for debugging webpack's output.
    devtool: "source-map",

    resolve: {
        // Add '.ts' and '.tsx' as resolvable extensions.
        extensions: [".ts", ".tsx", ".js", ".json"]
    },

    module: {
        rules: [
            // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
            { test: /\.tsx?$/, loader: "awesome-typescript-loader" },

            // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
            { enforce: "pre", test: /\.js$/, loader: "source-map-loader" }
        ]
    },

    // When importing a module whose path matches one of the following, just
    // assume a corresponding global variable exists and use that instead.
    // This is important because it allows us to avoid bundling all of our
    // dependencies, which allows browsers to cache those libraries between builds.
    externals: {
        "react": "React",
        "react-dom": "ReactDOM"
    },
};
```
Last, but not least: Wir erstellen eine index.tsx im src Verzeichnis
```
import * as React from "react";
import * as ReactDOM from "react-dom";

ReactDOM.render(
    <div>Hallo Inform!</div>,
    document.body
);
```
## Projekt bauen
Jetzt können wir das Projekt mit folgendem Befehl bauen:
```
webpack
```