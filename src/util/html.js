const css = require('./css');

module.exports = (name, title, body, state) => `
<!DOCTYPE html>
<html>
    <head>
        <title>${title}</title>
        <link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet">
        <meta name="viewport" content="user-scalable=no, initial-scale=1, maximum-scale=1, minimum-scale=1, width=device-width, height=device-height" />
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
