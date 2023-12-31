/*

DOM (Document Object Model / Modelo de Objeto del Documento)


Cuando creamos paginas que usan HTML + CSS estamos creando paginas estaticas (porque no tienen interactividad), cuando agregamos JS, nuestras paginas se convierten en sitios dinamicos (tienen interactividad).


El navegador lee el documento html de arriba a abajo, de izquierda a derecha (renderizacion)

Para que una pagina se renderice correctamente, se toma en cuenta el contenido, el peso de las imagenes, la conexion a internet, etc.



Cuando el documento se renderiza, se crea un "arbol" (DOM), tiene muchas ramas que son las etiquetas y cada uno de los elementos que tenemos dentro de esas etiquetas se consideran "hojas" (nodos).


Cuando hablamos del DOM y entendemos que se representa con un arbol con ramas y hojas, entendemos que cada una de estas ramas y hojas es un nodo.


Que es un nodo?
Representacion mas basica de lo que existe en un DOM, puede ser un elemento o etiqueta, puede ser un atributo, puede ser un texto, incluso un comentario.

    - Document : nodo raiz, a partir del cual se derivan los demas nodos. Es el objeto a partir del cual se puede acceder a cualquier elemento dentro de el. Todos los nodos derivan de este.

    - Element: Son nodos definidos por etiquetas html (div, h1, p, img, head, script, etc), ya sea que se vea o no se vean (etiquetas que interpreta el navegador),

    - Text: El texto que hay dentro de un elemento se considera un nodo, con la caracteristica que es un nodo hijo.

    - Atributos: los atributos de las etiquetas tambien se convierten en nodos. Son nodos que estan asociados a un elemento y se pueden considerar tambien nodos hijos.

    - Comment: los comentarios tambien son un nodo, porque forma parte del documento.



    Para que utilizamos JS en un DOM?
        - Agregar elementos HTML
        - Modificar elementos HTML
        - Borrar elementos HTML
*/


//Comenzamos a trabajar con los nodos de mi documento html

//1. Paso Guardar los elementos HTML en variables de JS (let, var, const)

/* Metodos de seleccion de elementos: Permiten tener una etiqueta html y guardarla para su uso posterior.


    -Metodos tradicionales
        - getElementByID (trae un elemento por ID)
        - getElementByTagName
        - getElementByClassName
*/

//Aqui obtengo un elemento por id
const nombrePaciente = document.getElementById("nombrePaciente");
console.log(nombrePaciente);


//Aqui obtengo varios elementos por clase
const columnas = document.getElementsByClassName("col");
console.log(columnas);


//Aqui obtengo varios elementos por etiquetas
const inputs = document.getElementsByTagName("input");
console.log(inputs);


/*
Metodos actuales

la unica diferencia entre el querySelector y el getElement, es que tenemos que especificar el tipo de selector que usaremos (. para las clases, # para los id)

    - document.querySelector
    - document.querySelectorAll
*/


//Aqui obtengo un elemeto por el selector #
let containerPadre = document.querySelector("#containerPadre");
console.log(containerPadre);

//Aqui obtengo varios elementos por el selector.
let containers = document.querySelectorAll(".container");
console.log(containers);


/*
Metodos para modificar elementos en su texto

    -innerHTML: Esta propiedad nos permite acceder y modificar el contenido de nuestro elemento. Asignamos una cadena de texto y podemos modificar o eliminar el texto. (ya existe un texto)


    -textContent: Cambiar o recuperar el contenido dentro de un elememto. Podemos modificar o eliminar el texto (crear un texto nuevo)


*/

// Modificando el texto de un h1 con un innerHTML
let titulo = document.getElementById("titulo");

titulo.innerHTML = "Nuevo texto de mi titulo";

//Creando un nuevo texto con innerHTML
let mensajeConfirmacion = document.getElementById("mensajeConfirmacion");
mensajeConfirmacion.innerHTML = "<p>Mensaje de Confirmacion</p>";


/*

Crear elementos (Create)

    - Crear el elemento
        - createElement (etiquetas)
        - createTextNode (textos)
        - creatComment (comentarios)



    - Poner el elemento (append)
        -append
        -appendChild
*/

//Creando un elemento con creatElement
let imagen = document.createElement("img");

//Crear los atributos de un elemento
imagen.src = "https://soyunperro.com/wp-content/uploads/perrocontento.jpg";
imagen.alt = "Foto de perrito feliz";


//Poner mi imagen en el contenedor de mensajeConfirmacion
mensajeConfirmacion.appendChild(imagen);