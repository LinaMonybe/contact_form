document.addEventListener('DOMContentLoaded', function() {
    var element=document.getElementsByClassName("hm");
    for(var i=0;i<element.length;i++)
{
    element[i].addEventListener('focus',function event() {
        this.style.width='300px';

    })
    element[i].addEventListener('blur',function event() {
        this.style.width='';
        if(this.value.trim()!=='')
        this.style.borderColor='#3be83e';
    else this.style.borderColor='';
    })
}

document.querySelector('button').onclick=
function (){alert('Your form is sent successfully')};})
