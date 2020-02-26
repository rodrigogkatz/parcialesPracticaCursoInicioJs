function mostrar(){

    var indice = 4;
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
    var mensaje;

    for(var i=0; i < indice; i++){
        nombre = prompt("nombre");

        do{
            genero = prompt("genero")
            if (genero === "masculino"){
                contadorMasculino++;
                break;
            } else if (genero === "femenino"){
                contadorGeneral++;
                break;
            } else {
                contadorGeneral++;
                break;
            }
        } while (genero !== "masculino" || genero !== "femenino" || genero !== "otro" );

        do{
            edad = parseInt(prompt("edad"));
            if (edad>=25){
                edad += edad;
                contadorEdadesMayores++;
                promedio = edad/contadorEdadesMayores;
                break;
            }
        } while(edad<18 || edad>100 );
   
        do{
            peso = prompt("peso");
            if(contadorDePeso==0){
                minPeso = peso;
                maxPeso = peso;
            } else if (peso<minPeso){
                minPeso = peso;
                mensaje = `"${nombre}" (${minPeso} kg)`;
            } else if (peso>maxPeso){
                maxPeso = peso;
            }
            if(peso > 80){
                contadorGeneral++;
            }
            break;
        } while(isNaN(peso) && peso<1);
    }

    alert(`- Promedio de las edades mayores o iguales a 25: ${promedio} (apróx).`)
    alert(mensaje);
    alert(contadorGeneral);
}
