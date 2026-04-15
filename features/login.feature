
Feature: Login en Sauce Demo

  Como un cliente de Sauce Demo
  Quiero iniciar sesión en la aplicación
  Para poder acceder a los productos

  Background:
    Given que el usuario navega a la página de login de Sauce Demo

  @login @happy_path
  Scenario: Login exitoso con usuario estándar
    When el usuario inicia sesión con credenciales válidas de "standard_user"
    Then el usuario debería ver la página de productos

  @login @error
  Scenario: Login fallido con usuario bloqueado
    When el usuario inicia sesión con credenciales válidas de "locked_out_user"
    Then el sistema debería mostrar un mensaje de error
