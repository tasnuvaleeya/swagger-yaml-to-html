const yaml = require('js-yaml');
const fs = require('fs');

function generateHtmlFromYaml(inputFilePath, outputFilePath) {
    const TEMPLATE = `
    <!DOCTYPE html>
    <html lang="en">
        <head>
            <meta charset="UTF-8">
            <title>Swagger UI</title>
            <link href="https://fonts.googleapis.com/css?family=Open+Sans:400,700|Source+Code+Pro:300,600|Titillium+Web:400,600,700" rel="stylesheet">
            <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/3.24.2/swagger-ui.css" >
            <style>
                html {
                    box-sizing: border-box;
                    overflow: -moz-scrollbars-vertical;
                    overflow-y: scroll;
                }
                *,
                *:before,
                *:after {
                    box-sizing: inherit;
                }
                body {
                    margin:0;
                    background: #fafafa;
                }
                .swagger-ui .parameters-col_description input[type=text]{
                    width: 50vw ;
                    max-width: 50vw !important;
                }
            </style>
        </head>
        <body>
            <div id="swagger-ui"></div>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/3.24.2/swagger-ui-bundle.js"></script>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/3.24.2/swagger-ui-standalone-preset.js"></script>
            <script>
                window.onload = function() {
                    var spec = ${JSON.stringify(yaml.load(fs.readFileSync(inputFilePath, 'utf-8'), { schema: yaml.JSON_SCHEMA }))};
                    const ui = SwaggerUIBundle({
                        spec: spec,
                        dom_id: '#swagger-ui',
                        deepLinking: true,
                        presets: [
                            SwaggerUIBundle.presets.apis,
                            SwaggerUIStandalonePreset
                        ],
                        plugins: [
                            SwaggerUIBundle.plugins.DownloadUrl
                        ],
                        layout: "StandaloneLayout"
                    });
                    window.ui = ui;
                }
            </script>
        </body>
    </html>
    `;

    fs.writeFileSync(outputFilePath, TEMPLATE);
}
module.exports = generateHtmlFromYaml;
