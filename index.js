const axios = require('axios');
const fs = require('file-system');
const { JSDOM } = require('jsdom');
const svgSprite = require('svg-sprite-generator')();
const SVGO = require('svgo');
const path = require('path');

// SVG Optimizer instance
const svgo = new SVGO({
  plugins: [
    { removeViewBox: false },
    { cleanupIDs: false },
  ],
});

// Function to fetch SVG from URL
export async function fetchSVG(url) {
  const response = await axios.get(url);
  return response.data;
}

// Function to read SVG from file
export function readSVG(filePath) {
  return fs.readFileSync(filePath, 'utf8');
}

// Function to optimize SVG content
export async function optimizeSVG(svgContent) {
  const result = await svgo.optimize(svgContent);
  return result.data;
}

// Manipulate SVG (resize, change color)
export function manipulateSVG(svgContent, { width, height, color }) {
  const dom = new JSDOM(svgContent);
  const svg = dom.window.document.querySelector('svg');

  if (width) svg.setAttribute('width', width);
  if (height) svg.setAttribute('height', height);
  if (color) svg.querySelectorAll('path').forEach(path => path.setAttribute('fill', color));

  return svg.outerHTML;
}

// Combine SVGs into a sprite
export function combineSVGs(svgContents) {
  svgContents.forEach(svgContent => {
    svgSprite.add(svgContent);
  });
  return svgSprite.compile();
}
