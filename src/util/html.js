module.exports = body => `
<!DOCTYPE html>
<html>
    <head>
        <title>koa ejs</title>
    </head>
    <body>
        <div id="react-main">
${body}
        </div>

        <script src="bundle.js"></script>
    </body>
</html>
`;
