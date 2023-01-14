let cartas = 0;
while ((cartas < 4) || (cartas > 14) && (cartas % 2 == 0)) {
    let quantidade = prompt("Com quantas cartas você quer jogar?");
    cartas = Number(quantidade);
}

//function embaralharCartas(){
//    cartasDoJogo.forEach(card => {
//        let ramdomPos = Math.floor(Math.random() * quantiaDeCartas);
//        card.style.order = ramdomPos;
//    });
//}
//embaralharCartas()