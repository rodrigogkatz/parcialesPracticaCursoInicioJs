
/**
 *Realizar el algoritmo que permita ingresar el nombre de un país,
cantidad de habitantes en millones entre 1 y 270 (validar que sea un número en ese rango),
y la temperatura mínima que se registra en su territorio (validar que sea un número entre -50 y 50)
hasta que el usuario quiera
e informar al terminar el ingreso por document.write:
a) La cantidad de temperaturas impares.
b) El nombre del pais con más habitantes.
c) La cantidad de paises por debajo de los 20 grados.
d) El promedio de habitantes entre los paises ingresados.
f) La temperatura máxima ingresada, y nombre del pais que registro esa temperatura.

Testeo con los siguientes valores:
1) Nombre: "Argentina"; Cantidad: 271 (mal), Cantidad: 0 (mal), Cantidad: 40 (bien); Temperatura: -11.
2) Nombre: "Costa Rica"; Cantidad: 4; Temperatura: -51 (mal), Temperatura: 51 (mal), Temperatura: 22 (bien).
3) Nombre: "Brasil"; Cantidad: 200; Temperatura: 20.
4) Nombre: "Chile"; Cantidad: 15; Temperatura: -21.
5) Nombre: "Canadá"; Cantidad: 150; Temperatura: -40.

Resultado:
- La cantidad de temperaturas impares: 2 (dos).
- El nombre del pais con más habitantes : "Brasil" (200m).
- La cantidad de paises por debajo de los 20 grados: 3 (tres).
- El promedio de habitantes entre los paises ingresados: 88 millones.
- La temperatura máxima ingresada, y nombre del pais que registro esa temperatura: "Costa Rica" (20ºC).
 *
 */
function mostrar()
{
    var respuesta = 'si';
    var contadorTemperaturasImpares = 0;
    var nombreDelPaisConMasHabitantes = '';
    var contadorDePaisesConTemperaturasMenoresA20 = 0;
    var minCantHab = 0;
    var maxCantHab = 0;
    var habitantesTotales = 0;
    var promedioDeHabitantesTotales = 0;
    var temperaturaMaximaIngresada = 0;
    var nombreDelPaisDeMayorTemperatura = '';
    var contadorDeIteraciones = 0;

    while(respuesta.toLowerCase() === 'si'.toLowerCase()){

        nombreDelPais = prompt("ingrese el nombre de un pais");
        cantidadDeHabitantes = parseInt(prompt("cantidad de habitantes entre 1 y 270 millones"));
        temperaturaMinimaRegistrada = parseInt(prompt("temperatura mínima que se registra en su territorio"));
    
        if(temperaturaMinimaRegistrada<20){
            contadorDePaisesConTemperaturasMenoresA20++;
        }

        if(temperaturaMinimaRegistrada%2 == 1){
            contadorTemperaturasImpares++;
        }

        if(contadorDeIteraciones == 0){
            minCantHab = cantidadDeHabitantes;
            maxCantHab = cantidadDeHabitantes;
            contadorDeIteraciones++;
        } else if (cantidadDeHabitantes < minCantHab){
            minCantHab = cantidadDeHabitantes;
            contadorDeIteraciones++;
        } else if (cantidadDeHabitantes > maxCantHab){
            maxCantHab = cantidadDeHabitantes;
            contadorDeIteraciones++;
            nombreDelPaisConMasHabitantes = nombreDelPais;
        }

        if(habitantesTotales){
            habitantesTotales += habitantesTotales;
            promedioDeHabitantesTotales = habitantesTotales/(contadorDeIteraciones+1);
        }

        if (respuesta === 'no'){

        }
    } 
}
