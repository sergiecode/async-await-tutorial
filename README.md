![Tutorial de Async Await en Javascript](https://raw.githubusercontent.com/sergiecode/async-await-tutorial/master/async%20await.jpg)

# Async/Await en JavaScript

## Introducción

Async/Await es una característica introducida en ECMAScript 2017 que permite escribir código asíncrono de manera síncrona y más fácil de leer.

Antes de Async/Await, las promesas eran la forma más común de manejar operaciones asíncronas en JavaScript. Sin embargo, el anidamiento de promesas puede ser difícil de leer y escribir, especialmente cuando hay muchas operaciones asíncronas.

Async/Await se basa en las promesas y proporciona una forma más simple y elegante de escribir código asíncrono.

## Sintaxis

La sintaxis de Async/Await es bastante simple. Para declarar una función asíncrona, utiliza la palabra clave `async` antes de la palabra clave `function`. Por ejemplo:

    async function miFuncionAsincrona() {
      // código asíncrono
    }

Dentro de una función asíncrona, se puede usar la palabra clave `await` para esperar la resolución de una promesa antes de continuar con el siguiente bloque de código. Por ejemplo:

    async function miFuncionAsincrona() {
      const resultado = await fetch('https://mi-api.com/datos');
      // hace algo con el resultado
    }

## Ejemplo

Aquí hay un ejemplo de cómo se vería un código que usa Async/Await:

    async function obtenerDatos() {
      const respuesta = await fetch('https://mi-api.com/datos');
      const datos = await respuesta.json();
      return datos;
    }
    
    async function imprimirDatos() {
      const datos = await obtenerDatos();
      console.log(datos);
    }
    
    imprimirDatos();

En este ejemplo, la función `obtenerDatos()` devuelve los datos obtenidos de una API como un objeto JSON. La función `imprimirDatos()` llama a `obtenerDatos()` y espera a que se resuelva antes de imprimir los datos en la consola.

## Conclusión

Async/Await proporciona una forma más sencilla de escribir código asíncrono en JavaScript. La sintaxis es fácil de entender y hace que el código sea más fácil de leer y mantener. Si aún no estás usando Async/Await, ¡deberías empezar a hacerlo!
