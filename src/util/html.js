const css = require('./css');

module.exports = (name, body, state) => `
<!DOCTYPE html>
<html>
    <head>
        <title>koa ejs</title>
        <style type="text/css">${css.join("\n\n")}</style>
    </head>
    <body>
        <div id="react-main">
${body}
        </div>

        <script>
            window.__PRELOADED__STATE__ = ${JSON.stringify(state)};
        </script>
        <script src="/${name}.js"></script>
    </body>
</html>
`;
