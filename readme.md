# SVG Icon Toolkit

SVG Icon Toolkit allows for easy manipulation and combination of SVG icons in your projects. With it, you can load, edit, combine SVG files, and even export them as PDFs or save them directly to the file system.

## Installation

To install SVG Icon Toolkit, run the following command in your project directory:

```bash
npm install svg-icon-toolkit
```

## Usage

### Loading an SVG

To load an SVG icon:

```javascript
const { loadSVG } = require('svg-icon-toolkit');

const myIcon = loadSVG('path/to/your/icon.svg');
```

### Combining SVGs

To combine multiple SVG icons into one:

```javascript
const { combineSVGs } = require('svg-icon-toolkit');

const combinedIcon = combineSVGs(['path/to/icon1.svg', 'path/to/icon2.svg']);
```

### Editing SVGs

To apply simple edits to an SVG icon (e.g., change color):

```javascript
const { editSVG } = require('svg-icon-toolkit');

const editedIcon = editSVG('path/to/your/icon.svg', { color: '#FF0000' });
```

### Exporting SVGs

To export an SVG as a PDF:

```javascript
const { exportAsPDF } = require('svg-icon-toolkit');

exportAsPDF('path/to/your/icon.svg', 'path/to/output.pdf');
```

## Contributing

We welcome contributions to SVG Icon Toolkit! Please open an issue or submit a pull request for any improvements you wish to make.

## License

SVG Icon Toolkit is released under the MIT License. See the LICENSE file for more details.
