const path = require('path');
const fs = require('fs');

// version with prompt into terminal
// module.exports = function (plop) {
//   plop.setGenerator('component', {
//     description: 'Generate an Angular component',
//     prompts: [
//       {
//         type: 'input',
//         name: 'name',
//         message: 'Component name (kebab-case)',
//       },
//       {
//         type: 'input',
//         name: 'path',
//         message: 'Where should it go? (e.g. src/app/components)',
//         default: 'src/app/components',
//       },
//     ],
//     actions: [
//       {
//         type: 'add',
//         path: '{{path}}/{{kebabCase name}}/{{kebabCase name}}.component.ts',
//         templateFile: 'templates/component/component.ts.hbs',
//       },
//       {
//         type: 'add',
//         path: '{{path}}/{{kebabCase name}}/{{kebabCase name}}.component.html',
//         templateFile: 'templates/component/component.html.hbs',
//       },
//       {
//         type: 'add',
//         path: '{{path}}/{{kebabCase name}}/{{kebabCase name}}.component.scss',
//         templateFile: 'templates/component/component.scss.hbs',
//       },
//       {
//         type: 'add',
//         path: '{{path}}/{{kebabCase name}}/{{kebabCase name}}.component.spec.ts',
//         templateFile: 'templates/component/component.spec.ts.hbs',
//       },
//     ],
//   });
// };

// version with script
module.exports = function (plop) {
  plop.setHelper('json', obj => JSON.stringify(obj, null, 2));
  plop.setGenerator('component', {
    description: 'Genera un componente Angular',
    prompts: [], // no interazione
    actions: function (data) {
      // name and path must be injected by script REQUIRED
      if (!data.name || !data.path) {
        throw new Error('Missing name or path');
      }

      const properName = data.name.charAt(0).toUpperCase() + data.name.slice(1).replace(/-./g, (x) => x[1].toUpperCase());

      data.className = `${properName}Component`;
      data.selector = `app-${data.name}`;

      return [
        {
          type: 'add',
          path: '{{path}}/{{kebabCase name}}/{{kebabCase name}}.component.ts',
          templateFile: 'templates/component/component.ts.hbs',
        },
        {
          type: 'add',
          path: '{{path}}/{{kebabCase name}}/{{kebabCase name}}.component.html',
          templateFile: 'templates/component/component.html.hbs',
        },
        {
          type: 'add',
          path: '{{path}}/{{kebabCase name}}/{{kebabCase name}}.component.scss',
          templateFile: 'templates/component/component.scss.hbs',
        }
      ];
    },
  });
  plop.setGenerator('jsonParse', {
    description: 'generate parsing JSON to assignment page',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Nome componente:',
      },
      {
        type: 'input',
        name: 'jsonPath',
        message: 'Percorso JSON:',
      }
    ],
    actions: function(data) {
      const fullPath = path.resolve(data.jsonPath);

      if (!fs.existsSync(fullPath)) {
        throw new Error(`JSON file not found at: ${fullPath}`);
      }

      const rawJson = fs.readFileSync(fullPath, 'utf8');
      const configJson = JSON.parse(rawJson);

      // layout footer 
      const footer = configJson.structure.children.find(c => c.placeholderID === 'footer');
      const formItems = footer && footer.children ? footer.children.map(i => ({
        type: i.type,
        name: i.name,
        label: i.label,
        config: i.config || {}
      })) : [];

      // grid component
      const grid = configJson.structure.children.find(c => c.placeholderID === 'grid');
      const gridChildren = grid && grid.children ? grid.children : [];

      // add return data used on templates with {{{ }}} 
      data.formItems = formItems;
      data.gridChildren = gridChildren;

      return [
        {
          type: 'add',
          path: `src/app/${data.name}/${data.name}.component.ts`,
          templateFile: 'templates/json-parse/component.ts.hbs'
        },
        {
          type: 'add',
          path: `src/app/${data.name}/${data.name}.component.html`,
          templateFile: 'templates/json-parse/component.html.hbs'
        },
        {
          type: 'add',
          path: `src/app/${data.name}/${data.name}.component.scss`,
          templateFile: 'templates/json-parse/component.scss.hbs'
        }
      ];
    }
  });
};