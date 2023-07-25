Estos son los hallazgos y oportunidades de mejora en la aplicacion y en la implementacion de los tests, que se encontraron durante el reto.

1. Al momento de ejecutar la prueba se desactivo la seleccion del iphone, debido a que el producto no estaba displonible.

2. Se implementaron los test usando POM, aplicando mejores practicas de desarrollo.

3. En cuanto al DOM, se recomienda tener IDs o data-testid para los elementos, ademas algunos tags estan incorrectos. Por ejemplo para algunos botones, se tiene el tag en el DOM com "Input".

4. El metodo "FillPersonalInformation", deberia ser mejorado enviando los parametros cuando se hace la llamada de los metodos, pero en este caso por ser un demo, se implento con la info hardcoded. Esto tambien se puede aplicar en otros metodos, con el fin de tener metodos que se puedan reutilizar y sean parametrizables.

5. Se debio configurar ChromeWebSecurity=false, Debido a que estaba teniendo problemas interantuando con algunos elements en el checkout.

6. En cuanto a al Test de la API, tambien se puede mejorar enviando los parametros en los metodos.

