var objetos = []
var model_status = ""
function modelloaded() {
    console.log("modelo carregado")
    model_status = true

}
function gotresults(error,results) {
    if(error){
    console.log(error)}
    else{
    console.log(results)
    objetos = results
}}
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
    if (model_status != "") {
        detector_objetos.detect(video,gotresults)
        document.getElementById("status").innerHTML= "objetos detectados"
        document.getElementById("numeroobjetos").innerHTML = "numero de objtos detectados" + objetos.length
        for (i = 0; i < objetos.length; i++) {
            text(objetos[i].label,objetos[i].x,objetos[i].y)
            fill("#008000")
            noFill()
            stroke("#008000")
            rect(objetos[i].x,objetos[i].y,objetos[i].width,objetos[i].height)
            
        }
    }
}
function start() {
    detector_objetos = ml5.objectDetector('cocossd',modelloaded)
    document.getElementById("status").innerHTML = "comecou a detecao"
    console.log("start")
}