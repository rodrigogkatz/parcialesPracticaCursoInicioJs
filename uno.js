
function mostrar(){
    var altura = parseInt(document.getElementById("ladoA").value);
    var base = parseInt(document.getElementById("ladoB").value);
    var respuesta = document.getElementById("angulosRectos").value;

    mostrarCalculo(altura, base, respuesta);
}

function mostrarCalculo(altura, base, isAnguloRecto){

    console.log(altura, base, isAnguloRecto);
    
    if (isAnguloRecto.toUpperCase()=="si".toUpperCase()){
        console.log("entro al if");
        if(altura!=base){
            //superficie del rectangulo
            var superficie = altura*base;
            var mensaje = `La superficie es ${superficie}`;
            console.log(mensaje);
            imprimirConcatenacionConResultado(altura, base, mensaje);
        }
        if (altura==base){
            //multiplicacion de los lados del cuadrado
            var multiplicacion = altura*base;
            var mensaje = `La multiplicación de los lados es ${multiplicacion}`;
            console.log(mensaje);
            imprimirConcatenacionConResultado(altura, base, mensaje);
        }
        
    } else {

        if(altura!=base){
            //perimetro del romboide
            var perimetro = 2*altura+2*base;
            var mensaje = `El perímetro es ${perimetro}`;
            imprimirConcatenacionConResultado(altura, base, mensaje);
        }

        if(altura==base){
            //suma de los lados del rombo
            var suma = altura+base;
            var mensaje = `La suma de sus lados es  ${suma}`;
            imprimirConcatenacionConResultado(altura, base, mensaje);
        }
    }
}

function imprimirConcatenacionConResultado(altura, base, mensaje){
    alert(`Lados concatenados: ${altura}${base} ${mensaje}`);
}