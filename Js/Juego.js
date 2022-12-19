var galletas=0;
var inventario=[0,0,0];
var galletasProduce=[1,2,4];//galletas por scd
var precioProducto = [100,200,400]; //produc coste


function comprar(objeto){
    if(galletas>= precioProducto[objeto]){
        inventario[objeto]++;
        galletas-= precioProducto[objeto];
    }else{
        console.log("no tienes suficientes galletas");
    }
}
function producir(){
    for(contador=0;contador<inventario.length;contador++){
        galletas += inventario[contador]*galletasProduce[contador];
    }
}

function clic(){
    galletas++;
}

function render(){
    document.getElementById("contador").innerHTML=galletas;
   document.getElementById("inventario").innerHTML=
   `Cursores: ${inventario [0]}<br>
     Abuelitas: ${inventario [1]}<br>
     Hornos: ${inventario [2]}<br>
    `;

}

var FPSProduce=1;

setInterval(function(){
    producir();
    render();
},1000/FPSProduce);

var FPS=30;
setInterval(function(){
    render();
},1000/FPS);
