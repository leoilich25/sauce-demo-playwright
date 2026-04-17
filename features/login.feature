
Feature: Login en Sauce Demo

  Como un cliente de Sauce Demo
  Quiero iniciar sesión en la aplicación
  Para poder acceder a los productos

  Background:
    Given que el usuario navega a la página de login de Sauce Demo

  @login_happy_path
  Scenario: Login exitoso con usuario estándar
    When el usuario inicia sesión con credenciales válidas de "standard_user"
    Then el usuario debería ver la página de productos

  @login_error
  Scenario: Login fallido con usuario bloqueado
    When el usuario inicia sesión con credenciales válidas de "locked_out_user"
    Then el sistema debería mostrar un mensaje de error

  @login_multiple
  Scenario Outline: Login con múltiples combinaciones de credenciales
    When el usuario intenta iniciar sesión con "<usuario>" y "<contrasena>"
    Then el resultado del login debería ser "<resultado>"

    Examples:
      | usuario                 | contrasena          | resultado |
      | standard_user           | secret_sauce        | exitoso   |
      | locked_out_user         | secret_sauce        | error     |
      | problem_user            | secret_sauce        | exitoso   |
      | performance_glitch_user | secret_sauce        | exitoso   |
      | standard_user           | contrasena_incorrecta | error   |
