let pesquisa = document.querySelector(".pesquisa > .icon:nth-of-type(2) > i");
let input_pesquisa = document.querySelector(".pesquisa > .icon:nth-of-type(2) > input");

let notificacao = document.querySelector('.pesquisa .icon:last-of-type > i > span')
let recado_input = document.querySelector('.w50-wrap .submit').children;
let mensagem = document.querySelector('main .container .panel .mensagens');
let mensagem_conteudo = document.querySelector('main .container .panel .mensagens .conteudo');
let close_recado = document.querySelectorAll('.conteudo ul li span');
let icon_menu = document.querySelector('.icon-mobile i')

let primeira = true;
let cont = 0;

/*ICONE DE PESQUISA*/
input_pesquisa.addEventListener('focus',function(){input_pesquisa.classList.add('width');})
input_pesquisa.addEventListener('blur',function () {
    if(input_pesquisa.value == ''){
        input_pesquisa.classList.remove('width');
    }
})

pesquisa.addEventListener('click', function(){    
    if(input_pesquisa.value == ''){
        input_pesquisa.classList.add('width');
        input_pesquisa.focus();
    }
})
/*ICONE DE PESQUISA*/

/*DEIXA RECADO*/ 
recado_input.enviar.addEventListener('click',function () {
    for(let i = 0;i < recado_input.length; i++){                
        if(recado_input[i].value != ""){
            cont++;
        }        
    }

    if(cont == 3){
        mensagem.style.display = 'block'       
        if(primeira){
            primeira = false
            mensagem_conteudo.querySelector('ul li').children.titulo.textContent = recado_input.titulo.value
            mensagem_conteudo.querySelector('ul li').children.remetente.children[0].textContent = recado_input.destinatario.value
            mensagem_conteudo.querySelector('ul li').children.mensagem.textContent = recado_input.mensagem.value    

        }else{
            mensagem_conteudo.querySelector('ul').appendChild(document.createElement('li'));
            mensagem_conteudo.querySelector('ul li:last-of-type').innerHTML =  mensagem_conteudo.querySelector('ul li:first-of-type').innerHTML
            mensagem_conteudo.querySelector('ul li:last-of-type').children.titulo.textContent = recado_input.titulo.value
            mensagem_conteudo.querySelector('ul li:last-of-type').children.remetente.children[0].textContent = recado_input.destinatario.value
            mensagem_conteudo.querySelector('ul li:last-of-type').children.mensagem.textContent = recado_input.mensagem.value;

        }        
        cont = 0       
    }

        close_recado =  mensagem_conteudo.querySelectorAll('ul li span')
    console.log(close_recado)
})

for(let i = 0; i < close_recado.length; i++){
    close_recado[i].addEventListener('click',function () {
        this.parentElement.remove()
        
    })
}

icon_menu.addEventListener('click',function(){
    let aside = document.querySelector('body aside');
    let main = document.querySelector('main')
     main.style.position = 'absolute'
    if(aside.style.width != '300px'){
        aside.style.width = '300px'
        aside.children[2].style.display = 'block'       
        main.style.left = '300px'
        main.style.paddingLeft = '0px'
    }else{
        aside.style.width = '80px'
        aside.children[2].style.display = 'none'
        main.style.left = '0px'
        main.style.paddingLeft = '80px'
    }
    
})