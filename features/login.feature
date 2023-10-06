@login
Feature: Login

  Scenario: Visualizar inicio de sesión
    When Ingreso a la aplicacion
    Then el usuario esta en la pagina de inicio de sesion
  
  Scenario: Login exitoso
    Given el usuario esta en la pagina de inicio de sesion
    When el usuario realiza el inicio de sesion con usuario "admin@gmail.com" y password "Test.123"
    Then accede a la home de la aplicacion

  Scenario Outline: Login fallido por <falla>
    Given el usuario esta en la pagina de inicio de sesion
    When el usuario realiza el inicio de sesion con usuario "<usuario>" y password "<password>"
    Then se visualiza el siguiente mensaje de error "<mensaje>"

    Examples:
    | falla 				      | usuario 		       | password 			| mensaje				|
    | password incorrecta	| admin@gmail.com	   | Test.1				  | Ups, tu contraseña no coincide. Revisa tu información e intenta de nuevo.	|
    | usuario inexistente	| mirakel@gmail.com | Test.123				| El usuario no existe	|