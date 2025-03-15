15/3/25, 12:28 p.m. 

Testiny test run report 'Login \(TR-1\) - bakesoft' 

**Report**

**Test run**

Name

**Login \(TR-1\)**

Test report created

3/15/2025, 12:28 PM

Mario Passalia

Test run created

3/13/2025, 12:50 PM

Claudia Sanchez

https://app.testiny.io/p/1/testruns/tr/1/tc/1

1/6

15/3/25, 12:28 p.m. 

Testiny test run report 'Login \(TR-1\) - bakesoft' 

bakesoft

**Login \(TR-1\)**

Test run status: Open

25%

2

Failed

0%

-

Blocked

100%

0%

-

Skipped

COMPLETE

0%

-

Not Run

75%

6

Passed

8 of 8 test cases done

Summary of not passed test cases **ID**

**TITLE**

**RESULT BY**

**RESULT DATE**

TC-13

Registro con Correo en Mayúsculas Claudia Sanchez

3/13/2025, 4:57 PM

TC-5

Inicio de sesión con mayúsculas en el correo Claudia Sanchez

3/13/2025, 1:01 PM

https://app.testiny.io/p/1/testruns/tr/1/tc/1

2/6

15/3/25, 12:28 p.m. 

Testiny test run report 'Login \(TR-1\) - bakesoft' 

Test case details

**ID**

**TITLE**

**RESULT BY**

**RESULT DATE**

Login

Inicio de sesión exitoso con credenciales

TC-1

Claudia Sanchez

3/13/2025, 12:55 PM

válidas

**TEST CASE DETAILS**

**PRECONDITION**

Usuario registrado , Correo y contraseña correctos **STEPS**





1

Dar clic en el botón "Entrar". 

El sistema debe redirigir al usuario al formulario de inicio de sesión, mostrando los campos de ingreso de usuario y contraseña. 

2

Dar clic en el botón "Inicio de Sesión" 

El sistema debe mostrar el formulario Inicio de sesion , permitiendo ingresar el correo y la clave para ingresar al sistema. 

3

Dar clic en el botón "Entrar" dentro del formulario El sistema debe validar los datos ingresados y, si de Inicio de sesión

son correctos, permitir el acceso al usuario redirigiéndolo a la página principal **ATTACHMENTS**

**AUTHOR**

**COMMENT DATE**

CS OK TC1.mkv

Claudia Sanchez

3/13/2025, 12:54 PM

TC-14

Registro con correo inválido Claudia Sanchez

3/13/2025, 1:01 PM

**TEST CASE DETAILS**

**PRECONDITION**

La aplicación está abierta en la pantal a de autenticación\(Registro\) **STEPS**





1

Hacer clic en el botón "Registro". 

Se debe redirigir al usuario a la página de registro 2

Ingresar un correo inválido No debería permitirse continuar con el registro si el correo es inválido

3

Ingresar una contraseña válida en el campo La contraseña debe cumplir con los requisitos 

"Clave". 

