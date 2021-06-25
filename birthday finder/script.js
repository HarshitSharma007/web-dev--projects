
const form=document.getElementById('form');



form.addEventListener('submit',(e)=>{
    e.preventDefault();
    const da=document.getElementById('day').value;
const m=document.getElementById('month').value;
let y=document.getElementById('year').value;

const t = [ 0, 3, 2, 5, 0, 3,
    5, 1, 4, 6, 2, 4 ]; 
    y -= m < 3; 
 if(y<0){
     y=0;
 }
     ans= ( y + Math.floor(y / 4) - Math.floor( y / 100) + Math.floor(y / 400) + t[m - 1] )%7 ;
        ans+=da%7;
        ans=ans%7;
        console.log(ans );
        

        day=['Sunday','Monday','Tuesday','Wednesday','Thrusday','Friday','Saturday','Sunday'];
    

       const n= document.createElement('h1');

          n.innerText="your birthday is "+day[ans];
      const res=document.getElementById('res');
      if(res.childNodes.length>0)
    res.removeChild(res.childNodes[0]);
     
      res.appendChild(n);

    
    
    }

)
        


