# Informe de Estrategia de Automatización

**Proyecto:** Reto Técnico QA – Sauce Demo  
**Autor:** Emilio Leonardo Ilich Saavedra Jiménez  
**Fecha:** Abril 2026  

---

## 1. Elección de Herramientas

### Playwright como framework de automatización
Se eligió **Playwright** por encima de otras alternativas (Selenium, Cypress) por las siguientes razones:

- Soporte nativo para múltiples navegadores (Chromium, Firefox, WebKit) sin configuración adicional
- Esperas automáticas basadas en el estado del DOM, eliminando `sleep()` y reduciendo flakiness
- Reporte HTML interactivo con capturas de pantalla y trazas embebidas
- Velocidad de ejecución superior frente a Selenium en pruebas de UI

### playwright-bdd como puente con Cucumber
Se utilizó **playwright-bdd** en lugar de ejecutar Cucumber de forma independiente, lo que permite:

- Ejecutar los feature files de Gherkin directamente con el runner nativo de Playwright
- Aprovechar el reporte HTML de Playwright (con capturas por test y por paso)
- Mantener la sintaxis BDD de Gherkin sin sacrificar las capacidades de Playwright
- Usar el sistema de fixtures de Playwright para inyección de dependencias en los steps

### BDD con Cucumber y Gherkin
Se adoptó **Behavior-Driven Development (BDD)** para redactar los escenarios de prueba en lenguaje natural (Gherkin), lo que permite:

- Que los escenarios sean legibles tanto por perfiles técnicos como no técnicos
- Alinear directamente los tests con los criterios de aceptación de la historia de usuario
- Facilitar la comunicación entre QA, desarrollo y negocio

---

## 2. Patrón de Diseño Aplicado

### Page Object Model (POM) con capa de Locators

Se implementó una variante mejorada del patrón **Page Object Model**, dividida en dos capas:

**Capa 1 – Locators (`src/locators/`)**  
Contiene exclusivamente los selectores CSS de cada página, sin lógica de interacción:

```js
// src/locators/LoginLocators.js
const LoginLocators = {
  usernameInput: '#user-name',
  passwordInput: '#password',
  loginButton: '#login-button',
  errorMessage: '[data-test="error"]',
  productsContainer: '.inventory_list',
};
```

**Capa 2 – Pages (`src/pages/`)**  
Contiene las acciones de interacción con la UI, importando los locators de la capa anterior:

```js
// src/pages/LoginPage.js
const { LoginLocators } = require('../locators/LoginLocators');

class LoginPage {
  async submitLogin(username, password) {
    await this.page.fill(LoginLocators.usernameInput, username);
    await this.page.fill(LoginLocators.passwordInput, password);
    await this.page.click(LoginLocators.loginButton);
  }
}
```

**Ventajas de esta separación:**
- Si un selector cambia en la aplicación, solo se modifica el archivo de locators sin tocar la lógica
- Los selectores son reutilizables desde múltiples páginas sin duplicación
- Mayor facilidad de mantenimiento en proyectos de larga duración

---

## 3. Organización de Escenarios

Los escenarios están organizados por flujo funcional en tres feature files:

| Feature | Escenarios cubiertos |
|---|---|
| `login.feature` | Login exitoso, login bloqueado, Scenario Outline con múltiples usuarios |
| `cart.feature` | Agregar producto al carrito y verificar visualización |
| `checkout.feature` | Flujo completo de compra hasta confirmación |

### Uso de Scenario Outline para robustez
En el feature de login se implementó un **Scenario Outline con tabla de Examples** para probar múltiples combinaciones de credenciales sin duplicar código:

```gherkin
@login_multiple
Scenario Outline: Login con múltiples combinaciones de credenciales
  When el usuario intenta iniciar sesión con "<usuario>" y "<contrasena>"
  Then el resultado del login debería ser "<resultado>"

  Examples:
    | usuario                 | contrasena            | resultado |
    | standard_user           | secret_sauce          | exitoso   |
    | locked_out_user         | secret_sauce          | error     |
    | problem_user            | secret_sauce          | exitoso   |
    | performance_glitch_user | secret_sauce          | exitoso   |
    | standard_user           | contrasena_incorrecta | error     |
```

Esto permite cubrir **5 casos de prueba** con un único bloque de código, validando tanto flujos exitosos como flujos de error con distintos tipos de usuario.

---

## 4. Estrategia de Evidencia y Trazabilidad

### Capturas de pantalla automáticas
Se implementaron dos mecanismos complementarios:

1. **`screenshot: 'on'` en `playwright.config.js`** — captura el estado final de cada test automáticamente
2. **Hook `AfterStep`** — toma una captura después de **cada paso individual** de Gherkin y la adjunta al reporte como attachment

```js
AfterStep(async ({ page, $testInfo }) => {
  const screenshot = await page.screenshot({ fullPage: true });
  await $testInfo.attach('screenshot', {
    body: screenshot,
    contentType: 'image/png',
  });
});
```

Esto garantiza **trazabilidad visual completa** — ante un fallo, el evaluador puede ver exactamente en qué paso y en qué estado de la UI ocurrió el problema.

---

## 5. Cobertura de Escenarios vs. Criterios de Aceptación

| Criterio de Aceptación | Feature | Tag | Cubierto |
|---|---|---|---|
| Login con credenciales válidas | login.feature | `@login_happy_path` | ✅ |
| Login con credenciales inválidas | login.feature | `@login_error` | ✅ |
| Login con múltiples tipos de usuario | login.feature | `@login_multiple` | ✅ |
| Agregar producto al carrito | cart.feature | `@cart` | ✅ |
| Ver productos en el carrito | cart.feature | `@cart` | ✅ |
| Completar proceso de compra | checkout.feature | `@checkout` | ✅ |
| Confirmación de compra | checkout.feature | `@checkout` | ✅ |

---

## 6. Decisiones Técnicas Destacadas

| Decisión | Motivo |
|---|---|
| Usar `playwright-bdd` en lugar de Cucumber puro | Aprovechar el reporte HTML y trazas nativas de Playwright |
| Separar locators en una capa propia | Facilitar el mantenimiento ante cambios de selectores en la UI |
| Estructurar en `src/` y `test/` | Separación clara entre código de aplicación y código de pruebas |
| Usar fixtures de Playwright para inyección | Evitar `this.*` y mantener los steps limpios y funcionales |
| Esperas con `waitForSelector` | Eliminar tiempos fijos y hacer los tests más estables |
