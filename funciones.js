//FUNCION PARA QUE APAREZCA EL ELEMENTO LENTAMENTE

$(document).ready(function(){
        
$("#aboutme").hide();

$(function(){
$(window).scroll(function(){
    if($(this).scrollTop()>146){
    $("#aboutme").fadeIn(1000); 
    } // close if
 })//close de window.scroll function
 }) //close $(function)

});//Close document ready
//CLOSE FUNCION PARA QUE APAREZCA EL ELEMENTO LENTAMENTE



//FUNCIONES PARA SWEET ALERT EN BOTON ENVIAR FORMULARIO Y BOTON DESCARGAR CURRICULUM

$(document).ready(function(){
                         
    $('#send').on('click',function(){
        Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Your message has been sent',
        showConfirmButton: false,
        timer: 1500,
        showConfirmButton:true
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
  

    