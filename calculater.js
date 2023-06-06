var text=document.getElementById('values');

var ac=document.getElementById('ac');
ac.addEventListener('click', function(){
    text.innerHTML='';
})

var divide=document.getElementById('divide');
divide.addEventListener('click', function(){
    if(text.innerHTML.length<25){
    text.innerHTML=text.innerHTML+'/';
    console.log(text.innerHTML.length)
    }else{
        alert('You have entered the maximum digits!!');
    }
});

document.body.addEventListener('keydown', function(e){
    var keys=e.key;
    var keyCode=e.keyCode;
    if(keys=='/' || keys=='%' && text.innerHTML.length<25){
        text.innerHTML=text.innerHTML+'/'
    }
    if(keys=='*' && text.innerHTML.length<25){
        text.innerHTML=text.innerHTML+'*'
    }
    if(keyCode===8){
        var dele=text.innerHTML.split('');
        var me=dele.length-1;
        dele.splice(me, 1);
        var my=dele.join('')
        text.innerHTML=my;   
    }
    if(keys==1 && text.innerHTML.length<25){
        text.innerHTML=text.innerHTML+'1';
    }
    if(keys==2 && text.innerHTML.length<25){
        text.innerHTML=text.innerHTML+'2';
    }
    if(keys==3 && text.innerHTML.length<25){
        text.innerHTML=text.innerHTML+'3';
    }
    if(keys==4 && text.innerHTML.length<25){
        text.innerHTML=text.innerHTML+'4';
    }
    if(keys==5 && text.innerHTML.length<25){
        text.innerHTML=text.innerHTML+'5';
    }
    if(keys==6 && text.innerHTML.length<25){
        text.innerHTML=text.innerHTML+'6';
    }
    if(keys==7 && text.innerHTML.length<25){
        text.innerHTML=text.innerHTML+'7';
    }
    if(keys==8 && text.innerHTML.length<25){
        text.innerHTML=text.innerHTML+'8';
    }
    if(keys==9 && text.innerHTML.length<25){
        text.innerHTML=text.innerHTML+'9';
    }
    if(keys==0 && text.innerHTML.length<25){
        text.innerHTML=text.innerHTML+'0';
    }
    if(keys=='+' && text.innerHTML.length<25){
        text.innerHTML=text.innerHTML+'+';
    }
    if(keys=='-' && text.innerHTML.length<25){
        text.innerHTML=text.innerHTML+'-';
    }
    if(keys=='=' || keyCode===13 && text.innerHTML.length<25){
        text.innerHTML=eval(text.innerHTML);
    }
    if(keys=='.' && text.innerHTML.length<25){
        text.innerHTML=text.innerHTML+'.';
    }
    if(keys=='(' && text.innerHTML.length<25){
        text.innerHTML=text.innerHTML+'(';
    }
    if(keys==')'){
        text.innerHTML=text.innerHTML+')';
    }
    if(keys=='Delete'){
        text.innerHTML='';
    }
});

var mul=document.getElementById('mul');
mul.addEventListener('click', function(){
    if(text.innerHTML.length<25){
    text.innerHTML=text.innerHTML+'*';
    }else{
        alert('You have entered the maximum digits!!')
    }
})

var del=document.getElementById('delete');
del.addEventListener('click', function(){
    var dele=text.innerHTML.split('');
    var me=dele.length-1;
    dele.splice(me, 1);
    var my=dele.join('')
    text.innerHTML=my;
})

var one=document.getElementById('one');
one.addEventListener('click', function(){
    if(text.innerHTML.length<25){
    text.innerHTML=text.innerHTML+'1';
    }else{
        alert('You have entered the maximum digits!!')
    }
})

var two=document.getElementById('two');
two.addEventListener('click', function(){
    if(text.innerHTML.length<25){
    text.innerHTML=text.innerHTML+'2';
    }else{
        alert('You have entered the maximum digits!!')
    }
})

var three=document.getElementById('three');
three.addEventListener('click', function(){
    if(text.innerHTML.length<25){
    text.innerHTML=text.innerHTML+'3';
    }else{
        alert('You have entered the maximum digits!!')
    }
})

var plus=document.getElementById('plus');
plus.addEventListener('click', function(){
    if(text.innerHTML.length<25){
    text.innerHTML=text.innerHTML+'+';
    }else{
        alert('You have entered the maximum digits!!')
    }
})

var four=document.getElementById('four');
four.addEventListener('click', function(){
    if(text.innerHTML.length<25){
    text.innerHTML=text.innerHTML+'4';
    }else{
        alert('You have entered the maximum digits!!')
    }
})

var five=document.getElementById('five');
five.addEventListener('click', function(){
    if(text.innerHTML.length<25){
    text.innerHTML=text.innerHTML+'5';
    }else{
        alert('You have entered the maximum digits!!')
    }
})

var six=document.getElementById('six');
six.addEventListener('click', function(){
    if(text.innerHTML.length<25){
    text.innerHTML=text.innerHTML+'6';
    }else{
        alert('You have entered the maximum digits!!')
    }
})

var minus=document.getElementById('minus');
minus.addEventListener('click', function(){
    if(text.innerHTML.length<25){
    text.innerHTML=text.innerHTML+'-';
    }else{
        alert('You have entered the maximum digits!!')
    }
})

var seven=document.getElementById('seven');
seven.addEventListener('click', function(){
    if(text.innerHTML.length<25){
    text.innerHTML=text.innerHTML+'7';
    }else{
        alert('You have entered the maximum digits!!')
    }
})

var eight=document.getElementById('eight');
eight.addEventListener('click', function(){
    if(text.innerHTML.length<25){
    text.innerHTML=text.innerHTML+'8';
    }else{
        alert('You have entered the maximum digits!!')
    }
})

var nine=document.getElementById('nine');
nine.addEventListener('click', function(){
    if(text.innerHTML.length<25){
    text.innerHTML=text.innerHTML+'9';
    }else{
        alert('You have entered the maximum digits!!')
    }
})

var equal=document.getElementById('equal');
equal.addEventListener('click', function(){
    text.innerHTML=eval(text.innerHTML);
})

var dot=document.getElementById('dot');
dot.addEventListener('click', function(){
    if(text.innerHTML.length<25){
    text.innerHTML=text.innerHTML+'.';
    }else{
        alert('You have entered the maximum digits!!')
    }
})

var zero=document.getElementById('zero');
zero.addEventListener('click', function(){
    if(text.innerHTML.length<25){
    text.innerHTML=text.innerHTML+'0';
    }else{
        alert('You have entered the maximum digits!!')
    }
})

var openB=document.getElementById('(');
openB.addEventListener('click', function(){
    if(text.innerHTML.length<25){
    text.innerHTML=text.innerHTML+'(';
    }else{
        alert('You have entered the maximum digits!!')
    }
})

var closeB=document.getElementById(')');
closeB.addEventListener('click', function(){
    if(text.innerHTML.length<25){
    text.innerHTML=text.innerHTML+')';
    }else{
        alert('You have entered the maximum digits!!')
    }
})