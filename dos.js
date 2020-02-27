function mostrar(){
	
	//incializo las variables
	var cantidadDeCargas = 4;
	
	var nombre = '';
	var genero = '';
	var edad = 0;
	var peso = 0;
	var pesoMayor = 0;
	var pesoMenor = 0;
	
	var contadorDeIteraciones = 0;
	var nombrePersonaMenosPesada = '';
	var acumuladorDeEdades = 0;
	var promedioDeEdades = 0;
	var contadorDePersonas = 0;

	for(var i = 0; i<cantidadDeCargas; i++){
	
		nombre = prompt("nombre");
		genero = prompt("genero");
		edad = prompt("edad");
		peso = prompt("peso");
		
		edad = parseInt(edad);
		peso = parseInt(peso);
	
		while(genero != "masculino" && genero != "femenino" && genero != "otro"){
			genero = prompt("ERROR! Ingrese un genero valido! masculino/femenino/otro");
		}
	
		//entiendo que no comprende ni 18 ni 100
		while(edad < 18 && edad > 100){
			edad = prompt("ERROR! Ingrese una edad valida! Entre 18 y 100");
		}
		
		//comprendo que tiene que ser uno o mas
		while(peso < 1){
			peso = prompt("ERROR! Ingrese un peso valido! Tiene que ser mayor a 1");
		}
		
		if(edad >= 25){
			acumuladorDeEdades = acumuladorDeEdades + edad;
			promedioDeEdades = acumuladorDeEdades/(contadorDeIteraciones+1);
		}
		
		if(contadorDeIteraciones == 0){
			pesoMayor = peso;
			pesoMenor = peso;
			contadorDeIteraciones++;
		} else if (peso < pesoMenor){
			contadorDeIteraciones++;
			pesoMenor = peso;
			nombrePersonaMenosPesada = nombre;
		}else if (peso > pesoMayor){
			contadorDeIteraciones++;
			pesoMayor = peso;
		}
		
		if(genero != "masculino" || peso > 80){
			contadorDePersonas++;
		}
	}
	
	document.write("<br>Promedio de las edades mayores o iguales a 25: "+ promedioDeEdades +" (apróx).<br>");
	document.write("<br>Nombre de la persona menos pesada y su peso: "+ nombrePersonaMenosPesada +"("+ pesoMenor +" kg).<br>");
	document.write("<br>Cantidad de personas de género distinto a masculino ó peso mayor a 80: "+ contadorDePersonas +"<br>");
}