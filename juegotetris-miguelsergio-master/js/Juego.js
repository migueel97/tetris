class Juego {

    constructor(cvs) {
        this.ctx = cvs.getContext("2d");
        this._tablero = new Tablero(20, 10, 20, this.ctx);
        this._pieza = this.piezaAleatoria();
        this.gameOver = false;
        this._comenzarCaer = Date.now();
        this.score = 0;
        this.tiempoDif = 1000;
        this.cont = 0;
        this.nivel = 1;

    }

    // devuelve una pieza aleatoria
    piezaAleatoria = () => {
        
        let aleatorio = (Math.random() * (PIEZAS.length -1)).toFixed(0);
        return new Pieza(aleatorio, this._tablero);

    }

    get tablero() {
        return this._tablero;
    }

    get pieza() {
        return this._pieza;
    }

    set pieza(pieza) {
        this._pieza = pieza;
    }

    get comenzarCaer() {
        return this._comenzarCaer;
    }
    set comenzarCaer(comenzarCaer) {
        this._comenzarCaer = comenzarCaer;
    }
    caer = () => {
        this.cont++;
        if(this.cont==500){
            this.cont=0;
            this.tiempoDif*=0.7;
            this.nivel++;
            document.getElementById("nivel").innerHTML=this.nivel;
        }

        
        let ahora = Date.now();
        let delta = ahora - this.comenzarCaer;
        if (delta > this.tiempoDif) {
            this.pieza.moverAbajo();
            this.comenzarCaer = Date.now();
        }
        if (!this.gameOver) {
            requestAnimationFrame(this.caer);
        }
       
    }

    control = (event) => {
        if (event.keyCode == 37) {
            this.pieza.moverIzquierda();
            this.comenzarCaer = Date.now();
        } else if (event.keyCode == 38) {
            this.pieza.rotar();
            this.comenzarCaer = Date.now();
        } else if (event.keyCode == 39) {
            this.pieza.moverDerecha();
            this.comenzarCaer = Date.now();
        } else if (event.keyCode == 40) {
            this.pieza.moverAbajo();
        }
    }

}