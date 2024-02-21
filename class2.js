/*DESESTRUCTURACION *

/*DESESTRUCTURACION EN OBJETOS**
//const persona = {nombre: 'juan' , edad: 25 , ciudad: 'madrid' };
//const {nombre , edad , ciudad } = persona
//console {debug: ƒ, error: ƒ, info: ƒ, log: ƒ, warn: ƒ, …}
//console.log(nombre); //juan
//console.log(edad); //25
//console.log(ciudad); // madrid 


/*REST EN LA DESESTRUCTURACION EN OBJETOS*
//const { nombre ,... resto } = persona 
//console.log(resto);
// {edad: 25, ciudad: 'madrid'}
//console.log(persona);
// {nombre: 'juan', edad: 25, ciudad: 'madrid'}


/*DESESTRUCTURACION EN ARGUMENTOS DE FUNCIONES CON OBJETO*
//const persona= {nombre: 'juan' , edad: 25 ,ciudad: 'madrid' };
//function saludad ({ nombre, edad , ciudad  }) {
//    console.log(`${nombre} tiene ${edad} años y vive en ${ciudad}. `); 
//}
//
//saludad(persona);
// juan tiene 25 años y vive en madrid. 


//*DESESTRUCTURACION ANINADA EN OBJETOS//
//const persona= {nombre: 'juan' , edad: 25 , direccion: {ciudad: 'madrid' , codigopostal: '28001'}};
//const {nombre , edad , direccion: {ciudad , codigopostal}} = persona ;
//console.log(nombre, edad , ciudad , codigopostal);
// juan 25 madrid 28001


/RENOMBRAR LAS VARIABLES DURANTE LA DESESTRUCTURACION EN OBJETOS*/
//const persona= {nombre: 'juan' , edad: 25 , ciudad: 'madrid'}; 
//const {nombre : aliasnombre, edad: aliasedad , ciudad: aliasciudad } = persona ;
//console.log(aliasnombre);
//juan
//console.log(aliasedad);
// 25
//console.log(aliasciudad);
// madrid



////FUNCION QUE TOMA DOS NUMEROS Y UN CALLBACK PARA REALIZAR UNA OPERACION *//
//function realizarOperacion (num1 , num2 , operacionesCallback){
//    console.log(`operacion: &{num1} y ${num2}`);
//    //LLAMA AL CALBACK PASANDOLE DOS NUMEROS COMO ARGUMENTOS *//
//    operacionesCallback(num1,num2);
//}
//
////*CALLBACK QUE SUMA DOS NUMEROS*//
//function sumar(a, b ){
//    console.log(`suma: ${a + b}`);
//
//}
//
////*CALLBACK QUE MULTIPLICA DOS NUMEROS*//
//function multiplicar(a,b ){
//    console.log(`multiplicacion :  ${a * b}`);
//}
//
////*USO DE LA FUNCION CON LOS CALLBACKS*//
//realizarOperacion(5, 3, sumar);
//realizarOperacion(5 , 3 , multiplicar);



