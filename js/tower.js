// CARGAR EL ARCHIVO EN EL INDEX
//CUARTO CREAR CLASE TORRE Y HACER PREGUNTAS 
class Tower{
    constructor(x,y,width,height){
        var options={
            isStatic:true
        };
        //OCTAVO CARGAR IMAGEN DE LA TORRE
        this.image=loadImage("assets/tower.png")
        this.x=x;
        this.y=y;
        this.width=width;
        this.height=height;
        this.body=Bodies.rectangle(x,y,this.width,this.height,options)
        World.add(world,this.body)

    }
    //QUINTO CREAR FUNCIÓN PARA MOSTRAR EL OBJETO EN EL SKETCH
    display(){
        var pos =this.body.position;
        push ()
        translate(pos.x,pos.y );
    // NOVENO CAMBIAR RECTMODE Y RECT POR IMAGE 
       // rectMode(CENTER);
        imageMode(CENTER);
        //rect(0,0,this.width,this.height);
        image(this.image,0,0,this.width,this.height)
        pop ();
    }
}