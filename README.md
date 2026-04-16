# Reto Técnico de Automatización QA – Sauce Demo

## 📌 Descripción

Este proyecto contiene una suite de pruebas automatizadas para la aplicación web **Sauce Demo**  
(https://www.saucedemo.com/), desarrollada como parte de un reto técnico de automatización QA.

La solución utiliza **Playwright** junto con **Cucumber (BDD)**, aplicando el **Patrón de Diseño Page Object Model (POM)** para asegurar un código mantenible, legible y escalable.

---

## 🧪 Alcance de las Pruebas

La suite cubre el flujo principal de compra de un usuario:

- ✅ Login exitoso con usuario estándar
- ❌ Login fallido con usuario bloqueado
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
| @cucumber/cucumber | ^12.8.1 |
| @playwright/test | ^1.59.1 |
| JavaScript | ES2020+ |

---

## 📁 Estructura del Proyecto

```
sauce-demo-playwright/
├── cucumber.js                  # Configuración de Cucumber
├── playwright.config.js         # Configuración de Playwright
├── package.json
├── features/
│   ├── login.feature            # Escenarios de inicio de sesión
│   ├── cart.feature             # Escenarios del carrito de compras
│   ├── checkout.feature         # Escenarios del proceso de compra
│   ├── step_definitions/
│   │   ├── login.steps.js
│   │   ├── cart.steps.js
│   │   └── checkout.steps.js
│   └── support/
│       └── hooks.js             # Configuración del ciclo de vida (Before/After)
├── pages/
│   ├── LoginPage.js
│   ├── ProductsPage.js
│   ├── CartPage.js
│   └── CheckoutPage.js
└── reports/
    └── cucumber-report.html     # Reporte HTML generado tras cada ejecución
```

### 📂 Descripción de carpetas

| Carpeta | Descripción |
|---|---|
| `features/` | Escenarios escritos en Gherkin |
| `features/step_definitions/` | Implementación de los steps |
| `features/support/` | Hooks y configuración del ciclo de vida |
| `pages/` | Page Objects (POM) |
| `reports/` | Reporte HTML de ejecución |

---

## 🗂️ Escenarios de Prueba

### Login (`login.feature`)
| Tag | Escenario |
|---|---|
| `@happy_path` | Login exitoso con `standard_user` |
| `@error` | Login fallido con usuario bloqueado (`locked_out_user`) |

### Carrito (`cart.feature`)
| Tag | Escenario |
|---|---|
| `@cart` | Agregar un producto al carrito y verificar que aparece |

### Checkout (`checkout.feature`)
| Tag | Escenario |
|---|---|
| `@checkout` | Completar el proceso de compra y verificar confirmación |

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

### Ejecutar toda la suite con Cucumber

```bash
npm test
```

### Ejecutar por tag específico

```bash
npx cucumber-js --tags @login
npx cucumber-js --tags @cart
npx cucumber-js --tags @checkout
npx cucumber-js --tags @happy_path
npx cucumber-js --tags @error
```

### Ejecutar Playwright puro (opcional)

```bash
npm run test:playwright
```

### Ejecutar en modo headless

Por defecto los tests corren con el navegador visible. Para ejecutarlos sin interfaz gráfica, modifica `features/support/hooks.js`:

```js
this.browser = await chromium.launch({ headless: true });
```

---

## 📊 Reportes

Tras cada ejecución se genera automáticamente un reporte HTML en:

```
reports/cucumber-report.html
```

Ábrelo en cualquier navegador para ver el detalle de cada escenario, pasos ejecutados y resultados.

---

## 🔐 Credenciales de Prueba

| Tipo de Usuario | Usuario | Contraseña | Comportamiento esperado |
|---|---|---|---|
| Usuario estándar | `standard_user` | `secret_sauce` | Login exitoso |
| Usuario bloqueado | `locked_out_user` | `secret_sauce` | Error de usuario bloqueado |

---

## 🧠 Estrategia de Automatización

- Uso de BDD para alinear pruebas con reglas de negocio.
- Page Object Model para encapsular lógica y selectores.
- Steps orientados a comportamiento, no a implementación.
- Manejo explícito de flujos positivos y negativos.
- Esperas basadas en estado de la aplicación (no en `sleep`).
- Timeout por step configurado en 30 segundos en `cucumber.js` para evitar falsos fallos.

Ver archivo **STRATEGY.md** para más detalles.

---

## ✅ Buenas Prácticas Aplicadas

- Código modular y reutilizable mediante Page Object Model
- Separación clara de responsabilidades (features / steps / pages)
- Sincronización estable basada en estado del DOM
- Hooks centralizados para gestión del ciclo de vida del navegador
- Commits pequeños y descriptivos

---

## 👤 Autor

**Emilio Leonardo Ilich Saavedra Jiménez**  
QA Automation Engineer
