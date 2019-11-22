# Example repo of using the same handlebars template serverside and client side

Scoped modules to only do this, if you want more examples please create an issue.

Built and tested with `node v8.16.2`

# Getting started
1. Install node
```
node -v // v8.16.2
```

2. Open a terminal in the root directory

3. Install modules
```
npm i
```

4. Npm start: runs webpack && starts server
```
npm start
```

# Notes

- webpack builds clientside: config is in [webpack.config.js](./webpack.config.js)
- express handles requests and has express-handlebars configured [app.js](./app.js)
- express handlebars uses the [views-directory](./src/views) to manage views
- main.js is the client side entry point and requires handlebars templates using commonjs