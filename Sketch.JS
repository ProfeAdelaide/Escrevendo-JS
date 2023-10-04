function setup() {

    createCanvas(800, 600);
    
    background("white");
    
    }
    
    function draw() {
    
    stroke("#9C27B0");
    
    fill("rgb(0,255,238)");
    
    if(mouseIsPressed){
    
    rect(mouseX, mouseY, 20, 35);
    
    }
    
    }
    