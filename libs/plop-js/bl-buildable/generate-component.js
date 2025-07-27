const nodePlop = require('node-plop').default;
const path = require('path');

const [,, name, componentPath] = process.argv;

if (!name || !componentPath) {
  console.error('Usage: node generate-component.js <name> <path>');
  process.exit(1);
}

async function run() {
  const plop = await nodePlop(path.resolve(__dirname, 'plopfile.js'));
  const generator = plop.getGenerator('component');

  const result = await generator.runActions({
    name,
    path: componentPath
  });

  result.changes.forEach(c => console.log(`[ADDED] ${c.path}`));
  result.failures.forEach(f => console.error(`[ERROR] ${f.error || f.message}`));
}

run();