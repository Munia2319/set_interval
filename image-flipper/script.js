let image=['./image/open.gif','./image/closed.gif'];
const btn=document.getElementById('services');
const img=document.getElementById('img');
console.log(img);
let currentItem=0;

function flipper() {
    
    
    setInterval(function(){ 
     
        img.src=image[currentItem];
        if (currentItem>0) {
            currentItem--;
        } else {
            currentItem++;
        }
       
        console.log(currentItem);
      
     }, 5000);

     

    
};


