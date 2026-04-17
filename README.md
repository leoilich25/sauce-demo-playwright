# Reto Técnico de Automatización QA – Sauce Demo

## 📌 Descripción

Este proyecto contiene una suite de pruebas automatizadas para la aplicación web **Sauce Demo**  
(https://www.saucedemo.com/), desarrollada como parte de un reto técnico de automatización QA.

La solución integra **Playwright** con **Cucumber (BDD)** mediante **playwright-bdd**, aplicando el **Patrón de Diseño Page Object Model (POM)** para asegurar un código mantenible, legible y escalable. Cada paso de cada escenario genera una captura de pantalla embebida en el reporte HTML de Playwright.

---

## 🧪 Alcance de las Pruebas

La suite cubre el flujo principal de compra de un usuario:

- ✅ Login exitoso con usuario estándar
- ❌ Login fallido con usuario bloqueado
- ✅ Login con múltiples combinaciones de credenciales (Scenario Outline)
- ✅ Agregar producto al carrito
- ✅ Visualizar productos en el carrito
- ✅ Completar el proceso de checkout
- ✅ Confirmación final de compra

---

## 🛠️ Tecnologías Utilizadas

| Herramienta | Versión |
|---|---|
| Node.js | >= 18 |
| Playwright | ^1.59.1 |
| @playwright/test | ^1.59.1 |
| playwright-bdd | ^8.5.0 |
| @cucumber/cucumber | ^12.8.1 |
| JavaScript | CommonJS (Node.js) |

---

## 📁 Estructura del Proyecto

```
sauce-demo-playwright/
├── cucumber.js                          # Configuración legacy de Cucumber CLI
├── playwright.config.js                 # Configuración de Playwright + playwright-bdd
├── package.json
├── src/
│   ├── locators/                        # Selectores CSS desacoplados
│   │   ├── LoginLocators.js
│   │   ├── ProductsLocators.js
│   │   ├── CartLocators.js
│   │   └── CheckoutLocators.js
│   └── pages/                           # Acciones sobre la UI (POM)
│       ├── LoginPage.js
│       ├── ProductsPage.js
│       ├── CartPage.js
│       └── CheckoutPage.js
├── test/
│   ├── resources/
│   │   └── features/                    # Escenarios de prueba (Gherkin)
│   │       ├── login.feature
│   │       ├── cart.feature
│   │       └── checkout.feature
│   └── e2e/
│       ├── step_definitions/            # Conexión entre Gherkin y Playwright
│       │   ├── login.steps.js
│       │   ├── cart.steps.js
│       │   └── checkout.steps.js
│       └── support/
│           ├── fixtures.js              # Fixtures de Playwright (inyección de páginas)
│           └── hooks.js                 # AfterStep: captura de pantalla por paso
├── .features-gen/                       # Tests generados por bddgen (no editar)
└── playwright-report/                   # Reporte HTML con capturas de pantalla
```

### 📂 Descripción de carpetas

| Carpeta | Descripción |
|---|---|
| `src/locators/` | Selectores CSS de cada página, separados de la lógica |
| `src/pages/` | Acciones sobre la UI usando los locators (POM) |
| `test/resources/features/` | Escenarios escritos en Gherkin |
| `test/e2e/step_definitions/` | Conexión entre los pasos Gherkin y Playwright |
| `test/e2e/support/` | Fixtures y hooks de ciclo de vida |
| `.features-gen/` | Archivos de test generados por `bddgen` (no editar) |
| `playwright-report/` | Reporte HTML interactivo con capturas de pantalla |

---

## 🗂️ Escenarios de Prueba

### Login (`login.feature`)

| Tag | Tipo | Escenario |
|---|---|---|
| `@login_happy_path` | Scenario | Login exitoso con `standard_user` |
| `@login_error` | Scenario | Login fallido con `locked_out_user` (usuario bloqueado) |
| `@login_multiple` | Scenario Outline | Login con múltiples combinaciones de credenciales (5 casos) |

**Scenario Outline – Examples:**

| usuario | contraseña | resultado esperado |
|---|---|---|
| `standard_user` | `secret_sauce` | ✅ exitoso |
| `locked_out_user` | `secret_sauce` | ❌ error |
| `problem_user` | `secret_sauce` | ✅ exitoso |
| `performance_glitch_user` | `secret_sauce` | ✅ exitoso |
| `standard_user` | `contrasena_incorrecta` | ❌ error |

### Carrito (`cart.feature`)

| Tag | Escenario |
|---|---|
| `@cart` | Agregar un producto al carrito y verificar que aparece |

### Checkout (`checkout.feature`)

| Tag | Escenario |
|---|---|
| `@checkout` | Completar el proceso de compra y verificar confirmación |

---

## 🔐 Credenciales de Prueba

| Usuario | Contraseña | Comportamiento |
|---|---|---|
| `standard_user` | `secret_sauce` | Login exitoso |
| `locked_out_user` | `secret_sauce` | Error – usuario bloqueado |
| `problem_user` | `secret_sauce` | Login exitoso (interfaz con bugs visuales) |
| `performance_glitch_user` | `secret_sauce` | Login exitoso (con demora simulada) |

---

## ▶️ Instalación y Configuración

### 1️⃣ Clonar el repositorio

```bash
git clone https://github.com/leoilich25/sauce-demo-playwright.git
cd sauce-demo-playwright
```

### 2️⃣ Instalar dependencias

```bash
npm install
```

### 3️⃣ Instalar navegadores de Playwright

```bash
npx playwright install
```

---

## ▶️ Ejecución de Pruebas

| Comando | Descripción |
|---|---|
| `npm run test:bdd` | Genera los tests y ejecuta toda la suite con Playwright |
| `npm run test:bdd:tag "@login_happy_path"` | Ejecuta solo los escenarios con el tag indicado |
| `npm run bdd:gen` | Solo genera los archivos de test (sin ejecutar) |
| `npx playwright show-report` | Abre el reporte HTML interactivo |

### Ejemplos de ejecución por tag

```bash
npm run test:bdd:tag "@login_multiple"
npm run test:bdd:tag "@cart"
npm run test:bdd:tag "@checkout"
```

---

## 📊 Capturas de Pantalla y Reporte

El proyecto genera capturas de pantalla automáticas de dos formas:

1. **Por paso (AfterStep):** Al finalizar cada paso Gherkin se toma una captura y se adjunta al reporte como attachment.
2. **Por test (Playwright):** `screenshot: 'on'` en `playwright.config.js` captura el estado final de cada test.

Para abrir el reporte interactivo con todas las capturas:

```bash
npx playwright show-report
```

---

## 🧠 Estrategia de Automatización

- **BDD con Gherkin:** escenarios legibles para perfiles técnicos y no técnicos.
- **playwright-bdd:** integración nativa entre Cucumber y el runner de Playwright, aprovechando fixtures, reporters y trazas.
- **Page Object Model:** lógica de UI encapsulada en `pages/`, desacoplada de los steps.
- **Scenario Outline + Examples:** robustez mediante parametrización de casos de prueba con distintos usuarios y contraseñas.
- **Capturas por paso:** trazabilidad visual completa de cada escenario en el reporte.
- **Esperas basadas en estado del DOM:** sin `sleep`, usando `waitForSelector` para mayor estabilidad.

---

## ✅ Buenas Prácticas Aplicadas

- Código modular y reutilizable mediante Page Object Model
- Separación clara de responsabilidades (features / steps / pages / support)
- Sincronización estable basada en estado del DOM
- Fixtures de Playwright para inyección de dependencias en steps
- Capturas de pantalla automáticas por paso para trazabilidad

---

## 👤 Autor

**Emilio Leonardo Ilich Saavedra Jiménez**  
QA Automation Engineer

