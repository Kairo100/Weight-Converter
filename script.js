
const form = document.querySelector("form");

function convertingWeight(){
  
    
    const input= document.querySelector("input");
    const weightConvertor = document.querySelector("span");
    if((isNaN(input.value) || input.value<=0)){
        weightConvertor.classList.add("error");
        weightConvertor.innerHTML="<p>Please Enter Valid Number</p>";
        setTimeout(() => {
            weightConvertor.classList.remove("error");
            weightConvertor.innerHTML="";
            
        }, 2800);
        input.value="";
    }/*setTimeOut wuxuu qaadaa function iyo timeout markaas
    functionka waxad u isticmaali kartaa ()=> {}  waxay intaasi ka masuul noqonaysaa functionka iyo
                  iyo shaqadiisa                  
    */

    else {
        let kgToPound = Number(input.value)* 2.20462;
        weightConvertor.classList.add("succesful");
        weightConvertor.innerHTML=kgToPound;
        setTimeout(() => {
            weightConvertor.classList.remove("succesful");
            weightConvertor.innerHTML="";
            
        }, 1000);
        input.value="";
    }
}
/*e for sumit event 
function(e) local function
*/
form.addEventListener("submit",function(e){
    e.preventDefault();
    convertingWeight();
}
);

    
