function mostrar(){

    var indice = 3;
    var contadorMasculino;
    var contadorGeneral = 0;
    var contadorEdadesMayores= 0;
    var nombre;
    var genero;
    var edad;
    var contadorDePeso = 0;
    var peso;
    var minPeso;
    var maxPeso;
    var promedio;
    var personaMenosPesada;

    for(var i=0; i <= indice; i++){
        
        nombre = prompt("nombre");

        do{
            genero = prompt("genero")
            if (genero === "masculino"){
                contadorMasculino++;
                break;
            } else if (genero === "femenino"){
                contadorGeneral++;
                break;
            } else if (genero === "otro"){
                contadorGeneral++;
                break;
            } else {
                gemero = prompt("ERROR. El genero debe ser femenino/masculino/otro");
                break;
            }
        } while (genero !== "masculino" && genero !== "femenino" && genero !== "otro" );

        do{
            edad = parseInt(prompt("edad"));
            if (edad>=25){
                edad += edad;
                contadorEdadesMayores++;
                promedio = edad/contadorEdadesMayores;
                break;
            }
        } while(isNaN(edad) || edad<18 || edad>100 );
   
        do{
            peso = prompt("peso");
            if(contadorDePeso==0){
                minPeso = peso;
                maxPeso = peso;
            } else if (peso<minPeso){
                minPeso = peso;
                personaMenosPesada = nombre;
            } else if (peso>maxPeso){
                maxPeso = peso;
            }
            if(peso > 80){
                contadorGeneral++;
            }
            break;
        } while(isNaN(peso) && peso<=1);
    }

    alert(`Promedio de las edades mayores o iguales a 25: ${promedio.toFixed(2)} (apróx).`)
    alert(`Nombre de la persona menos pesada y su peso: "${personaMenosPesada}" (${minPeso} kg).`);
    alert(`Cantidad de personas de género distinto a masculino ó peso mayor a 80: ${contadorGeneral}.`);
}
