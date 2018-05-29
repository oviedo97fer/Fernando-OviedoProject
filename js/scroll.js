//marcadores
var marcador1 = document.getElementById('m1');
var marcador2 = document.getElementById('m2');
var marcador3 = document.getElementById('m3');
var marcador4 = document.getElementById('m4');
//Array marcadores
var marcadores1 = [marcador2,marcador3,marcador4];
var marcadores2 = [marcador1,marcador3,marcador4];
var marcadores3 = [marcador1,marcador2,marcador4];
var marcadores4 = [marcador1,marcador3,marcador2];

//paginas
var page1 = document.getElementById("page1");
var page2 = document.getElementById("page2");
var page3 = document.getElementById("page3");
var page4 = document.getElementById("page4");
//arrays pages
var pages1 = [page2,page3,page4];
var pages2 = [page1,page3,page4];
var pages3 = [page1,page2,page4];
var pages4 = [page1,page2,page3];

function seeMarker(m, o){
    m.classList.add('mostrar');
    m.classList.remove('ocultar');
    for(var i=0;i<o.length;i++){
        o[i].classList.add('ocultar');;
       // console.log('se agrego'+ i); //devtool
    }
}

function seePage(m, o){
    m.classList.add('see-page');
    
    for(var i=0;i<o.length;i++){
        o[i].classList.add('unsee-page');
       // console.log('se agrego'+ i); //devtool
        o[i].classList.remove('see-page');
        //console.log('se quito'+ i);  //devtool
    }
}

var right = document.getElementById('right');
$(right).ready(function() {
//$('#aviso').hide(0);
page2.classList.add('unsee-page');
page3.classList.add('unsee-page');
page4.classList.add('unsee-page');

		$(right).scroll(function(){


				var windowHeight = $(right).scrollTop();
				var banner2 = $("#banner2").offset();
                var banner3 = $("#banner3").offset();
                var banner4 = $("#banner4").offset();
				banner2 = banner2.top+(banner2.top)/2;
                banner3 = banner3.top+(banner3.top);
                banner4 = (banner4.top)*4;
            
                
				if(windowHeight <= banner2){
					
                   // console.log('hola'); //development
                    seeMarker(marcador1,marcadores1);
                    //mostrar page1    
                    seePage(page1,pages1);
					//$('#aviso').fadeIn(500);

				}
                else if(windowHeight > banner2 && windowHeight < banner3){
                    //console.log('banner2');//development
                    seeMarker(marcador2,marcadores2);
                    //mostrar page2
                    seePage(page2,pages2);
                }
                else if(windowHeight > banner3 && windowHeight < banner4){
                    //console.log('banner3');//development
                   seeMarker(marcador3,marcadores3);
                    
                    //mostrar page3
                    seePage(page3,pages3);
                    
                }
                else if(windowHeight > banner4){
                   // console.log('banner4');//development
                    seeMarker(marcador4,marcadores4);
                    //mostrar page4
                    seePage(page4,pages4);
                }
            

		});

});