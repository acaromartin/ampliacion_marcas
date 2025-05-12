function init(){
    const canvas = document.getElementById('JuegoCanvas');
    const ctx = canvas.getContext('2d');

    let p1 = {
        x: 50,
        y: 150,
        w:30,
        h:60,
        paso: 5
    };
    const diana =
    {
        x: 700,
        y: 150,
        w:50,
        h:50,
        imagen: new Image(),
        es100:false,
        es50:false

    };
    let bala = null;
    let existe_bala = false;

    diana.imagen.src = "images/diana.png";

    function pintarJugador() 
    {
        ctx.fillStyle = 'red';
        ctx.fillRect(p1.x,p1.y,p1.w,p1.h);    
    }
    function pintarDiana() 
    {           
        if (diana.es100)
        {
            ctx.font = '20px Arial';
            ctx.fillStyle = 'blue';
            ctx.fillText("100 EBLB", diana.x -25, diana.y - 25);
        }
        else if ((diana.es50)&& (!diana.es100))
        {
            ctx.font = '15px Arial';
            ctx.fillStyle = 'red';
            ctx.fillText("50 EBLB", diana.x -25, diana.y - 25);              
        }
        else if ((!diana.es50) && (!diana.es100))
        {
            ctx.drawImage(diana.imagen,diana.x,diana.y,diana.w,diana.h);
        }

    }

    function pintarBala()
    {
        if (existe_bala)
        {
            bala.x = bala.x + bala.velocidad;
            
            
            ctx.fillStyle='black';
            ctx.beginPath();
            ctx.arc(bala.x ,bala.y,6,0,Math.PI*2);
            //ctx.stroke();
            ctx.fill();

            // hay colisión con diana

            // ES CENTRO ???????
            if(
                (bala.x>=diana.x+20 &&  bala.x<=diana.x+30)
                &&
                (bala.y>=diana.y +20 && bala.y <=  diana.y + 30)
            )
            {
                console.log(100);
                diana.es100=true;
            }
            else if (
                (bala.x>=diana.x && bala.x <= diana.x + diana.w)
                &&
                (bala.y>=diana.y && bala.y <= diana.y + diana.h)
            )
            {
                console.log(50);
                diana.es50=true;
            }

            

            // si nos salimos del campo que no haya bala
            if ((existe_bala) && (bala.x>canvas.width))
            {
                existe_bala=false;
            }  
        }         
    }
    //diana.imagen.onload = function (){  };

    document.addEventListener('keydown', (e) => {

        if (e.key === 'ArrowUp')
        {
            p1.y = p1.y - p1.paso;
        }
        else if (e.key === 'ArrowDown')
        {
            p1.y = p1.y + p1.paso;
        }
        else if (e.code === 'Space')
        {
            if (!existe_bala)
            {
                existe_bala=true;
                bala = {
                    x:p1.x + p1.w,
                    y:p1.y,
                    velocidad:7
                }

            }               
        }

    } );


    document.getElementById('b1').addEventListener('click',() =>
    {
        if (!existe_bala)
        {
            existe_bala=true;
            bala = {
                x:p1.x + p1.w,
                y:p1.y,
                velocidad:7
            }

        }    
    }
);

    function bucleJuego() 
    {
        ctx.clearRect (0,0,canvas.width,canvas.height);

        pintarJugador();
        pintarDiana();
        pintarBala();

        requestAnimationFrame(bucleJuego);
    }

    // Arranque el juego
    bucleJuego();
}