//FUNCION PARA QUE APAREZCA EL ELEMENTO LENTAMENTE

$(document).ready(function(){
        

$("#cursos,#title-cursos,#servicios,#aboutme,#container-skills,#title-portafolio").hide();

$(function(){
$(document).scroll(function(){
    if($(this).scrollTop()>100){
    $("#aboutme").fadeIn(2000); 
    } 
    if($(this).scrollTop()>891){
        $("#container-skills").fadeIn(2000); 
    } 
    if($(this).scrollTop()>1369){
        $("#portafolios,#title-portafolio").fadeIn(2000); 
    } 

    if($(this).scrollTop()>1883){
        $("#cursos,#title-cursos").fadeIn(2000); 
    } 

    if($(this).scrollTop()>2714){
        $("#servicios,#title-cursos").fadeIn(2000); 
    } 
 })//close de window.scroll function
 }) //close $(function)

});//Close document ready
//CLOSE FUNCION PARA QUE APAREZCA EL ELEMENTO LENTAMENTE



//FUNCIONES PARA SWEET ALERT EN BOTON ENVIAR FORMULARIO Y BOTON DESCARGAR CURRICULUM

$(document).ready(function(){
                         
    $('#send').on('click',function(){
        Swal.fire({
        position: 'center', //Como justificar el contenido, centrado
        icon: 'success', //TIPO DE ICONO SUCCES EXITOSO VERDE TICK
        title: 'Your message has been sent', //ES COMO UN H1 O PARRAFO LO QUE SEA
        showConfirmButton: false, //BOTON DE CANCELAR
        timer: 1500,
        showConfirmButton:true //BOTON DE CONFIRMACION
        }); //close swal.fire configuration for button
    
    }); //close $(#send) selector 

    $('#icon-cv').on('click',function(){
        Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Download started',
        showConfirmButton: false,
        timer: 1500
        }); //close swal.fire configuration for button
    
    }); //close $(#icon-cv) selector

}); //CLOSE DOCUMENT READY
   
// CLOSE FUNCIONES PARA SWEET ALERT EN BOTON ENVIAR FORMULARIO Y BOTON DESCARGAR CURRICULUM
  


//FUNCION DE BOTON PARA IR HACIA ARRIBA
$(document).scroll(function() {
    if ($(this).scrollTop() > 2710) {
        $('a.scroll-top').fadeIn('slow');
    } else {
        $('a.scroll-top').fadeOut('slow');
    }
});
$('a.scroll-top').click(function(event) {
    event.preventDefault();
    $('html, body').animate({scrollTop: 0}, 600);
});


/*
Con el objeto window y el método scroll de jQuery

verificamos la posición actual del scroll para mostrar u 
ocultar el botón según sea el caso. En específico se mostrará el
botón si el usuario ha desplazado 2710px hacia abajo la página y 
se ocultará en caso contrario.

Luego se define la acción click del botón la cual 
recibe como parámetro la variable event que contiene
toda la información del evento que se acaba de ejecutar (click) y 
se utiliza el método preventDefault para evitar el comportamiento por defecto del botón.

Finalmente se aplica una animación (desplazar hacia 
arriba) con el método animate que recibe dos parámetros: 
el primero es la animación a aplicar y el segundo la duración de tal animación.
*/

//FUNCION DE BOTON PARA IR HACIA ARRIBA











