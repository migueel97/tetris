// las piezas y sus colores
const PIEZAS = [
    [Z, "darkred"],
    [S, "lime"],
    [T, "lightseagreen"],
    [O, "orange"],
    [L, "gold"],
    [I, "chocolate"],
    [J, "deeppink"]
];

// La clase pieza
class Pieza {

    constructor(tetromino, tablero) {
        // propiedades numeroForma, tetrominioActual, posición x e y en el canvas
        this.tetromino=PIEZAS[tetromino][0];
        this.color=PIEZAS[tetromino][1];
        this.tablero=tablero;

        this.tetrominoN = 0;

        this.tetrominoActivado = this.tetromino[this.tetrominoN];


    this.x = 3;

    this.y = -2;

    }


    // rota la piezaentre las distintas formas del tetrominio
    // de debe controlar que si está muy cerca de las paredes algunas no pueden girar
    rotar = () => {

        let siguiente = this.tetromino[(this.tetrominoN + 1)%this.tetromino.length];

        let mover = 0;
    
        if(this.colision(0,0,siguiente)){
    
            if(this.x > COLUMNAS/2){
    
                mover = -1; // 
    
            }else{
    
                mover = 1;
    
            }
    
        }
    
        if(!this.colision(mover,0,siguiente)){
    
            this.borrar();
    
            this.x += mover;
    
            this.tetrominoN = (this.tetrominoN + 1)%this.tetromino.length;
    
            this.tetrominoActivado = this.tetromino[this.tetrominoN];
    
            this.dibujar();
    
        }
    }


    // rellena el tetromino de la pieza con su color en el canvas
    rellenar = (color) => {
        for(let f = 0 ; f < this.tetrominoActivado.length ; f++){
            
            for(let c = 0 ; c < this.tetrominoActivado.length ; c++){
                
                if(this.tetrominoActivado[f][c]){
                    this.tablero.dibujarCasilla(this.x+c,this.y+f,color);
                    
                }
                
            }
            
        }
    }

    // dibuja el color de una pieza
    dibujar = () => {
        this.rellenar(this.color);
    }

    // borra una pieza rellenandola de casillas blancas
    borrar = () => {
        this.rellenar(VACIO);
    }

    // mover abajo la pieza, si queda fijada, deberá obtener una nueva
    moverAbajo = () => {

        if(!this.colision(0, 1,this.tetrominoActivado)) {
            
            this.borrar();
            this.y++;
            this.dibujar();
            
        }
        
        else{
            
            this.fijar();
            
            juego._pieza = juego.piezaAleatoria();
            
        }

    }

      


    // mover derecha la pieza hasta chocar con la pared 
    moverDerecha = () => {

        if(!this.colision(1,0,this.tetrominoActivado)){
            this.borrar();
            this.x++;
            this.dibujar();
        }
    }

    // mover izquierda la pieza hasta chocar con la pared 
    moverIzquierda = () => {
        if(!this.colision(-1,0,this.tetrominoActivado)){
            this.borrar();
            this.x--;
            this.dibujar();
        }
    }

    // fijar pieza cuando choca con el suelo u otra pieza
    // hay que comprobar si se ha formado una o varias lineas para borrarlas 
    fijar = () => {
        for(let r = 0; r < this.tetrominoActivado.length; r++){

            for(let c = 0; c < this.tetrominoActivado.length; c++){

                if( !this.tetrominoActivado[r][c]){

                    continue;

                }

                if(this.y + r < 0){

                    alert("Game Over");

                    break;

                }
                this.tablero.tabla[this.y+r][this.x+c] = this.color;

            }
            this.tablero.eliminarFilasCompletas();
            this.tablero.dibujarTablero();
        
        }
        
    }

    // Comprueba si se produce una colisión de una pieza con el suelo u otra pieza 
    colision = (x, y, pieza) => {
        for(let r = 0; r < pieza.length; r++){

            for(let c = 0; c < pieza.length; c++){
    
                if(!pieza[r][c]){
    
                    continue;
    
                }
    
                let nuevaX = this.x + c + x;
    
                let nuevaY = this.y + r + y;
    
    
                if(nuevaX < 0 || nuevaX >= COLUMNAS || nuevaY >= FILAS){
    
                    return true;
    
                }
    
                if(nuevaY < 0){
    
                    continue;
    
                }
    
                if( this.tablero.getCasilla(nuevaY, nuevaX) != VACIO){
    
                    return true;
    
                }
    
            }
    
        }
    
        return false;
    }

}