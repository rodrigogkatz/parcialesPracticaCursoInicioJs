/**
Realizar el algoritmo que permita iterar el ingreso de dos datos,
una letra (validar que sea una letra sin caracteres especiales ni ñ.
No distinguir mayúsculas de minúsculas. Ayuda: Utilizar tabla ASCII.),
y un número entre -10 y 10 (validar que sea un número en ese rango)
hasta que el usuario quiera
e informar al terminar el ingreso por document.write:
a) La resta de los números impares.
b) La suma de los números pares.
c) La cantidad de ceros.
d) El promedio de todos los números negativos ingresados.
e) La multiplicación de todos los números positivos.
f) El número y la letra del máximo.
g) El número y la letra del mínimo.
h) La cantidad de vocales.

!!! Cero no es par, ni impar, ni positivo, ni negativo.!!!

Testeo con los siguientes datos:
1) Letra: "ñ" (mal), Letra: "@" (mal), Letra: "[" (mal), Letra: "{" (mal), Letra: "a" (bien); Numero: 1.
2) Letra: "F" (mayus); Numero: -11 (mal); Numero: 11 (mal); Numero: -5 (bien).
3) Letra: "g"; Numero: 8.
4) Letra: "P" (mayus); Numero: -9.
5) Letra: "u"; Numero: 0.
6) Letra: "k"; Numero: 4.

Resultado:
- La resta de los números impares: 13 (trece).
- La suma de los números pares: 12 (doce).
- La cantidad de ceros: 1 (uno).
- El promedio de todos los números negativos ingresados: -7 (siete negativo).
- La multiplicación de todos los números positivos: 32 (treinta y dos).
- El número y la letra del máximo: 8 y "g".
- El número y la letra del mínimo: -9 y "P".
- La cantidad de vocales: 2 (dos).
*/

function mostrar(){
	
	var respuesta = 'si';
	var numero = 0;
	var letra = '';
	
	var contadorDeVocales = 0;
	
	var contadorDeNumeros = 0;
	var contadorNumerosImpares = 0;
	var contadorNumerosPares = 0;


	var contadorDeCeros = 0;
	
	var contadorDeNumerosNegativos = 0;
	var promedioDeNumerosNegativos = 0;
	
	var contadorDeMultiplicacion = 0;
	var valorDeMultiplicacion;
	var valorDeSuma = 0;
	var valorDeResta = 0;
	
	var maxNum = 0;
	var minNum = 0;
	var letraMinNum = '';
	var letraMaxNum = '';
	
	
	while(respuesta == 'si'){
	
		letra = prompt("ingrese una letra").toUpperCase();
		while(letra < 'a'.toUpperCase() || letra > 'z'.toUpperCase()){
			if(letra === 'ñ' || letra === 'Ñ'){
				letra = prompt("ERROR! ingrese una letra nuevamente");
			} else {
				letra = prompt("ERROR! ingrese una letra nuevamente");
			}
		}
		
		numero = parseInt(prompt("ingrese un numero"));
		while(isNaN(numero) || numero < -10 || numero > 10){
			numero = prompt("ERROR! ingrese un numero nuevamente");
		}
		
		//h) La cantidad de vocales.
		switch(letra){
			case 'A':
			case 'E':
			case 'I':
			case 'O':
			case 'U':
				contadorDeVocales++;
				break;
		}
		
		if(numero%2 != 0){
			//a) La resta de los números impares.
			valorDeResta = valorDeResta - numero;
			contadorNumerosImpares++;
		} else {
			//b) La suma de los números pares.
			valorDeSuma = valorDeSuma + numero;
			contadorNumerosPares++;
		}

		//c) La cantidad de ceros.
		if(numero == 0){
			contadorDeCeros++;
		}

		//d) El promedio de todos los números negativos ingresados.
		if(numero<0){
			contadorDeNumerosNegativos++;
			promedioDeNumerosNegativos = (promedioDeNumerosNegativos + numero)/contadorDeNumerosNegativos;
		}
		
		//Tome los numeros positivos como mayores a cero para que la multiplicación no me pueda dar cero...
		if(numero>0 && contadorDeMultiplicacion==0){
				valorDeMultiplicacion = numero;
				contadorDeMultiplicacion++;
		} else if(numero>0 && contadorDeMultiplicacion>0){
				valorDeMultiplicacion = valorDeMultiplicacion * numero;
				contadorDeMultiplicacion++;
		}
		
		if(contadorDeNumeros == 0){
			maxNum = numero;
			minNum = numero;
			letraMinNum = letra;
			letraMaxNum = letra;
			contadorDeNumeros++;
		} else if (numero < minNum){
			//g) El número y la letra del mínimo.
			minNum = numero;
			letraMinNum = letra;
			contadorDeNumeros++;
		} else if (numero > maxNum){
			//f) El número y la letra del máximo.
			maxNum = numero;
			letraMaxNum = letra;
			contadorDeNumeros++;
		}
		
		respuesta = prompt("Desea continuar?");
		
	}

	document.write(
		"a- La resta de los números impares: "+ valorDeResta +".<br>"+
		"b- La suma de los números pares: "+ valorDeSuma +".<br>"+
		"c- La cantidad de ceros: "+ contadorDeCeros +".<br>"+
		"d- El promedio de todos los números negativos ingresados: "+ promedioDeNumerosNegativos +".<br>"+
		"e- La multiplicación de todos los números positivos: "+ valorDeMultiplicacion +".<br>"+
		"f- El número y la letra del máximo: "+ maxNum +" y "+ letraMaxNum +".<br>"+
		"g- El número y la letra del mínimo: "+ minNum +" y "+ letraMinNum +".<br>"+
		"h- La cantidad de vocales: "+ contadorDeVocales +"."
		);

}
