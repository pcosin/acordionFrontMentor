
let acorDown = document.querySelectorAll(".pregunta");
let resp = document.querySelectorAll(".respuesta")

acorDown.forEach(item => {item.addEventListener('click',function(){

        if (this.nextElementSibling.style.maxHeight) {
                hide();   
             } else {
                show(this); 
             } 
       
        // this.nextElementSibling.classList.toggle("display");
        // this.classList.toggle("open");
       
       
})})

      function show(item) {
        hide();
        item.nextElementSibling.style.maxHeight = item.nextElementSibling.scrollHeight + "px";
      }

      function hide() {

        for(item of resp) {
        item.style.maxHeight = null
        }
     
      }      


// function hidePanels() {
//         for (let i = 0; i < resp.length; i++) {
//             resp[i].style.maxHeight = null;
//         }
//       }

     




