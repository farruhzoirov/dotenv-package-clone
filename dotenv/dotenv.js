const fs = require('fs');

function splitVars(content) {
  const vars = content.split('/n');
  const result = [];
  for (const v of vars) {
    const [key, value] = v.split('='); // ['SECRET_KEY', 'Node.js'];

    if (key && value) {
      result.push([key.trim(), value.trim()]);
    }
  }
  return result;
}

function config() {
  const fileName = `${process.cwd()}/.env`
  const fileContent = fs.readFileSync(fileName).toString();
  const vars = splitVars(fileContent);
  vars.forEach((v) => process.env[v[0]] = v[1]);  // obj['name'] = 'Farruh'
}


module.exports = {
  config
}