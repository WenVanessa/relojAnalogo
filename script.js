const deg = 6; // Significa 360°/60min-seg 
const horas = document.querySelector('.hora'); 
const minutos = document.querySelector('.minuto'); 
const segundos = document.querySelector('.segundo'); 

setInterval(()=>{ // Se crea una funcion para capturar el tiempo
    let tiempo = new Date(); // Va a capturar la fecha actual del sistema 

    let hr = tiempo.getHours() * 30; // Extraiga solo las horas, el 30 significa 360°/12horas 
    let min = tiempo.getMinutes() * deg; //Extraiga solo los minutos, los minutos se actualizan cada seis grados 
    let seg = tiempo.getSeconds() * deg; //Extraiga solo los segundos, los segundos se actualizan cada seis grados 

    horas.style.transform = `rotate(${(hr)+(min/12)/720}deg)`; /*Se trae todo lo que sucede en horas y en su estilo y se trae
    una tranformacion para permitir que las manesilas giren, con el rotate, que ya sabe que debe girar*/
    minutos.style.transform = `rotate(${min + seg / 60}deg)`; // La rotación de los minutos incluye el progreso de los segundos
    segundos.style.transform = `rotate(${seg}deg)`; // La rotación de los segundos



})

function calcularTiempo(){

    let tiempo = new Date();

    let hora = tiempo.getHours(); 
    let minutos = tiempo.getMinutes(); 
    let segundos = tiempo.getSeconds(); 

    hora = hora<10 ? "0" + hora : hora;
    minutos = minutos<10 ? "0" + minutos : minutos;
    segundos = segundos<10 ? "0" + segundos : segundos; 

    let pantallaReloj = hora + ':' + minutos + ':' + segundos; 
    let relojDigital = document.querySelector(".horaDigital"); 
    relojDigital.innerHTML = pantallaReloj;
}

setInterval(calcularTiempo, 1000);