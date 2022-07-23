const $video = document.querySelector('#video')
const $play = document.querySelector('#play')
const $pause = document.querySelector('#pause')
const $backward = document.querySelector('#backward')
const $forward = document.querySelector('#forward')


$play.addEventListener('click', handlePlay )
$pause.addEventListener('click', handlePause )

function handlePlay(){
    $play.hidden = true
    $pause.hidden = false
    $video.play()
}

function handlePause(){
    $pause.hidden = true;
    $play.hidden = false;
    $video.pause()
}

$backward.addEventListener('click', handleBackward )
$forward.addEventListener('click', handleForward )

function handleBackward(){
    $video.currentTime -= 10
}

function handleForward(){
    $video.currentTime += 10
}

const $progress = document.querySelector('#progress')
$video.addEventListener('loadedmetadata', handleLoadedMetadata)
$video.addEventListener('timeupdate', handleTimeUpdate)

function handleLoadedMetadata(){
    $progress.max = $video.duration
}

function handleTimeUpdate(){
    $progress.value = $video.currentTime
}

$progress.addEventListener('input', handleInput)

function handleInput(){
    $video.currentTime = $progress.value
}