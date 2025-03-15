# Testiny Test Run Report - Plan Carrito de Compras (TR-2) - Bakesoft

## Reporte de Pruebas

### Información General
- **Nombre del test run:** Plan carrito de compras (TR-2)
- **Fecha de creación del reporte:** 15/03/2025, 12:27 PM
- **Creado por:** Mario Passalia
- **Estado del test run:** Abierto
- **Casos de prueba ejecutados:** 8/8 (100%)
- **Resultados:**
  - ❌ 8 Fallidos (100%)
  - 🚫 0 Bloqueados
  - ⏭️ 0 Omitidos
  - ⏳ 0 No ejecutados
  - ✅ 0 Pasados

---

## Resumen de Casos de Prueba No Pasados

| ID    | Título                                            | Resultado por    | Fecha de resultado |
|-------|--------------------------------------------------|------------------|--------------------|
| TC-6  | Agregar producto al carrito                     | Mario Passalia   | 15/03/2025, 12:23 PM |
| TC-7  | Eliminar producto del carrito                   | Mario Passalia   | 15/03/2025, 12:24 PM |
| TC-8  | Modificar cantidad de un producto en el carrito | Mario Passalia   | 15/03/2025, 12:23 PM |
| TC-9  | Vaciar carrito                                   | Mario Passalia   | 15/03/2025, 12:24 PM |
| TC-10 | Continuar al pago desde el carrito              | Mario Passalia   | 15/03/2025, 12:23 PM |
| TC-11 | Validación de stock al agregar productos        | Mario Passalia   | 15/03/2025, 12:24 PM |
| TC-12 | Guardar productos en el carrito después de cerrar sesión | Mario Passalia | 15/03/2025, 12:23 PM |
| TC-16 | Comprar con el carrito vacío                    | Mario Passalia   | 15/03/2025, 12:23 PM |

---

## Detalle de Casos de Prueba

### TC-6: Agregar producto al carrito
#### Pasos:
1. Ingresar al sitio web.
2. Navegar hasta la página de un producto.
3. Hacer clic en el botón "Agregar al carrito".
4. Verificar que el producto se agrega correctamente al carrito.

✅ **Criterio de éxito:** El producto aparece en el carrito con la cantidad seleccionada y su precio correcto.

---

### TC-7: Eliminar producto del carrito
#### Pasos:
1. Agregar un producto al carrito.
2. Ir a la página del carrito.
3. Hacer clic en el botón "Eliminar" del producto.
4. Confirmar la eliminación si se solicita.

✅ **Criterio de éxito:** El producto desaparece del carrito y el total se actualiza correctamente.

---

### TC-8: Modificar cantidad de un producto en el carrito
#### Pasos:
1. Agregar un producto al carrito.
2. Ir a la página del carrito.
3. Modificar la cantidad del producto.
4. Verificar que la cantidad y el precio total se actualizan correctamente.

✅ **Criterio de éxito:** La cantidad del producto en el carrito se modifica y el precio total se ajusta correctamente.

---

### TC-9: Vaciar carrito
#### Pasos:
1. Agregar varios productos al carrito.
2. Ir a la página del carrito.
3. Hacer clic en el botón "Vaciar carrito".
4. Confirmar la acción si es necesario.

✅ **Criterio de éxito:** Todos los productos se eliminan del carrito y el total se actualiza a cero.

---

### TC-10: Continuar al pago desde el carrito
#### Pasos:
1. Agregar un producto al carrito.
2. Ir a la página del carrito.
3. Hacer clic en el botón "Finalizar compra".
4. Verificar que el sistema redirige a la pantalla de pago.

✅ **Criterio de éxito:** Se redirige al usuario a la página de pago con los productos y montos correctos.

---

### TC-11: Validación de stock al agregar productos al carrito
#### Pasos:
1. Navegar a la página de un producto con stock limitado.
2. Intentar agregar más unidades de las disponibles.
3. Verificar la respuesta del sistema.

✅ **Criterio de éxito:** El sistema muestra un mensaje de error y no permite agregar más unidades de las disponibles.

---

### TC-12: Guardar productos en el carrito después de cerrar sesión
#### Pasos:
1. Agregar productos al carrito.
2. Cerrar sesión y volver a iniciar sesión.
3. Navegar al carrito.

✅ **Criterio de éxito:** Los productos agregados previamente siguen en el carrito.

---

### TC-16: Comprar con el carrito vacío
#### Pasos:
1. Ir a la página del carrito sin productos.
2. Intentar hacer clic en "Finalizar compra".

✅ **Criterio de éxito:** El sistema muestra un mensaje de error o deshabilita el botón hasta que haya productos en el carrito.

---

### Enlaces a los casos de prueba en Testiny
- [TC-6](https://app.testiny.io/p/1/testruns/tr/2/tc/6)
- [TC-7](https://app.testiny.io/p/1/testruns/tr/2/tc/7)
- [TC-8](https://app.testiny.io/p/1/testruns/tr/2/tc/8)
- [TC-9](https://app.testiny.io/p/1/testruns/tr/2/tc/9)
- [TC-10](https://app.testiny.io/p/1/testruns/tr/2/tc/10)
- [TC-11](https://app.testiny.io/p/1/testruns/tr/2/tc/11)
- [TC-12](https://app.testiny.io/p/1/testruns/tr/2/tc/12)
- [TC-16](https://app.testiny.io/p/1/testruns/tr/2/tc/16)
