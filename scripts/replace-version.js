const fg = require('fast-glob');
const packageJson = require('../package.json');

const workspaces = fg.sync(packageJson.workspaces, '/**/*.fin.json').filter((d) => d.includes('fin.json'));

console.log(workspaces);
