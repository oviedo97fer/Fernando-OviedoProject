var right = document.getElementById('right');
var marcador1 = document.getElementById('m1');
var marcador2 = document.getElementById('m2');
var marcador3 = document.getElementById('m3');
var marcador4 = document.getElementById('m4');
$(function () {

    // show hide subnav depending on scroll direction
    var position = $(right).scrollTop();

    $(right).scroll(function () {
        var scroll = $(right).scrollTop();

        if (scroll > position) {
            console.log('Down');

        } else {
            console.log('UP');
        }
        position = scroll;
    });
    
});
 









   /* var text = document.getElementById('text1');
    var text2 = document.getElementById('text2');
    
    text.classList.add('ocultar');
    text.classList.add('mostrar');
    */
/*var $win = $(window);

$win.on('scroll', function(){
   console.log('Hola') ;
});*/