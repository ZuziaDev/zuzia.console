# Zuzia.Console Node.js Module

Zuzia.Console is a Node.js module that provides colorful console logging with various log types.

## Installation

To install the latest version of Zuzia.Console, run the following command in your Node.js project:

```bash
npm install zuzia.console@latest
```

## Usage

```javascript
const zuziaConsole = require("zuzia.console");

// Log an informational message
zuziaConsole.infoLog({ name: "Example", text: "This is an information message" });

// Log a success message
zuziaConsole.succesLog({ name: "Example", text: "This is a success message" });

// Log a warning message
zuziaConsole.warnLog({ name: "Example", text: "This is a warning message" });

// Log an error message
zuziaConsole.errorLog({ name: "Example", text: "This is an error message" });

// Log a message with a custom hex color
const randomHex = zuziaConsole.randomHexCode();
zuziaConsole.hexLog({ name: "Example", text: "This is a custom hex color message", hex: randomHex });

// Get the current version of the zuzia.console module
const moduleVersion = zuziaConsole.version();
console.log("Zuzia.Console Module Version:", moduleVersion);

// Automatically update zuzia.console to the latest version
zuziaConsole.autoUpdate();
```

## Functions

### `infoLog({name, text, timeout})`

Logs an informational message to the console with optional timeout.

### `succesLog({name, text, timeout})`

Logs a success message to the console with optional timeout.

### `warnLog({name, text, timeout})`

Logs a warning message to the console with optional timeout.

### `errorLog({name, text, timeout})`

Logs an error message to the console with optional timeout.

### `hexLog({name, text, hex, timeout})`

Logs a message to the console with a custom hex color and optional timeout.

### `version()`

Returns the current version of the Zuzia.Console module.

### `randomHexCode()`

Generates a random hex color code.

### `autoUpdate()`

Automatically updates Zuzia.Console to the latest version.
