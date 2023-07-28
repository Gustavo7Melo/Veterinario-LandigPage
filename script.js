
var radio = document.querySelector('.manual-btn')
var cont = 1
document.getElementById ('radio1').checked = true
setInterval(() => {
    proximaImg()
}, 4000)

function proximaImg(){
    cont++
    
    if(cont > 4){
        cont = 1
    }

document.getElementById ('radio'+cont).checked = true
}
AOS.init();

//Funcão voltar ao topo//
function backToTop(){
    document.getElementById('b1').scrollTop =  600;
}