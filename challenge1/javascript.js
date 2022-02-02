
function agefinder(){
    var ans=prompt('enter your age please ?');
ans=ans*365;
 var chacha =document.getElementById('flexbox-result');
 var h1=document.createElement('h1');
 var text=document.createTextNode('your age is  '+ans+'  days');
 h1.appendChild(text);
 h1.setAttribute('id','result');
 chacha.appendChild(h1);}

 function reset(){
     document.getElementById('result').remove();
 }


