var elementosDuvida = document.querySelectorAll('.duvida')

elementosDuvida.forEach(function(duvida){
    duvida.addEventListener('click', function(){
       duvida.classList.toggle('ativa');
    })
})



//elementosDuvida.forEach(function(duvida){
//    duvida.addEventListener('click', function(){
//       duvida.classList.add('ativa');
//    })
//})

//function nome(argumento){
    //conteúdo da função
//}