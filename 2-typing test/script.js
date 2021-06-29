
let wording;
let wording2=fetch("https://type.fit/api/quotes")
.then(function(response) {
    
    //console.log(response.json());
  return response.json();
}).then(data=>
    {   wording=data;
        //console.log(data);
    }).then( ()=>{ wording =wording.map((e)=>{
        return e.text;
     });}).catch((error) => {
        console.error('Error:', error);
      });


let startTime,endTime;
const message= document.querySelector(".message");
const playText=document.querySelector("textarea");
const button= document.querySelector("button");
let interval;
button.addEventListener("click",(e)=>{
  // console.log(e.target.innerText);
if(e.target.innerText=="Start"){
    playText.disabled=false;
    button.innerText="Done";
    playgame();
}
else if(e.target.innerText=="Done"){
   playText.disabled=true;
   button.innerText="Start";
   endPlay(); 
}
});

function endPlay(){
    let date=new Date();
    endTime=date.getTime();
    clearInterval(interval);
    let totalTime=(endTime-startTime)/1000;
  //  console.log(totalTime);
   
    let str=playText.value;
    let wc=countword(str);


    let speed =(wc/totalTime)*60;
    speed=Math.round(speed);
    answer=comp(str,document.querySelector(".message2").innerText);
let mesg="<h1>👀 you are typing at speed "+speed +" words per minute</h1>"+"<h1>"+answer+"</h1>";

message.innerHTML=mesg;



}
function comp(str1,str2){
    const words1=str1.split(" ");
    const words2=str2.split(" ");
    let c=0;
    console.log(words1);
   console.log(words2);
    words2.forEach((el,index) => {
        if(el==words1[index]){
            c++;
        }
      //  console.log(c);
      
    });
    return `👴 you have typed ${c} words correct out of ${words2.length} words`;
}


 function countword(str){
    let words=str.split(" ");

    if(words.length==1&&words[0]=="")
    return 0;
    return words.length;
 }

function playgame(){
    let date=new Date();
    startTime=date.getTime();
     interval=setInterval(stopwatch);
   let randomNum = Math.floor(Math.random()* wording.length);
   message.innerHTML="<h1>TYPE THIS 👉\" <span class=\"message2\" >"+wording[randomNum]+ "</span>\"</h1>";

   playText.value="";
}


function stopwatch(){
    let date=new Date();
    currtime=date.getTime();
    let seconds=currtime-startTime;
  
    seconds=Math.round(seconds/100);
   seconds= seconds/10;
    const time=document.getElementById("time");
    time.innerText="⏱"+seconds;

}