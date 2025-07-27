const nodePlop = require('node-plop').default;
const path = require('path');

//name → angular component to create
//path → json path 

const [,, name, jsonPath] = process.argv;

if (!name || !jsonPath) {
  console.error('Usage: node generate-component.js <name> <jsonPath>');
  process.exit(1);
}

async function run() {
  const plop = await nodePlop(path.resolve(__dirname, 'plopfile.js'));
  const generator = plop.getGenerator('jsonParse');

  const result = await generator.runActions({ name, jsonPath });

  result.changes.forEach(c => console.log(`[ADDED] ${c.path}`));
  result.failures.forEach(f => console.error(`[ERROR] ${f.error || f.message}`));
}

run();