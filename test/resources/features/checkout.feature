
Feature: Proceso de compra

  Como un cliente de Sauce Demo
  Quiero completar el proceso de compra
  Para confirmar la adquisición de productos

  Background:
    Given que el usuario ha iniciado sesión como "standard_user"
    And que el usuario tiene un producto en el carrito

  @checkout
  Scenario: Completar compra exitosamente
    When el usuario completa el proceso de checkout
    Then debería ver la confirmación de compra exitosa
