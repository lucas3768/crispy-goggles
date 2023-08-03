var objetos = []
var model_status = ""
function modelloaded() {
    console.log("modelo carregado")
    model_status = true
    Detectordeobjetos.detect(i,gotresults)
}
function gotresults(error,results) {
    if(error)
    console.log(error)
    else
    console.log(results)
    objetos = results
}
function preload() {
    video = createVideo("video.mp4")
}
function setup() {
    canvas = createCanvas(480,380)
canvas.center()
video.hide()
}
function draw() {
    image(video,0,0,480,380)
}
function start() {
    detector_objetos = ml5.objectDetector('cocossd',modelloaded)
    document.getElementById("status").innerHTML = "comecou a detecao"
    console.log("start")
}