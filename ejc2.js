///*EJERCICIO 1 : DESESTRUCTURACION Y CALCULOS */
//const calculateexpression = ({a , b , c}) => (a * b ) + c ;
//const inputobject = {a: 2 . b: 3 , c: 4 };
//const result = calculateexpression{inputobject};
//console.log(result); //debe imprimir 10
//
//
///*EJERCICIO 2 DESESTRUCTURACION EN ARRAYS */
//
//const gethigharchivers = (student) => {
//    return student 
//    .filter(({ calificacion }) => calificacion > 70)
//    .map(({ nombre}) => nombre);
//
//}
//
//const studentArray = [
//    { nombre: 'maria' , calificacion: 80},
//    { nombre: 'mariana' , calificacion: 30},
//    { nombre: 'marina' , calificacion: 0},
//]
//
//const hethigharchivers = gethigharchivers(studentArray);
//console.log(hethigharchivers);//deberia imprimir ['maria' , 'marina']
//
//
///*EJERCICIO 3 DESESTRUCTURACION Y VALORES DETERMINADOS*/
//
//const PROCESSUSER = ({nombre  , edad = 25}) =< {
//    return {nombre ,edad}
//};
//const userobject1 = {nombre: 'jhon' , edad: 30 }
//const result1 = PROCESSUSER(userobject1);
//
//console.log(result1); //deberia imprimir {nombre: 'jhon' , edad ; 30}
//
//const userobject2 = {nombre: 'maria' , edad: 20 }
//const result2 = PROCESSUSER(userobject2);
//
//console.log(result2); //deberia imprimir {nombre: 'jhon' , edad ; 30}
