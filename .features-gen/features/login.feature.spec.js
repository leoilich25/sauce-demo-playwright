// Generated from: features\login.feature
import { test } from "../../features/support/fixtures.js";

test.describe('Login en Sauce Demo', () => {

  test.beforeEach('Background', async ({ Given, loginPage }, testInfo) => { if (testInfo.error) return;
    await Given('que el usuario navega a la página de login de Sauce Demo', null, { loginPage }); 
  });
  
  test('Login exitoso con usuario estándar', { tag: ['@login_happy_path'] }, async ({ When, Then, loginPage }) => { 
    await When('el usuario inicia sesión con credenciales válidas de "standard_user"', null, { loginPage }); 
    await Then('el usuario debería ver la página de productos', null, { loginPage }); 
  });

  test('Login fallido con usuario bloqueado', { tag: ['@login_error'] }, async ({ When, Then, loginPage }) => { 
    await When('el usuario inicia sesión con credenciales válidas de "locked_out_user"', null, { loginPage }); 
    await Then('el sistema debería mostrar un mensaje de error', null, { loginPage }); 
  });

  test.describe('Login con múltiples combinaciones de credenciales', () => {

    test('Example #1', { tag: ['@login_multiple'] }, async ({ When, Then, loginPage }) => { 
      await When('el usuario intenta iniciar sesión con "standard_user" y "secret_sauce"', null, { loginPage }); 
      await Then('el resultado del login debería ser "exitoso"', null, { loginPage }); 
    });

    test('Example #2', { tag: ['@login_multiple'] }, async ({ When, Then, loginPage }) => { 
      await When('el usuario intenta iniciar sesión con "locked_out_user" y "secret_sauce"', null, { loginPage }); 
      await Then('el resultado del login debería ser "error"', null, { loginPage }); 
    });

    test('Example #3', { tag: ['@login_multiple'] }, async ({ When, Then, loginPage }) => { 
      await When('el usuario intenta iniciar sesión con "problem_user" y "secret_sauce"', null, { loginPage }); 
      await Then('el resultado del login debería ser "exitoso"', null, { loginPage }); 
    });

    test('Example #4', { tag: ['@login_multiple'] }, async ({ When, Then, loginPage }) => { 
      await When('el usuario intenta iniciar sesión con "performance_glitch_user" y "secret_sauce"', null, { loginPage }); 
      await Then('el resultado del login debería ser "exitoso"', null, { loginPage }); 
    });

    test('Example #5', { tag: ['@login_multiple'] }, async ({ When, Then, loginPage }) => { 
      await When('el usuario intenta iniciar sesión con "standard_user" y "contrasena_incorrecta"', null, { loginPage }); 
      await Then('el resultado del login debería ser "error"', null, { loginPage }); 
    });

  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('features\\login.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":10,"pickleLine":12,"tags":["@login_happy_path"],"steps":[{"pwStepLine":7,"gherkinStepLine":9,"keywordType":"Context","textWithKeyword":"Given que el usuario navega a la página de login de Sauce Demo","isBg":true,"stepMatchArguments":[]},{"pwStepLine":11,"gherkinStepLine":13,"keywordType":"Action","textWithKeyword":"When el usuario inicia sesión con credenciales válidas de \"standard_user\"","stepMatchArguments":[{"group":{"start":53,"value":"\"standard_user\"","children":[{"start":54,"value":"standard_user","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":12,"gherkinStepLine":14,"keywordType":"Outcome","textWithKeyword":"Then el usuario debería ver la página de productos","stepMatchArguments":[]}]},
  {"pwTestLine":15,"pickleLine":17,"tags":["@login_error"],"steps":[{"pwStepLine":7,"gherkinStepLine":9,"keywordType":"Context","textWithKeyword":"Given que el usuario navega a la página de login de Sauce Demo","isBg":true,"stepMatchArguments":[]},{"pwStepLine":16,"gherkinStepLine":18,"keywordType":"Action","textWithKeyword":"When el usuario inicia sesión con credenciales válidas de \"locked_out_user\"","stepMatchArguments":[{"group":{"start":53,"value":"\"locked_out_user\"","children":[{"start":54,"value":"locked_out_user","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":17,"gherkinStepLine":19,"keywordType":"Outcome","textWithKeyword":"Then el sistema debería mostrar un mensaje de error","stepMatchArguments":[]}]},
  {"pwTestLine":22,"pickleLine":28,"tags":["@login_multiple"],"steps":[{"pwStepLine":7,"gherkinStepLine":9,"keywordType":"Context","textWithKeyword":"Given que el usuario navega a la página de login de Sauce Demo","isBg":true,"stepMatchArguments":[]},{"pwStepLine":23,"gherkinStepLine":23,"keywordType":"Action","textWithKeyword":"When el usuario intenta iniciar sesión con \"standard_user\" y \"secret_sauce\"","stepMatchArguments":[{"group":{"start":38,"value":"\"standard_user\"","children":[{"start":39,"value":"standard_user","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"},{"group":{"start":56,"value":"\"secret_sauce\"","children":[{"start":57,"value":"secret_sauce","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":24,"gherkinStepLine":24,"keywordType":"Outcome","textWithKeyword":"Then el resultado del login debería ser \"exitoso\"","stepMatchArguments":[{"group":{"start":35,"value":"\"exitoso\"","children":[{"start":36,"value":"exitoso","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":27,"pickleLine":29,"tags":["@login_multiple"],"steps":[{"pwStepLine":7,"gherkinStepLine":9,"keywordType":"Context","textWithKeyword":"Given que el usuario navega a la página de login de Sauce Demo","isBg":true,"stepMatchArguments":[]},{"pwStepLine":28,"gherkinStepLine":23,"keywordType":"Action","textWithKeyword":"When el usuario intenta iniciar sesión con \"locked_out_user\" y \"secret_sauce\"","stepMatchArguments":[{"group":{"start":38,"value":"\"locked_out_user\"","children":[{"start":39,"value":"locked_out_user","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"},{"group":{"start":58,"value":"\"secret_sauce\"","children":[{"start":59,"value":"secret_sauce","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":29,"gherkinStepLine":24,"keywordType":"Outcome","textWithKeyword":"Then el resultado del login debería ser \"error\"","stepMatchArguments":[{"group":{"start":35,"value":"\"error\"","children":[{"start":36,"value":"error","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":32,"pickleLine":30,"tags":["@login_multiple"],"steps":[{"pwStepLine":7,"gherkinStepLine":9,"keywordType":"Context","textWithKeyword":"Given que el usuario navega a la página de login de Sauce Demo","isBg":true,"stepMatchArguments":[]},{"pwStepLine":33,"gherkinStepLine":23,"keywordType":"Action","textWithKeyword":"When el usuario intenta iniciar sesión con \"problem_user\" y \"secret_sauce\"","stepMatchArguments":[{"group":{"start":38,"value":"\"problem_user\"","children":[{"start":39,"value":"problem_user","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"},{"group":{"start":55,"value":"\"secret_sauce\"","children":[{"start":56,"value":"secret_sauce","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":34,"gherkinStepLine":24,"keywordType":"Outcome","textWithKeyword":"Then el resultado del login debería ser \"exitoso\"","stepMatchArguments":[{"group":{"start":35,"value":"\"exitoso\"","children":[{"start":36,"value":"exitoso","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":37,"pickleLine":31,"tags":["@login_multiple"],"steps":[{"pwStepLine":7,"gherkinStepLine":9,"keywordType":"Context","textWithKeyword":"Given que el usuario navega a la página de login de Sauce Demo","isBg":true,"stepMatchArguments":[]},{"pwStepLine":38,"gherkinStepLine":23,"keywordType":"Action","textWithKeyword":"When el usuario intenta iniciar sesión con \"performance_glitch_user\" y \"secret_sauce\"","stepMatchArguments":[{"group":{"start":38,"value":"\"performance_glitch_user\"","children":[{"start":39,"value":"performance_glitch_user","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"},{"group":{"start":66,"value":"\"secret_sauce\"","children":[{"start":67,"value":"secret_sauce","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":39,"gherkinStepLine":24,"keywordType":"Outcome","textWithKeyword":"Then el resultado del login debería ser \"exitoso\"","stepMatchArguments":[{"group":{"start":35,"value":"\"exitoso\"","children":[{"start":36,"value":"exitoso","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":42,"pickleLine":32,"tags":["@login_multiple"],"steps":[{"pwStepLine":7,"gherkinStepLine":9,"keywordType":"Context","textWithKeyword":"Given que el usuario navega a la página de login de Sauce Demo","isBg":true,"stepMatchArguments":[]},{"pwStepLine":43,"gherkinStepLine":23,"keywordType":"Action","textWithKeyword":"When el usuario intenta iniciar sesión con \"standard_user\" y \"contrasena_incorrecta\"","stepMatchArguments":[{"group":{"start":38,"value":"\"standard_user\"","children":[{"start":39,"value":"standard_user","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"},{"group":{"start":56,"value":"\"contrasena_incorrecta\"","children":[{"start":57,"value":"contrasena_incorrecta","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":44,"gherkinStepLine":24,"keywordType":"Outcome","textWithKeyword":"Then el resultado del login debería ser \"error\"","stepMatchArguments":[{"group":{"start":35,"value":"\"error\"","children":[{"start":36,"value":"error","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
]; // bdd-data-end