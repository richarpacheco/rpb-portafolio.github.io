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
Con el objeto window y el m??todo scroll de jQuery

verificamos la posici??n actual del scroll para mostrar u 
ocultar el bot??n seg??n sea el caso. En espec??fico se mostrar?? el
bot??n si el usuario ha desplazado 2710px hacia abajo la p??gina y 
se ocultar?? en caso contrario.

Luego se define la acci??n click del bot??n la cual 
recibe como par??metro la variable event que contiene
toda la informaci??n del evento que se acaba de ejecutar (click) y 
se utiliza el m??todo preventDefault para evitar el comportamiento por defecto del bot??n.

Finalmente se aplica una animaci??n (desplazar hacia 
arriba) con el m??todo animate que recibe dos par??metros: 
el primero es la animaci??n a aplicar y el segundo la duraci??n de tal animaci??n.
*/

//FUNCION DE BOTON PARA IR HACIA ARRIBA











