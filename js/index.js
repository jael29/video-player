 //este es el tag de javascript
        //this $ doesn't have an impact, it is a way for me to know this is a javascript variable referring to html
        
        /* it is just a naming convention. */
const $video = document.querySelector('#video')
const $play = document.querySelector('#play')
const $pause = document.querySelector('#pause')
const $backward = document.querySelector('#backward')
const $forward = document.querySelector('#forward')
        /* creamos variables constantes y les ponemos nombres ejemplo video play paus
        y el document.querySelector('#video') las guarda para ser llamadas. referiendose al id #video, #play,  #paus.
        
        */

        /* const $video = document.querySelector('#video') doing this one refers to the id="video" that # changes it to id.
         const $video = document.querySelector('video') refers to the tag <video>*/
        
$play.addEventListener('click', handlePlay)
        //this uses/adds a method to play to listen, 'click' is what is being listened to. 
        // the space after 'click', will have a function which is what we want it to do.
               
$pause.addEventListener('click', handlePause)


function handlePlay(){
    $video.play()
            /* llama a la variable video, y utiliza el metodo .play() para ejecutar la reproduccion
            */
    $play.hidden = true
    $pause.hidden = false
            //.hidden aqui es un atributo de html que en javascript sería propiedad.
            /*
            cuando se hace click en el boton play el se esconde "hidden"
            y aparece en su lugar el boton pause
            
            */

    console.log('le diste click al boton de play')

        }

function handlePause(){
    $video.pause()
    $pause.hidden = true
    $play.hidden = false
    console.log('le diste click al botón de pausa')

            /*
            cuando se hace click en el boton pause el se esconde "hidden"
            y aparece en su lugar el boton play
            
            */

        }

$backward.addEventListener('click', handleBackward)
/*aqui creamos una funcion handleBackward */

function handleBackward(){
   /*  $video.currentTime = $video.currentTime -10 */
   $video.currentTime -= 10
    
    console.log('Para atrás 10 segundos', $video.currentTime)


}

$forward.addEventListener('click', handleForward)

function handleForward(){
   /*  $video.currentTime = $video.currentTime +10  
   esto es lo mismo que poner $video.currentTime += 10*/


    $video.currentTime += 10

    console.log('Para adelante 10 segundos', $video.currentTime)


}

const $progress = document.querySelector('#progress')
$video.addEventListener('loadedmetadata', handleLoaded)
$video.addEventListener('timeupdate', handleTimeUpdate)

function handleLoaded(){
    $progress.max  = $video.duration
    console.log('ha cargado mi video', $video.duration)
}

function handleTimeUpdate(){
    $progress.value = $video.currentTime

   /* console.log('tiempo actual', $video.currentTime) */

}

$progress.addEventListener('input',handleInput )

function handleInput(){
    console.log($progress.value)
   $video.currentTime = $progress.value
}