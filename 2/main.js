function init(){
    const canvas = document.getElementById("JuegoCanvas");
    const ctx = canvas.getContext("2d");

    let player = {
        x: 50,
        y: 150,
        width: 30,
        height: 30
    };
    
    function pintarJugador(){
        ctx.fillStyle = "red";
        ctx.fillRect(player.x, player.y, player.width, player.height);
    }

    pintarJugador();
    window.addEventListener("keydown", keyDownHandler, false);
    window.addEventListener("keyup", keyUpHandler, false);
}