module.exports = (name, body) => `
<!DOCTYPE html>
<html>
    <head>
        <title>koa ejs</title>
    </head>
    <body>
        <div id="react-main">
${body}
        </div>

        <script src="/${name}.js"></script>
    </body>
</html>
`;
