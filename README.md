# ts-silence-diagnostics

A TypeScript plugin to silence specific diagnostic codes in your project.

## Installation

Install the package from npm:

`npm install --save-dev ts-silence-diagnostics`

## Configuration

In your `tsconfig.json`, add the plugin configuration:

```json
{
  "compilerOptions": {
    "plugins": [
      {
        "name": "ts-silence-diagnostics",
        "ignoredCodes": [1234]
      }
    ]
  }
}
```

Replace `[1234]` with an array of diagnostic codes you want to ignore.