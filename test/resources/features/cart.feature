
Feature: Gestión del carrito de compras

  Como un cliente de Sauce Demo
  Quiero agregar productos al carrito
  Para poder comprarlos posteriormente

  Background:
    Given que el usuario ha iniciado sesión como "standard_user"

  @cart
  Scenario: Agregar un producto al carrito
    When el usuario agrega un producto al carrito
    Then el producto debería mostrarse en el carrito de compras
