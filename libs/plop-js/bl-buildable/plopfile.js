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
};