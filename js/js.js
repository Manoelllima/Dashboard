let pesquisa = document.querySelector(".pesquisa > .icon:nth-of-type(2) > i")
let input_pesquisa = document.querySelector(".pesquisa > .icon:nth-of-type(2) > input")

input_pesquisa.addEventListener('focus',function(){input_pesquisa.classList.add('width');})
input_pesquisa.addEventListener('blur',function () {
    if(input_pesquisa.value == ''){
        input_pesquisa.classList.remove('width');
    }
})

