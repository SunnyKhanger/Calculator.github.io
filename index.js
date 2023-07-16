

    var btn = document.querySelectorAll('.main div')
    var input = document.querySelector('input')
var button=document.querySelector('button')
var main=document.querySelector('main')
function getvalue (X){
    input.value = input.value +X

}
function getcalculate(){
    input.value = eval(input.value)
}
function getreset(){
    input.value=''
}
function backspace(){
    input.value=input.value.substring(0,input.value.length-1)
}


button.addEventListener('click',function calculator(){
    button.style.visibility='hidden'
    main.style.visibility='visible'
})




  
