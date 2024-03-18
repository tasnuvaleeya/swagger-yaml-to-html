# YAML to HTML Converter

A Node.js package to convert YAML files to HTML using Swagger UI.

## Installation

You can install the package via npm:

```bash
npm install swagger-yaml-to-html
```
## Usage

```
const generateHtmlFromYaml = require('swagger-yaml-to-html');

// Provide input YAML file path and output HTML file path
const inputFilePath = 'path/to/input.yaml';
const outputFilePath = 'path/to/output.html';

// Convert YAML to HTML
generateHtmlFromYaml(inputFilePath, outputFilePath);
```