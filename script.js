const text= document.querySelector(".Texto");
const resultado = document.querySelector(".evaluar");
const imagen2= document.querySelector(".div2");
const activar_boton= document.querySelector(".boton_copiar_activar");
const aux1=document.querySelector(".aux1");


function botonEncriptar()
{
    let texto = text.value; 
    texto = texto.replace(/e/mg, "enter");
    texto = texto.replace(/i/mg, "imes");
    texto = texto.replace(/a/mg, "ai");
    texto = texto.replace(/o/mg, "ober");
    texto = texto.replace(/u/mg, "ufat");
    
    imagen2.remove();
    activar_boton.style.display="flex";
    aux1.style.height="50%";
    resultado.textContent=texto;
    //alert(texto)
}
function botonDesencriptar()
{
    let texto = text.value; 
    texto = texto.replace(/enter/mg, "e");
    texto = texto.replace(/imes/mg, "i");
    texto = texto.replace(/ai/mg, "a");
    texto = texto.replace(/ober/mg, "o");
    texto = texto.replace(/ufat/mg, "u");
    
    imagen2.remove();
    activar_boton.style.display="flex";
    aux1.style.height="50%";
    resultado.textContent=texto;
   // alert(texto)
}
function copiar()
{
    document.getElementById("impresion").select()
    document.execCommand ("copy");
    alert("texto copiado");
}