establecidos \(por ejemplo, mínimo 8 caracteres, incluir números y letras. 

4

Hacer clic en el botón "Registrar". 

Se muestra un mensaje de error indicando que el correo ingresado no es válido **ATTACHMENTS**

**AUTHOR**

**COMMENT DATE**

CS OK TC\_14.mkv

Claudia Sanchez

3/13/2025, 12:57 PM

https://app.testiny.io/p/1/testruns/tr/1/tc/1

3/6

15/3/25, 12:28 p.m. 

Testiny test run report 'Login \(TR-1\) - bakesoft' 

**ID**

**TITLE**

**RESULT BY**

**RESULT DATE**

TC-15

Registro con correo ya existente Claudia Sanchez

3/13/2025, 5:00 PM

**TEST CASE DETAILS**

**PRECONDITION**

La aplicación está abierta en la pantal a de autenticación y el correo ya está registrado en la base de datos **STEPS**





1

Hacer clic en el botón "Registro". 

Se despliega el formulario de registro 2

Ingresar un correo ya registrado en el campo El campo acepta la entrada del correo sin mostrar 

"Correo" 

errores inmediatos

3

Ingresar una contraseña válida en el campo El campo acepta la contraseña sin mostrar errores 

"Clave". 

inmediatos

4

Hacer clic en el botón "Registrar". 

Se muestra un mensaje indicando que el correo ya está en uso

TC-13

Registro con Correo en Mayúsculas Claudia Sanchez

3/13/2025, 4:57 PM

**TEST CASE DETAILS**

**PRECONDITION**

El usuario debe tener un correo electronico **STEPS**





1

Hacer clic en el botón "Entrar" 

El sistema muestra el formulario de inicio de sesión

2

Hacer clic en el botón "Iniciar sesión". 

El sistema muestra el formulario con los campos correo y clave

3

El usuario ingresa el Correo en Mayuscula y Clave El sistema debe permitir el acceso correctamente, sin distinguir entre mayúsculas y minúsculas en el correo

4

Clic en el botón Registrar

Si el sistema no es sensible a mayúsculas, el usuario inicia sesión correctamente

TC-2

Inicio de sesión con credenciales erróneas Claudia Sanchez

3/13/2025, 4:57 PM

**TEST CASE DETAILS**

**PRECONDITION**

El usuario debe estar en la pantal a de inicio de sesión **STEPS**





1

Pasos:

La aplicación debe redirigir a la pantal a de inicio Hacer clic en el botón "Entrar" 

de sesión



2

Hacer clic en "Inicio de Sesión" 

Se deben mostrar los campos para ingresar el correo y la contraseña. 

https://app.testiny.io/p/1/testruns/tr/1/tc/1

4/6

15/3/25, 12:28 p.m. 

Testiny test run report 'Login \(TR-1\) - bakesoft' 

**ID**

**TITLE**

**RESULT BY**

**RESULT DATE**

**TEST CASE DETAILS**

3

Ingresar un correo electrónico El sistema permite la entrada del correo en el campo correspondiente

4

Ingresar una contraseña inválida El sistema permite la entrada de la contraseña en el campo correspondiente

5

Hacer clic en el botón "Entrar" 

El sistema valida las credenciales y muestra un mensaje de error: "La contraseña es incorrecta". 

TC-4

Inicio de Sesión con Campos Vacíos Claudia Sanchez

3/13/2025, 4:56 PM

**TEST CASE DETAILS**

**PRECONDITION**

El usuario debe estar en la pantal a de inicio de sesión. 

El sistema debe validar que los campos no estén vacíos **STEPS**





1

Hacer clic en el botón "Entrar" 

La aplicación debe redirigir a la pantal a de inicio de sesión

2

Hacer clic en "Inicio de Sesión" 

Se deben mostrar los campos para ingresar el correo y la contraseña

3

Dejar el campo de correo vacío El sistema permite dejar el campo vacío 4

Dejar el campo de contraseña vacío El sistema permite dejar el campo vacío. 

5

Hacer clic en el botón "Entrar El sistema valida los campos y muestra un mensaje de error: "El correo y la contraseña son obligatorios". 

TC-3

Inicio de Sesión con Correo No Registrado Claudia Sanchez

3/13/2025, 1:14 PM

**TEST CASE DETAILS**

**PRECONDITION**

El usuario debe estar en la pantal a de inicio de sesión **STEPS**





1

Hacer clic en el botón "Entrar" 

La aplicación debe redirigir a Formulario de inicio de sesión

2

Hacer clic en "Inicio de Sesión" 

Se deben mostrar los campos para ingresar el correo y la contraseña

3

Ingresar un correo No registrado El sistema permite No Permita Colocar un correo No esta Registrado

4

Ingresar una contraseña válida El sistema permite la entrada de la contraseña en el campo correspondiente

https://app.testiny.io/p/1/testruns/tr/1/tc/1

5/6

15/3/25, 12:28 p.m. 

Testiny test run report 'Login \(TR-1\) - bakesoft' 

**ID**

**TITLE**

**RESULT BY**

**RESULT DATE**

**TEST CASE DETAILS**

5

Hacer clic en el botón "Entrar" 

El sistema valida las credenciales y muestra un mensaje de error: "El correo electrónico es incorrecto

TC-5

Inicio de sesión con mayúsculas en el correo Claudia Sanchez 3/13/2025, 1:01 PM

**TEST CASE DETAILS**

**PRECONDITION**

El usuario debe estar registrado en el sistema. 

El usuario debe conocer su correo en Mayuscula y contraseña. 

**STEPS**





1

Hacer clic en el botón "Entrar" 

El sistema muestra el formulario de inicio de sesión

2

Hacer clic en el botón "Iniciar sesión". 

El sistema muestra el formulario con los campos correo y clave

3

El usuario ingresa el Correo en Mayuscula y Clave El sistema debe permitir el acceso correctamente, sin distinguir entre mayúsculas y minúsculas en el correo

4

Clic en el botón Entrar

Si el sistema no es sensible a mayúsculas/minúsculas, el usuario inicia sesión correctamente

https://app.testiny.io/p/1/testruns/tr/1/tc/1

6/6



