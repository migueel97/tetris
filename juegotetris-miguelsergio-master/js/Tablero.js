    const FILAS = 20;
    const COLUMNAS = 10;
    const VACIO = "white";
    const SQ = squareSize = 20;

class Tablero {
        
        constructor(filas, columnas, tc, ctx) {
        // inicializa el tablero todos los elementos de color WHITE		
        this._filas = filas;
        this._columnas = columnas;
        this.tc = tc;
        this.ctx = ctx;

        this.tabla=[];

        for (let i=0;i<FILAS;i++){
            this.tabla[i] = [];
            for(let j=0;j<COLUMNAS;j++){
                this.tabla[i][j]=VACIO;
            }
        }
    }

    // Es vacio si tiene el color WHITE
    esVacio = (x, y) => {
        if(getCasilla(x, y, color)==VACIO){
            return true;
        }else{
            return false;
        }

    }

    // Dibuja un en el canvas del color recibido
    dibujarCasilla = (x, y, color) => {
        this.ctx.fillStyle = color;
        this.ctx.fillRect(x * this.tc, y * this.tc, this.tc, this.tc);
        this.ctx.strokeStyle = "BLACK";
        this.ctx.strokeRect(x * this.tc, y * this.tc, this.tc, this.tc);
    }

    // dibujar en el canvas según los colores del tablaro
    dibujarTablero = () => {
        

        for (let i=0;i<FILAS;i++){
            for(let j=0;j<COLUMNAS;j++){
                this.dibujarCasilla(j,i,this.tabla[i][j]);
            }
        }
    }

    get filas() { return this.filas;}

    set filas(fila) {this.filas=fila;}

    get columnas() {return this.columnas;}

    set columnas(columna) {this.columnas = columna;}

    //Devuelve el color del tablero en la casilla indicada
    getCasilla = (f, c) => {
        return this.tabla[f][c];
    }

    //Cambiar el color del tablero en la casilla indicada
    setCasilla = (f, c, color) => {
        ctx.fillStyle = color;
        ctx.fillRect(x * SQ, y * SQ, SQ, SQ);
        ctx.strokeStyle = "BLACK";
        ctx.strokeRect(x * SQ, y * SQ, SQ, SQ);
    }

    // Eliminamos las filas que estén completas e incrementamos la puntuación
    eliminarFilasCompletas = () => {
        for(let r = 0; r < FILAS; r++){

            let filaLlena = true;
    
            for(let c = 0; c < COLUMNAS; c++){
    
                filaLlena = filaLlena && (this.tabla[r][c] != VACIO);
    
            }
    
            if(filaLlena){
    
                for(let y = r; y > 1; y--){
    
                    for(let c = 0; c < COLUMNAS; c++){
    
                        this.tabla[y][c] = this.tabla[y-1][c];
    
                    }
    
                }
                
                for(let c = 0; c < COLUMNAS; c++){
    
                    this.tabla[0][c] = VACIO;
    
                }
    
                juego.score += 50;
            }
            document.getElementById("score").innerHTML = juego.score;
    
        }
    }

}