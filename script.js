let digitalElement = document.querySelector(`.digital`);//variavel que guarda o seletor onde está aparecera as horas
let corpo = document.body//usado no if onde altera o background do documento

let sElement = document.querySelector(`.p_s`);//seleciona os campos onde se encontraram os segundos 
let mElement = document.querySelector(`.p_m`);// seleciona o campo onde se encontraram os minutos
let hElement = document.querySelector(`.p_h`);// Seleciona o campo onde se encontraram as hooras



function updateClock(){//funcao principal do programa
   let now = new Date();
   let hour = now.getHours();
   let minute = now.getMinutes();
   let seconds = now.getSeconds();

   digitalElement.innerHTML =`${fixZero(hour)}:${fixZero(minute)}:${fixZero(seconds)}`;


   let sDeg = ((360/60) * seconds) -90;// angulo conforme os segundos
   let mDeg = ((360/60) *minute) -90;
   let hDeg = ((360/12)* hour)-90;
   sElement.style.transform=`rotate(${sDeg}deg)`;//ponteiro de segundos
   mElement.style.transform=`rotate(${mDeg}deg)`;//rotacao do ponteiro de minutos
   hElement.style.transform=`rotate(${hDeg}deg)`;//alteracao no ponteiro de horas


   //alteracao do background conforme as horas
   if ((hour >= 00) &&(hour <=6)){
      corpo.style.backgroundImage="url('ceunoite.jpg')";
   }else if((hour>6)&&(hour<=12)){
      corpo.style.backgroundImage="url('sol12h.jpg')";  
   }else if((hour>12)&&(hour<18)){
      corpo.style.backgroundImage="url('soltarde.jpg')";
   }else{
      corpo.style.backgroundImage="url('dark.jpg')"
   }
   
   
}

function fixZero(time){//acrescenta o 0 no relogio quando os tempos forem <10
   if(time<10){
      return '0'+time;
   }else{
      return time;
   }
}

setInterval(updateClock,1000);//define o time de que quanto em quanto tempo a funcao vai rodar
updateClock();//atualiza a funcao apos o timer, o que deixa insta atualizacao do relogio
