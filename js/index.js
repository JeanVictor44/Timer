/* 
    Pattern of writing    

    English 
    Portuguese

*/


/* Buttons for Start the Timer and Reset the Timer 
   Botões para iniciar o cronômetro e resetar o cronômetro 
*/
const start = document.getElementById('start')
const reset = document.getElementById('reset')

/* Two H1 responsabilaty for renderizing the Seconds and Minutes -> 
   Dois H1 responsáveis por renderizar os segundo e os */ 
const outputSeconds = document.getElementById('seconds')
const outputMinutes = document.getElementById('minutes')

/* Function factory*/ 
function timer(displayMinutes, displaySeconds, startButton){
    // Private Attribute -> Atributo privado 
let [seconds, minutes] = [ [0,0], [0,0] ]
function UpdateScreen(){
    displayMinutes.innerHTML = `${minutes[0]}${minutes[1]}:`
    displaySeconds.innerHTML = `${seconds[0]}${seconds[1]}`
}

return{
    pressStart(){
        if (startButton.getAttribute('id') == 'start'){
            startButton.setAttribute('id','stop')
            startButton.innerHTML = 'Stop'
        }else if (startButton.getAttribute('id') == 'stop'){
            clearInterval(interval)
            startButton.setAttribute('id','start')
            startButton.innerHTML = 'Start'
        }

        /* Logo abaixo o setInterval será atribuido ao interval para que o clearInterval possa travar a execução
        *  do setInterval
        */

        startButton.getAttribute('id') == 'stop' ? interval = setInterval(function(){
            if(seconds[1] === 9){
                seconds[0] += 1
                seconds[1] = 0
            if(seconds[0] === 6){
                if(minutes[1] === 9 ){
                    seconds[0] = 0
                    seconds[1] = 0
                    minutes[1] = 0
                    minutes[0] += 1
            }else{
                minutes[1] += 1
                seconds[0] = 0
                seconds[1] = 0
            }
             
        }}else{
            seconds[1] += 1
        }
        return UpdateScreen()
    },1000) : ''},

    pressReset(){
        seconds = [0,0]
        minutes = [0,0]
        startButton.setAttribute('id','start')
        startButton.innerHTML = 'Start'
        clearInterval(interval)
        return UpdateScreen()
    }
}
}
/*  
    Criar a interação para alterar as cores através de um checkbox igual ao projeto Facebook
*/
const tempo = timer(outputMinutes, outputSeconds, start)
start.onclick = tempo.pressStart
reset.onclick = tempo.pressReset