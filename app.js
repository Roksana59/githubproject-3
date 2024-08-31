const passwordtoggler = document.querySelector(`section .input_form .passwordtoggler`);
const inputpassword =document.querySelector(`section .input_form input`)

const passwordtogglerfun = () => {

   /*let (type) =inputpassword
  inputpassword.type = type*/
    inputpassword.type ==`password`? inputpassword.type =`text`:inputpassword.type = `password`
    inputpassword.type ==`password`? 
    passwordtoggler.innerHTML =`<i class="bi bi-eye-slash"></i>`:
    passwordtoggler.innerHTML =`<i class="bi bi-eye"></i>`
   /*if(inputpassword.type == `password`){
    inputpassword.type =`text`
      }else{
    inputpassword.type =`password`
    }*/
      
}

passwordtoggler.addEventListener(`click`,passwordtogglerfun);


const passwordtogglerBtn = () =>{
    inputpassword.value.length > 6 ?
    passwordtoggler.classList.add(`show`):
    passwordtoggler.classList.remove(`show`);
}

inputpassword.addEventListener(`keyup`,passwordtogglerBtn);



const cursor = document.querySelector(`.cursor`);
const cursorsm = document.querySelector(`.cursorsm`)

const customcursormousemove = (event) =>{
      const  {pageX: left, pageY: top} = event;

      cursor.style.top = top + `px`
      cursor.style.left = left + `px`
       cursorsm.style.top = top + `px`
      cursorsm.style.left = left + `px`
      
}


window.addEventListener (`mousemove`,customcursormousemove)