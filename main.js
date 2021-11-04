const d = document;

d.addEventListener("DOMContentLoaded", e => {
    numeroJugadores();
});

let $restante1,
    $restante2,
    $restante3,
    $restante4,
    $cardText1,
    $cardText2,
    $cardText3,
    $cardText4,
    $inputTirada1,
    $inputTirada2,
    $inputTirada3,
    $inputTirada4,
    $inputAtras1,
    $inputAtras2,
    $inputAtras3,
    $inputAtras4,
    $media1,
    $media2,
    $media3,
    $media4,
    $card = d.getElementById("card");

let numeroTiradas1 = 1,
    numeroTiradas2 = 1,
    numeroTiradas3 = 1,
    numeroTiradas4 = 1,
    marcadorInicial,
    tiradas;

d.addEventListener("keypress", e => {
    if (e.key === 'Enter' && e.target.id === "input-tirada1") {
        tiradas = Number(e.target.value);
        marcadorInicial = $restante1.textContent;
        sumaTirada(marcadorInicial, tiradas, $restante1);
        marcadorInicial = $restante1.textContent;
        mediaTiradas(numeroTiradas1, $restante1, $media1)
        textoDeAyuda(marcadorInicial, 1)
        $inputTirada1.value = "";
        numeroTiradas1++;
    }
    if (e.key === 'Enter' && e.target.id === "input-tirada2") {
        tiradas = Number(e.target.value);
        marcadorInicial = $restante2.textContent;
        sumaTirada(marcadorInicial, tiradas, $restante2);
        marcadorInicial = $restante2.textContent;
        mediaTiradas(numeroTiradas2, $restante2, $media2)
        textoDeAyuda(marcadorInicial, 2)
        $inputTirada2.value = "";
        numeroTiradas2++;
    }
    if (e.key === 'Enter' && e.target.id === "input-tirada3") {
        tiradas = Number(e.target.value);
        marcadorInicial = $restante3.textContent;
        sumaTirada(marcadorInicial, tiradas, $restante3);
        marcadorInicial = $restante3.textContent;
        mediaTiradas(numeroTiradas3, $restante3, $media3)
        textoDeAyuda(marcadorInicial, 3)
        $inputTirada3.value = "";
        numeroTiradas3++;
    }
    if (e.key === 'Enter' && e.target.id === "input-tirada4") {
        tiradas = Number(e.target.value);
        marcadorInicial = $restante4.textContent;
        sumaTirada(marcadorInicial, tiradas, $restante4);
        marcadorInicial = $restante4.textContent;
        mediaTiradas(numeroTiradas4, $restante4, $media4)
        textoDeAyuda(marcadorInicial, 4)
        $inputTirada4.value = "";
        numeroTiradas4++;
    }
});

function sumaTirada(marcadorInicial, tirada, id) {
    return id.textContent = marcadorInicial - tirada;
}

function mediaTiradas(Ntiradas, id, media) {
    if (Ntiradas == undefined) Ntiradas = 1;
    let m = ((501 - id.textContent) / Ntiradas).toFixed(1);
    media.textContent = m;
    return m;
}

function numeroJugadores() {
    d.addEventListener("change", e => {
        if (!e.target.matches(".form-select")) return;
        for (let jugadores = 1; jugadores <= e.target.value; jugadores++) {
            let cardTextCenter = d.createElement("div");
            $card.appendChild(cardTextCenter);
            cardTextCenter.classList.add("card", "text-center");
            let cardBody = d.createElement("div");
            cardBody.classList.add("card-body");
            cardTextCenter.appendChild(cardBody);
            let cardTitle = d.createElement("h2");
            cardTitle.classList.add("card-title");
            cardTitle.textContent = `Jugador ${jugadores}`
            cardBody.appendChild(cardTitle);
            let restante = d.createElement("h3");
            restante.classList.add("restante");
            restante.id = `restante${jugadores}`;
            restante.textContent = 501;
            cardBody.appendChild(restante);
            $restante1 = d.getElementById("restante1");
            $restante2 = d.getElementById("restante2");
            $restante3 = d.getElementById("restante3");
            $restante4 = d.getElementById("restante4");
            let parrafo = d.createElement("p");
            parrafo.classList.add("card-text");
            parrafo.id = `card-text${jugadores}`;
            parrafo.textContent = "Vamos a comenzar."
            cardBody.appendChild(parrafo);
            $cardText1 = d.getElementById("card-text1");
            $cardText2 = d.getElementById("card-text2");
            $cardText3 = d.getElementById("card-text3");
            $cardText4 = d.getElementById("card-text4");
            let input = d.createElement("input");
            input.classList.add("text-center");
            input.id = `input-tirada${jugadores}`;
            input.type = "text";
            input.setAttribute("autocomplete", "off");
            cardBody.appendChild(input);
            $inputTirada1 = d.getElementById("input-tirada1");
            $inputTirada2 = d.getElementById("input-tirada2");
            $inputTirada3 = d.getElementById("input-tirada3");
            $inputTirada4 = d.getElementById("input-tirada4");
            let laMedia = d.createElement("h4");
            laMedia.classList.add("card-text", "text-muted", "media");
            laMedia.id = `media${jugadores}`;
            laMedia.textContent = 0;
            cardBody.appendChild(laMedia);
            $media1 = d.getElementById("media1");
            $media2 = d.getElementById("media2");
            $media3 = d.getElementById("media3");
            $media4 = d.getElementById("media4");
        }
        d.querySelector(".form-select").style.display = "none";
    });

}

function textoDeAyuda(paraCerrar, id) {
    switch (Number(paraCerrar)) {
        case 170:
            if (id === 1) {
                $cardText1.innerHTML = "TRIPLE 20 + TRIPLE 20 + BULL";
            } else if (id === 2) {
                $cardText2.innerHTML = "TRIPLE 20 + TRIPLE 20 + BULL";
            } else if (id === 3) {
                $cardText3.innerHTML = "TRIPLE 20 + TRIPLE 20 + BULL";
            } else {
                $cardText4.innerHTML = "TRIPLE 20 + TRIPLE 20 + BULL";
            }

            break;
        case 167:

            if (id === 1) {
                $cardText1.innerHTML = "TRIPLE 20 + TRIPLE 19 + BULL";

            } else if (id === 2) {
                $cardText2.innerHTML = "TRIPLE 20 + TRIPLE 19 + BULL";

            } else if (id === 3) {
                $cardText3.innerHTML = "TRIPLE 20 + TRIPLE 19 + BULL";

            } else {
                $cardText4.innerHTML = "TRIPLE 20 + TRIPLE 19 + BULL";

            }

            break;
        case 164:

            if (id === 1) {
                $cardText1.innerHTML = "TRIPLE 20 + TRIPLE 18 + BULL";

            } else if (id === 2) {
                $cardText2.innerHTML = "TRIPLE 20 + TRIPLE 18 + BULL";

            } else if (id === 3) {
                $cardText3.innerHTML = "TRIPLE 20 + TRIPLE 18 + BULL";

            } else {
                $cardText4.innerHTML = "TRIPLE 20 + TRIPLE 18 + BULL";

            }

            break;
        case 160:

            if (id === 1) {
                $cardText1.innerHTML = "TRIPLE 20 + TRIPLE 20 + DOBLE 20";

            } else if (id === 2) {
                $cardText2.innerHTML = "TRIPLE 20 + TRIPLE 20 + DOBLE 20";

            } else if (id === 3) {
                $cardText3.innerHTML = "TRIPLE 20 + TRIPLE 20 + DOBLE 20";

            } else {
                $cardText4.innerHTML = "TRIPLE 20 + TRIPLE 20 + DOBLE 20";

            }

            break;
        case 158:

            if (id === 1) {
                $cardText1.innerHTML = "TRIPLE 20 + TRIPLE 20 + DOBLE 19";

            } else if (id === 2) {
                $cardText2.innerHTML = "TRIPLE 20 + TRIPLE 20 + DOBLE 19";

            } else if (id === 3) {
                $cardText3.innerHTML = "TRIPLE 20 + TRIPLE 20 + DOBLE 19";

            } else {
                $cardText4.innerHTML = "TRIPLE 20 + TRIPLE 20 + DOBLE 19";

            }

            break;
        case 157:

            if (id === 1) {
                $cardText1.innerHTML = "TRIPLE 19 + TRIPLE 20 + DOBLE 20";

            } else if (id === 2) {
                $cardText2.innerHTML = "TRIPLE 19 + TRIPLE 20 + DOBLE 20";

            } else if (id === 3) {
                $cardText3.innerHTML = "TRIPLE 19 + TRIPLE 20 + DOBLE 20";

            } else {
                $cardText4.innerHTML = "TRIPLE 19 + TRIPLE 20 + DOBLE 20";

            }

            break;
        case 156:

            if (id === 1) {
                $cardText1.innerHTML = "TRIPLE 19 + TRIPLE 20 + DOBLE 18";

            } else if (id === 2) {
                $cardText2.innerHTML = "TRIPLE 19 + TRIPLE 20 + DOBLE 18";

            } else if (id === 3) {
                $cardText3.innerHTML = "TRIPLE 19 + TRIPLE 20 + DOBLE 18";

            } else {
                $cardText4.innerHTML = "TRIPLE 19 + TRIPLE 20 + DOBLE 18";

            }

            break;
        case 155:

            if (id === 1) {
                $cardText1.innerHTML = "TRIPLE 20 + TRIPLE 19 + DOBLE 19";

            } else if (id === 2) {
                $cardText2.innerHTML = "TRIPLE 20 + TRIPLE 19 + DOBLE 19";

            } else if (id === 3) {
                $cardText3.innerHTML = "TRIPLE 20 + TRIPLE 19 + DOBLE 19";

            } else {
                $cardText4.innerHTML = "TRIPLE 20 + TRIPLE 19 + DOBLE 19";

            }

            break;
        case 154:

            if (id === 1) {
                $cardText1.innerHTML = "TRIPLE 19 + TRIPLE 19 + DOBLE 20";

            } else if (id === 2) {
                $cardText2.innerHTML = "TRIPLE 19 + TRIPLE 19 + DOBLE 20";

            } else if (id === 3) {
                $cardText3.innerHTML = "TRIPLE 19 + TRIPLE 19 + DOBLE 20";

            } else {
                $cardText4.innerHTML = "TRIPLE 19 + TRIPLE 19 + DOBLE 20";

            }

            break;
        case 153:

            if (id === 1) {
                $cardText1.innerHTML = "TRIPLE 20 + TRIPLE 19 + DOBLE 18";

            } else if (id === 2) {
                $cardText2.innerHTML = "TRIPLE 20 + TRIPLE 19 + DOBLE 18";

            } else if (id === 3) {
                $cardText3.innerHTML = "TRIPLE 20 + TRIPLE 19 + DOBLE 18";

            } else {
                $cardText4.innerHTML = "TRIPLE 20 + TRIPLE 19 + DOBLE 18";

            }

            break;
        case 152:

            if (id === 1) {
                $cardText1.innerHTML = "TRIPLE 20 + TRIPLE 20 + DOBLE 16";

            } else if (id === 2) {
                $cardText2.innerHTML = "TRIPLE 20 + TRIPLE 20 + DOBLE 16";

            } else if (id === 3) {
                $cardText3.innerHTML = "TRIPLE 20 + TRIPLE 20 + DOBLE 16";

            } else {
                $cardText4.innerHTML = "TRIPLE 20 + TRIPLE 20 + DOBLE 16";

            }

            break;
        case 151:

            if (id === 1) {
                $cardText1.innerHTML = "TRIPLE 20 + TRIPLE 17 + DOBLE 20";

            } else if (id === 2) {
                $cardText2.innerHTML = "TRIPLE 20 + TRIPLE 17 + DOBLE 20";

            } else if (id === 3) {
                $cardText3.innerHTML = "TRIPLE 20 + TRIPLE 17 + DOBLE 20";

            } else {
                $cardText4.innerHTML = "TRIPLE 20 + TRIPLE 17 + DOBLE 20";

            }

            break;
        case 150:

            if (id === 1) {
                $cardText1.innerHTML = "TRIPLE 20 + TRIPLE 20 + DOBLE 15";

            } else if (id === 2) {
                $cardText2.innerHTML = "TRIPLE 20 + TRIPLE 20 + DOBLE 15";

            } else if (id === 3) {
                $cardText3.innerHTML = "TRIPLE 20 + TRIPLE 20 + DOBLE 15";

            } else {
                $cardText4.innerHTML = "TRIPLE 20 + TRIPLE 20 + DOBLE 15";

            }

            break;
        case 149:

            if (id === 1) {
                $cardText1.innerHTML = "TRIPLE 20 + TRIPLE 19 + DOBLE 16";

            } else if (id === 2) {
                $cardText2.innerHTML = "TRIPLE 20 + TRIPLE 19 + DOBLE 16";

            } else if (id === 3) {
                $cardText3.innerHTML = "TRIPLE 20 + TRIPLE 19 + DOBLE 16";

            } else {
                $cardText4.innerHTML = "TRIPLE 20 + TRIPLE 19 + DOBLE 16";

            }

            break;
        case 148:

            if (id === 1) {
                $cardText1.innerHTML = "TRIPLE 20 + TRIPLE 20 + DOBLE 14";

            } else if (id === 2) {
                $cardText2.innerHTML = "TRIPLE 20 + TRIPLE 20 + DOBLE 14";

            } else if (id === 3) {
                $cardText3.innerHTML = "TRIPLE 20 + TRIPLE 20 + DOBLE 14";

            } else {
                $cardText4.innerHTML = "TRIPLE 20 + TRIPLE 20 + DOBLE 14";

            }

            break;
        case 147:

            if (id === 1) {
                $cardText1.innerHTML = "TRIPLE 20 + TRIPLE 17 + DOBLE 18";

            } else if (id === 2) {
                $cardText2.innerHTML = "TRIPLE 20 + TRIPLE 17 + DOBLE 18";

            } else if (id === 3) {
                $cardText3.innerHTML = "TRIPLE 20 + TRIPLE 17 + DOBLE 18";

            } else {
                $cardText4.innerHTML = "TRIPLE 20 + TRIPLE 17 + DOBLE 18";

            }

            break;
        case 146:

            if (id === 1) {
                $cardText1.innerHTML = "TRIPLE 20 + TRIPLE 18 + DOBLE 16";

            } else if (id === 2) {
                $cardText2.innerHTML = "TRIPLE 20 + TRIPLE 18 + DOBLE 16";

            } else if (id === 3) {
                $cardText3.innerHTML = "TRIPLE 20 + TRIPLE 18 + DOBLE 16";

            } else {
                $cardText4.innerHTML = "TRIPLE 20 + TRIPLE 18 + DOBLE 16";

            }

            break;
        case 145:

            if (id === 1) {
                $cardText1.innerHTML = "TRIPLE 20 + TRIPLE 15 + DOBLE 20";

            } else if (id === 2) {
                $cardText2.innerHTML = "TRIPLE 20 + TRIPLE 15 + DOBLE 20";

            } else if (id === 3) {
                $cardText3.innerHTML = "TRIPLE 20 + TRIPLE 15 + DOBLE 20";

            } else {
                $cardText4.innerHTML = "TRIPLE 20 + TRIPLE 15 + DOBLE 20";

            }

            break;
        case 144:

            if (id === 1) {
                $cardText1.innerHTML = "TRIPLE 20 + TRIPLE 20 + DOBLE 12";

            } else if (id === 2) {
                $cardText2.innerHTML = "TRIPLE 20 + TRIPLE 20 + DOBLE 12";

            } else if (id === 3) {
                $cardText3.innerHTML = "TRIPLE 20 + TRIPLE 20 + DOBLE 12";

            } else {
                $cardText4.innerHTML = "TRIPLE 20 + TRIPLE 20 + DOBLE 12";

            }

            break;
        case 143:

            if (id === 1) {
                $cardText1.innerHTML = "TRIPLE 20 + TRIPLE 17 + DOBLE 16";

            } else if (id === 2) {
                $cardText2.innerHTML = "TRIPLE 20 + TRIPLE 17 + DOBLE 16";

            } else if (id === 3) {
                $cardText3.innerHTML = "TRIPLE 20 + TRIPLE 17 + DOBLE 16";

            } else {
                $cardText4.innerHTML = "TRIPLE 20 + TRIPLE 17 + DOBLE 16";

            }

            break;
        case 142:

            if (id === 1) {
                $cardText1.innerHTML = "TRIPLE 20 + TRIPLE 14 + DOBLE 20";

            } else if (id === 2) {
                $cardText2.innerHTML = "TRIPLE 20 + TRIPLE 14 + DOBLE 20";

            } else if (id === 3) {
                $cardText3.innerHTML = "TRIPLE 20 + TRIPLE 14 + DOBLE 20";

            } else {
                $cardText4.innerHTML = "TRIPLE 20 + TRIPLE 14 + DOBLE 20";

            }

            break;
        case 141:

            if (id === 1) {
                $cardText1.innerHTML = "TRIPLE 20 + TRIPLE 15 + DOBLE 18";

            } else if (id === 2) {
                $cardText2.innerHTML = "TRIPLE 20 + TRIPLE 15 + DOBLE 18";

            } else if (id === 3) {
                $cardText3.innerHTML = "TRIPLE 20 + TRIPLE 15 + DOBLE 18";

            } else {
                $cardText4.innerHTML = "TRIPLE 20 + TRIPLE 15 + DOBLE 18";

            }

            break;
        case 140:

            if (id === 1) {
                $cardText1.innerHTML = "TRIPLE 20 + TRIPLE 20 + DOBLE 10";

            } else if (id === 2) {
                $cardText2.innerHTML = "TRIPLE 20 + TRIPLE 20 + DOBLE 10";

            } else if (id === 3) {
                $cardText3.innerHTML = "TRIPLE 20 + TRIPLE 20 + DOBLE 10";

            } else {
                $cardText4.innerHTML = "TRIPLE 20 + TRIPLE 20 + DOBLE 10";

            }

            break;
        case 139:

            if (id === 1) {
                $cardText1.innerHTML = "TRIPLE 20 + TRIPLE 13 + DOBLE 20";

            } else if (id === 2) {
                $cardText2.innerHTML = "TRIPLE 20 + TRIPLE 13 + DOBLE 20";

            } else if (id === 3) {
                $cardText3.innerHTML = "TRIPLE 20 + TRIPLE 13 + DOBLE 20";

            } else {
                $cardText4.innerHTML = "TRIPLE 20 + TRIPLE 13 + DOBLE 20";

            }

            break;
        case 138:

            if (id === 1) {
                $cardText1.innerHTML = "TRIPLE 20 + TRIPLE 18 + DOBLE 12";

            } else if (id === 2) {
                $cardText2.innerHTML = "TRIPLE 20 + TRIPLE 18 + DOBLE 12";

            } else if (id === 3) {
                $cardText3.innerHTML = "TRIPLE 20 + TRIPLE 18 + DOBLE 12";

            } else {
                $cardText4.innerHTML = "TRIPLE 20 + TRIPLE 18 + DOBLE 12";

            }

            break;
        case 137:

            if (id === 1) {
                $cardText1.innerHTML = "TRIPLE 18 + TRIPLE 17 + DOBLE 16";

            } else if (id === 2) {
                $cardText2.innerHTML = "TRIPLE 18 + TRIPLE 17 + DOBLE 16";

            } else if (id === 3) {
                $cardText3.innerHTML = "TRIPLE 18 + TRIPLE 17 + DOBLE 16";

            } else {
                $cardText4.innerHTML = "TRIPLE 18 + TRIPLE 17 + DOBLE 16";

            }

            break;
        case 136:

            if (id === 1) {
                $cardText1.innerHTML = "TRIPLE 20 + TRIPLE 20 + DOBLE 8";

            } else if (id === 2) {
                $cardText2.innerHTML = "TRIPLE 20 + TRIPLE 20 + DOBLE 8";

            } else if (id === 3) {
                $cardText3.innerHTML = "TRIPLE 20 + TRIPLE 20 + DOBLE 8";

            } else {
                $cardText4.innerHTML = "TRIPLE 20 + TRIPLE 20 + DOBLE 8";

            }

            break;
        case 135:

            if (id === 1) {
                $cardText1.innerHTML = "BULL + TRIPLE 15 + DOBLE 20";

            } else if (id === 2) {
                $cardText2.innerHTML = "BULL + TRIPLE 15 + DOBLE 20";

            } else if (id === 3) {
                $cardText3.innerHTML = "BULL + TRIPLE 15 + DOBLE 20";

            } else {
                $cardText4.innerHTML = "BULL + TRIPLE 15 + DOBLE 20";

            }

            break;
        case 134:

            if (id === 1) {
                $cardText1.innerHTML = "TRIPLE 20 + TRIPLE 14 + DOBLE 16";

            } else if (id === 2) {
                $cardText2.innerHTML = "TRIPLE 20 + TRIPLE 14 + DOBLE 16";

            } else if (id === 3) {
                $cardText3.innerHTML = "TRIPLE 20 + TRIPLE 14 + DOBLE 16";

            } else {
                $cardText4.innerHTML = "TRIPLE 20 + TRIPLE 14 + DOBLE 16";

            }

            break;
        case 133:

            if (id === 1) {
                $cardText1.innerHTML = "TRIPLE 20 + TRIPLE 19 + DOBLE 8";

            } else if (id === 2) {
                $cardText2.innerHTML = "TRIPLE 20 + TRIPLE 19 + DOBLE 8";

            } else if (id === 3) {
                $cardText3.innerHTML = "TRIPLE 20 + TRIPLE 19 + DOBLE 8";

            } else {
                $cardText4.innerHTML = "TRIPLE 20 + TRIPLE 19 + DOBLE 8";

            }

            break;
        case 132:

            if (id === 1) {
                $cardText1.innerHTML = "TRIPLE 20 + TRIPLE 16 + DOBLE 12";

            } else if (id === 2) {
                $cardText2.innerHTML = "TRIPLE 20 + TRIPLE 16 + DOBLE 12";

            } else if (id === 3) {
                $cardText3.innerHTML = "TRIPLE 20 + TRIPLE 16 + DOBLE 12";

            } else {
                $cardText4.innerHTML = "TRIPLE 20 + TRIPLE 16 + DOBLE 12";

            }

            break;
        case 131:

            if (id === 1) {
                $cardText1.innerHTML = "TRIPLE 20 + TRIPLE 13 + DOBLE 16";

            } else if (id === 2) {
                $cardText2.innerHTML = "TRIPLE 20 + TRIPLE 13 + DOBLE 16";

            } else if (id === 3) {
                $cardText3.innerHTML = "TRIPLE 20 + TRIPLE 13 + DOBLE 16";

            } else {
                $cardText4.innerHTML = "TRIPLE 20 + TRIPLE 13 + DOBLE 16";

            }

            break;
        case 130:

            if (id === 1) {
                $cardText1.innerHTML = "TRIPLE 20 + TRIPLE 18 + DOBLE 8";

            } else if (id === 2) {
                $cardText2.innerHTML = "TRIPLE 20 + TRIPLE 18 + DOBLE 8";

            } else if (id === 3) {
                $cardText3.innerHTML = "TRIPLE 20 + TRIPLE 18 + DOBLE 8";

            } else {
                $cardText4.innerHTML = "TRIPLE 20 + TRIPLE 18 + DOBLE 8";

            }

            break;
        case 129:

            if (id === 1) {
                $cardText1.innerHTML = "TRIPLE 19 + TRIPLE 16 + DOBLE 12";

            } else if (id === 2) {
                $cardText2.innerHTML = "TRIPLE 19 + TRIPLE 16 + DOBLE 12";

            } else if (id === 3) {
                $cardText3.innerHTML = "TRIPLE 19 + TRIPLE 16 + DOBLE 12";

            } else {
                $cardText4.innerHTML = "TRIPLE 19 + TRIPLE 16 + DOBLE 12";

            }

            break;
        case 128:

            if (id === 1) {
                $cardText1.innerHTML = "TRIPLE 18 + TRIPLE 18 + DOBLE 10";

            } else if (id === 2) {
                $cardText2.innerHTML = "TRIPLE 18 + TRIPLE 18 + DOBLE 10";

            } else if (id === 3) {
                $cardText3.innerHTML = "TRIPLE 18 + TRIPLE 18 + DOBLE 10";

            } else {
                $cardText4.innerHTML = "TRIPLE 18 + TRIPLE 18 + DOBLE 10";

            }

            break;
        case 127:

            if (id === 1) {
                $cardText1.innerHTML = "TRIPLE 20 + TRIPLE 17 + DOBLE 8";

            } else if (id === 2) {
                $cardText2.innerHTML = "TRIPLE 20 + TRIPLE 17 + DOBLE 8";

            } else if (id === 3) {
                $cardText3.innerHTML = "TRIPLE 20 + TRIPLE 17 + DOBLE 8";

            } else {
                $cardText4.innerHTML = "TRIPLE 20 + TRIPLE 17 + DOBLE 8";

            }

            break;
        case 126:

            if (id === 1) {
                $cardText1.innerHTML = "TRIPLE 19 + 19 + BULL";

            } else if (id === 2) {
                $cardText2.innerHTML = "TRIPLE 19 + 19 + BULL";

            } else if (id === 3) {
                $cardText3.innerHTML = "TRIPLE 19 + 19 + BULL";

            } else {
                $cardText4.innerHTML = "TRIPLE 19 + 19 + BULL";

            }

            break;
        case 125:

            if (id === 1) {
                $cardText1.innerHTML = "TRIPLE 18 + TRIPLE 13 + DOBLE 16";

            } else if (id === 2) {
                $cardText2.innerHTML = "TRIPLE 18 + TRIPLE 13 + DOBLE 16";

            } else if (id === 3) {
                $cardText3.innerHTML = "TRIPLE 18 + TRIPLE 13 + DOBLE 16";

            } else {
                $cardText4.innerHTML = "TRIPLE 18 + TRIPLE 13 + DOBLE 16";

            }

            break;
        case 124:

            if (id === 1) {
                $cardText1.innerHTML = "TRIPLE 20 + TRIPLE 16 + DOBLE 8";

            } else if (id === 2) {
                $cardText2.innerHTML = "TRIPLE 20 + TRIPLE 16 + DOBLE 8";

            } else if (id === 3) {
                $cardText3.innerHTML = "TRIPLE 20 + TRIPLE 16 + DOBLE 8";

            } else {
                $cardText4.innerHTML = "TRIPLE 20 + TRIPLE 16 + DOBLE 8";

            }

            break;
        case 123:

            if (id === 1) {
                $cardText1.innerHTML = "TRIPLE 19 + 16 + BULL";

            } else if (id === 2) {
                $cardText2.innerHTML = "TRIPLE 19 + 16 + BULL";

            } else if (id === 3) {
                $cardText3.innerHTML = "TRIPLE 19 + 16 + BULL";

            } else {
                $cardText4.innerHTML = "TRIPLE 19 + 16 + BULL";

            }

            break;
        case 122:

            if (id === 1) {
                $cardText1.innerHTML = "TRIPLE 18 + 18 + BULL";

            } else if (id === 2) {
                $cardText2.innerHTML = "TRIPLE 18 + 18 + BULL";

            } else if (id === 3) {
                $cardText3.innerHTML = "TRIPLE 18 + 18 + BULL";

            } else {
                $cardText4.innerHTML = "TRIPLE 18 + 18 + BULL";

            }

            break;
        case 121:

            if (id === 1) {
                $cardText1.innerHTML = "TRIPLE 20 + 11 + BULL";

            } else if (id === 2) {
                $cardText2.innerHTML = "TRIPLE 20 + 11 + BULL";

            } else if (id === 3) {
                $cardText3.innerHTML = "TRIPLE 20 + 11 + BULL";

            } else {
                $cardText4.innerHTML = "TRIPLE 20 + 11 + BULL";

            }

            break;
        case 120:

            if (id === 1) {
                $cardText1.innerHTML = "TRIPLE 20 + 20 + DOBLE 20";

            } else if (id === 2) {
                $cardText2.innerHTML = "TRIPLE 20 + 20 + DOBLE 20";

            } else if (id === 3) {
                $cardText3.innerHTML = "TRIPLE 20 + 20 + DOBLE 20";

            } else {
                $cardText4.innerHTML = "TRIPLE 20 + 20 + DOBLE 20";

            }

            break;
        case 119:

            if (id === 1) {
                $cardText1.innerHTML = "TRIPLE 19 + 12 + BULL";

            } else if (id === 2) {
                $cardText2.innerHTML = "TRIPLE 19 + 12 + BULL";

            } else if (id === 3) {
                $cardText3.innerHTML = "TRIPLE 19 + 12 + BULL";

            } else {
                $cardText4.innerHTML = "TRIPLE 19 + 12 + BULL";

            }

            break;
        case 118:

            if (id === 1) {
                $cardText1.innerHTML = "TRIPLE 20 + 18 + DOBLE 20";

            } else if (id === 2) {
                $cardText2.innerHTML = "TRIPLE 20 + 18 + DOBLE 20";

            } else if (id === 3) {
                $cardText3.innerHTML = "TRIPLE 20 + 18 + DOBLE 20";

            } else {
                $cardText4.innerHTML = "TRIPLE 20 + 18 + DOBLE 20";

            }

            break;
        case 117:

            if (id === 1) {
                $cardText1.innerHTML = "TRIPLE 20 + 17 + DOBLE 20";

            } else if (id === 2) {
                $cardText2.innerHTML = "TRIPLE 20 + 17 + DOBLE 20";

            } else if (id === 3) {
                $cardText3.innerHTML = "TRIPLE 20 + 17 + DOBLE 20";

            } else {
                $cardText4.innerHTML = "TRIPLE 20 + 17 + DOBLE 20";

            }

            break;
        case 116:

            if (id === 1) {
                $cardText1.innerHTML = "TRIPLE 19 + 19 + DOBLE 20";

            } else if (id === 2) {
                $cardText2.innerHTML = "TRIPLE 19 + 19 + DOBLE 20";

            } else if (id === 3) {
                $cardText3.innerHTML = "TRIPLE 19 + 19 + DOBLE 20";

            } else {
                $cardText4.innerHTML = "TRIPLE 19 + 19 + DOBLE 20";

            }

            break;
        case 115:

            if (id === 1) {
                $cardText1.innerHTML = "TRIPLE 20 + 15 + DOBLE 20";

            } else if (id === 2) {
                $cardText2.innerHTML = "TRIPLE 20 + 15 + DOBLE 20";

            } else if (id === 3) {
                $cardText3.innerHTML = "TRIPLE 20 + 15 + DOBLE 20";

            } else {
                $cardText4.innerHTML = "TRIPLE 20 + 15 + DOBLE 20";

            }

            break;
        case 114:

            if (id === 1) {
                $cardText1.innerHTML = "TRIPLE 20 + 14 + DOBLE 20";

            } else if (id === 2) {
                $cardText2.innerHTML = "TRIPLE 20 + 14 + DOBLE 20";

            } else if (id === 3) {
                $cardText3.innerHTML = "TRIPLE 20 + 14 + DOBLE 20";

            } else {
                $cardText4.innerHTML = "TRIPLE 20 + 14 + DOBLE 20";

            }

            break;
        case 113:

            if (id === 1) {
                $cardText1.innerHTML = "TRIPLE 20 + 13 + DOBLE 20";

            } else if (id === 2) {
                $cardText2.innerHTML = "TRIPLE 20 + 13 + DOBLE 20";

            } else if (id === 3) {
                $cardText3.innerHTML = "TRIPLE 20 + 13 + DOBLE 20";

            } else {
                $cardText4.innerHTML = "TRIPLE 20 + 13 + DOBLE 20";

            }

            break;
        case 112:

            if (id === 1) {
                $cardText1.innerHTML = "TRIPLE 20 + 20 + DOBLE 16";

            } else if (id === 2) {
                $cardText2.innerHTML = "TRIPLE 20 + 20 + DOBLE 16";

            } else if (id === 3) {
                $cardText3.innerHTML = "TRIPLE 20 + 20 + DOBLE 16";

            } else {
                $cardText4.innerHTML = "TRIPLE 20 + 20 + DOBLE 16";

            }

            break;
        case 111:

            if (id === 1) {
                $cardText1.innerHTML = "TRIPLE 20 + 19 + DOBLE 16";

            } else if (id === 2) {
                $cardText2.innerHTML = "TRIPLE 20 + 19 + DOBLE 16";

            } else if (id === 3) {
                $cardText3.innerHTML = "TRIPLE 20 + 19 + DOBLE 16";

            } else {
                $cardText4.innerHTML = "TRIPLE 20 + 19 + DOBLE 16";

            }

            break;
        case 110:

            if (id === 1) {
                $cardText1.innerHTML = "TRIPLE 20 + 10 + DOBLE 20";

            } else if (id === 2) {
                $cardText2.innerHTML = "TRIPLE 20 + 10 + DOBLE 20";

            } else if (id === 3) {
                $cardText3.innerHTML = "TRIPLE 20 + 10 + DOBLE 20";

            } else {
                $cardText4.innerHTML = "TRIPLE 20 + 10 + DOBLE 20";

            }

            break;
        case 109:

            if (id === 1) {
                $cardText1.innerHTML = "TRIPLE 19 + 12 + DOBLE 20";

            } else if (id === 2) {
                $cardText2.innerHTML = "TRIPLE 19 + 12 + DOBLE 20";

            } else if (id === 3) {
                $cardText3.innerHTML = "TRIPLE 19 + 12 + DOBLE 20";

            } else {
                $cardText4.innerHTML = "TRIPLE 19 + 12 + DOBLE 20";

            }

            break;
        case 108:

            if (id === 1) {
                $cardText1.innerHTML = "TRIPLE 19 + 19 + DOBLE 60";

            } else if (id === 2) {
                $cardText2.innerHTML = "TRIPLE 19 + 19 + DOBLE 60";

            } else if (id === 3) {
                $cardText3.innerHTML = "TRIPLE 19 + 19 + DOBLE 60";

            } else {
                $cardText4.innerHTML = "TRIPLE 19 + 19 + DOBLE 60";

            }

            break;
        case 107:

            if (id === 1) {
                $cardText1.innerHTML = "TRIPLE 19 + 10 + DOBLE 20";

            } else if (id === 2) {
                $cardText2.innerHTML = "TRIPLE 19 + 10 + DOBLE 20";

            } else if (id === 3) {
                $cardText3.innerHTML = "TRIPLE 19 + 10 + DOBLE 20";

            } else {
                $cardText4.innerHTML = "TRIPLE 19 + 10 + DOBLE 20";

            }

            break;
        case 106:

            if (id === 1) {
                $cardText1.innerHTML = "TRIPLE 20 + 10 + DOBLE 18";

            } else if (id === 2) {
                $cardText2.innerHTML = "TRIPLE 20 + 10 + DOBLE 18";

            } else if (id === 3) {
                $cardText3.innerHTML = "TRIPLE 20 + 10 + DOBLE 18";

            } else {
                $cardText4.innerHTML = "TRIPLE 20 + 10 + DOBLE 18";

            }

            break;
        case 105:

            if (id === 1) {
                $cardText1.innerHTML = "TRIPLE 20 + 13 + DOBLE 16";

            } else if (id === 2) {
                $cardText2.innerHTML = "TRIPLE 20 + 13 + DOBLE 16";

            } else if (id === 3) {
                $cardText3.innerHTML = "TRIPLE 20 + 13 + DOBLE 16";

            } else {
                $cardText4.innerHTML = "TRIPLE 20 + 13 + DOBLE 16";

            }

            break;
        case 104:

            if (id === 1) {
                $cardText1.innerHTML = "TRIPLE 18 + 18 + DOBLE 16";

            } else if (id === 2) {
                $cardText2.innerHTML = "TRIPLE 18 + 18 + DOBLE 16";

            } else if (id === 3) {
                $cardText3.innerHTML = "TRIPLE 18 + 18 + DOBLE 16";

            } else {
                $cardText4.innerHTML = "TRIPLE 18 + 18 + DOBLE 16";

            }

            break;
        case 103:

            if (id === 1) {
                $cardText1.innerHTML = "TRIPLE 19 + 10 + DOBLE 18";

            } else if (id === 2) {
                $cardText2.innerHTML = "TRIPLE 19 + 10 + DOBLE 18";

            } else if (id === 3) {
                $cardText3.innerHTML = "TRIPLE 19 + 10 + DOBLE 18";

            } else {
                $cardText4.innerHTML = "TRIPLE 19 + 10 + DOBLE 18";

            }

            break;
        case 102:

            if (id === 1) {
                $cardText1.innerHTML = "TRIPLE 20 + 10 + DOBLE 16";

            } else if (id === 2) {
                $cardText2.innerHTML = "TRIPLE 20 + 10 + DOBLE 16";

            } else if (id === 3) {
                $cardText3.innerHTML = "TRIPLE 20 + 10 + DOBLE 16";

            } else {
                $cardText4.innerHTML = "TRIPLE 20 + 10 + DOBLE 16";

            }

            break;
        case 101:

            if (id === 1) {
                $cardText1.innerHTML = "TRIPLE 17 + 10 + DOBLE 20";

            } else if (id === 2) {
                $cardText2.innerHTML = "TRIPLE 17 + 10 + DOBLE 20";

            } else if (id === 3) {
                $cardText3.innerHTML = "TRIPLE 17 + 10 + DOBLE 20";

            } else {
                $cardText4.innerHTML = "TRIPLE 17 + 10 + DOBLE 20";

            }

            break;
        case 100:

            if (id === 1) {
                $cardText1.innerHTML = "TRIPLE 20 + DOBLE 20";

            } else if (id === 2) {
                $cardText2.innerHTML = "TRIPLE 20 + DOBLE 20";

            } else if (id === 3) {
                $cardText3.innerHTML = "TRIPLE 20 + DOBLE 20";

            } else {
                $cardText4.innerHTML = "TRIPLE 20 + DOBLE 20";

            }

            break;
        case 99:

            if (id === 1) {
                $cardText1.innerHTML = "TRIPLE 19 + 10 + DOBLE 16";

            } else if (id === 2) {
                $cardText2.innerHTML = "TRIPLE 19 + 10 + DOBLE 16";

            } else if (id === 3) {
                $cardText3.innerHTML = "TRIPLE 19 + 10 + DOBLE 16";

            } else {
                $cardText4.innerHTML = "TRIPLE 19 + 10 + DOBLE 16";

            }

            break;
        case 98:

            if (id === 1) {
                $cardText1.innerHTML = "TRIPLE 20 + DOBLE 19";

            } else if (id === 2) {
                $cardText2.innerHTML = "TRIPLE 20 + DOBLE 19";

            } else if (id === 3) {
                $cardText3.innerHTML = "TRIPLE 20 + DOBLE 19";

            } else {
                $cardText4.innerHTML = "TRIPLE 20 + DOBLE 19";

            }

            break;
        case 97:

            if (id === 1) {
                $cardText1.innerHTML = "TRIPLE 19 + DOBLE 20";

            } else if (id === 2) {
                $cardText2.innerHTML = "TRIPLE 19 + DOBLE 20";

            } else if (id === 3) {
                $cardText3.innerHTML = "TRIPLE 19 + DOBLE 20";

            } else {
                $cardText4.innerHTML = "TRIPLE 19 + DOBLE 20";

            }

            break;
        case 96:

            if (id === 1) {
                $cardText1.innerHTML = "TRIPLE 20 + DOBLE 18";

            } else if (id === 2) {
                $cardText2.innerHTML = "TRIPLE 20 + DOBLE 18";

            } else if (id === 3) {
                $cardText3.innerHTML = "TRIPLE 20 + DOBLE 18";

            } else {
                $cardText4.innerHTML = "TRIPLE 20 + DOBLE 18";

            }

            break;
        case 95:

            if (id === 1) {
                $cardText1.innerHTML = "TRIPLE 19 + DOBLE 19";

            } else if (id === 2) {
                $cardText2.innerHTML = "TRIPLE 19 + DOBLE 19";

            } else if (id === 3) {
                $cardText3.innerHTML = "TRIPLE 19 + DOBLE 19";

            } else {
                $cardText4.innerHTML = "TRIPLE 19 + DOBLE 19";

            }

            break;
        case 94:

            if (id === 1) {
                $cardText1.innerHTML = "TRIPLE 18 + DOBLE 20";

            } else if (id === 2) {
                $cardText2.innerHTML = "TRIPLE 18 + DOBLE 20";

            } else if (id === 3) {
                $cardText3.innerHTML = "TRIPLE 18 + DOBLE 20";

            } else {
                $cardText4.innerHTML = "TRIPLE 18 + DOBLE 20";

            }

            break;
        case 93:

            if (id === 1) {
                $cardText1.innerHTML = "TRIPLE 19 + DOBLE 18";

            } else if (id === 2) {
                $cardText2.innerHTML = "TRIPLE 19 + DOBLE 18";

            } else if (id === 3) {
                $cardText3.innerHTML = "TRIPLE 19 + DOBLE 18";

            } else {
                $cardText4.innerHTML = "TRIPLE 19 + DOBLE 18";

            }

            break;
        case 92:

            if (id === 1) {
                $cardText1.innerHTML = "TRIPLE 20 + DOBLE 16";

            } else if (id === 2) {
                $cardText2.innerHTML = "TRIPLE 20 + DOBLE 16";

            } else if (id === 3) {
                $cardText3.innerHTML = "TRIPLE 20 + DOBLE 16";

            } else {
                $cardText4.innerHTML = "TRIPLE 20 + DOBLE 16";

            }

            break;
        case 91:

            if (id === 1) {
                $cardText1.innerHTML = "TRIPLE 17 + DOBLE 20";

            } else if (id === 2) {
                $cardText2.innerHTML = "TRIPLE 17 + DOBLE 20";

            } else if (id === 3) {
                $cardText3.innerHTML = "TRIPLE 17 + DOBLE 20";

            } else {
                $cardText4.innerHTML = "TRIPLE 17 + DOBLE 20";

            }

            break;
        case 90:

            if (id === 1) {
                $cardText1.innerHTML = "TRIPLE 18 + DOBLE 18";

            } else if (id === 2) {
                $cardText2.innerHTML = "TRIPLE 18 + DOBLE 18";

            } else if (id === 3) {
                $cardText3.innerHTML = "TRIPLE 18 + DOBLE 18";

            } else {
                $cardText4.innerHTML = "TRIPLE 18 + DOBLE 18";

            }

            break;
        case 89:

            if (id === 1) {
                $cardText1.innerHTML = "TRIPLE 19 + DOBLE 16";

            } else if (id === 2) {
                $cardText2.innerHTML = "TRIPLE 19 + DOBLE 16";

            } else if (id === 3) {
                $cardText3.innerHTML = "TRIPLE 19 + DOBLE 16";

            } else {
                $cardText4.innerHTML = "TRIPLE 19 + DOBLE 16";

            }

            break;
        case 88:

            if (id === 1) {
                $cardText1.innerHTML = "TRIPLE 20 + DOBLE 14";

            } else if (id === 2) {
                $cardText2.innerHTML = "TRIPLE 20 + DOBLE 14";

            } else if (id === 3) {
                $cardText3.innerHTML = "TRIPLE 20 + DOBLE 14";

            } else {
                $cardText4.innerHTML = "TRIPLE 20 + DOBLE 14";

            }

            break;
        case 87:

            if (id === 1) {
                $cardText1.innerHTML = "TRIPLE 17 + DOBLE 18";

            } else if (id === 2) {
                $cardText2.innerHTML = "TRIPLE 17 + DOBLE 18";

            } else if (id === 3) {
                $cardText3.innerHTML = "TRIPLE 17 + DOBLE 18";

            } else {
                $cardText4.innerHTML = "TRIPLE 17 + DOBLE 18";

            }

            break;
        case 86:

            if (id === 1) {
                $cardText1.innerHTML = "TRIPLE 18 + DOBLE 16";

            } else if (id === 2) {
                $cardText2.innerHTML = "TRIPLE 18 + DOBLE 16";

            } else if (id === 3) {
                $cardText3.innerHTML = "TRIPLE 18 + DOBLE 16";

            } else {
                $cardText4.innerHTML = "TRIPLE 18 + DOBLE 16";

            }

            break;
        case 85:

            if (id === 1) {
                $cardText1.innerHTML = "TRIPLE 15 + DOBLE 20";

            } else if (id === 2) {
                $cardText2.innerHTML = "TRIPLE 15 + DOBLE 20";

            } else if (id === 3) {
                $cardText3.innerHTML = "TRIPLE 15 + DOBLE 20";

            } else {
                $cardText4.innerHTML = "TRIPLE 15 + DOBLE 20";

            }

            break;
        case 84:

            if (id === 1) {
                $cardText1.innerHTML = "TRIPLE 20 + DOBLE 12";

            } else if (id === 2) {
                $cardText2.innerHTML = "TRIPLE 20 + DOBLE 12";

            } else if (id === 3) {
                $cardText3.innerHTML = "TRIPLE 20 + DOBLE 12";

            } else {
                $cardText4.innerHTML = "TRIPLE 20 + DOBLE 12";

            }

            break;
        case 83:

            if (id === 1) {
                $cardText1.innerHTML = "TRIPLE 17 + DOBLE 16";

            } else if (id === 2) {
                $cardText2.innerHTML = "TRIPLE 17 + DOBLE 16";

            } else if (id === 3) {
                $cardText3.innerHTML = "TRIPLE 17 + DOBLE 16";

            } else {
                $cardText4.innerHTML = "TRIPLE 17 + DOBLE 16";

            }

            break;
        case 82:

            if (id === 1) {
                $cardText1.innerHTML = "BULL + DOBLE 16";

            } else if (id === 2) {
                $cardText2.innerHTML = "BULL + DOBLE 16";

            } else if (id === 3) {
                $cardText3.innerHTML = "BULL + DOBLE 16";

            } else {
                $cardText4.innerHTML = "BULL + DOBLE 16";

            }

            break;
        case 81:

            if (id === 1) {
                $cardText1.innerHTML = "TRIPLE 15 + DOBLE 18";

            } else if (id === 2) {
                $cardText2.innerHTML = "TRIPLE 15 + DOBLE 18";

            } else if (id === 3) {
                $cardText3.innerHTML = "TRIPLE 15 + DOBLE 18";

            } else {
                $cardText4.innerHTML = "TRIPLE 15 + DOBLE 18";

            }

            break;
        case 80:

            if (id === 1) {
                $cardText1.innerHTML = "TRIPLE 20 + DOBLE 10";

            } else if (id === 2) {
                $cardText2.innerHTML = "TRIPLE 20 + DOBLE 10";

            } else if (id === 3) {
                $cardText3.innerHTML = "TRIPLE 20 + DOBLE 10";

            } else {
                $cardText4.innerHTML = "TRIPLE 20 + DOBLE 10";

            }

            break;
        case 79:

            if (id === 1) {
                $cardText1.innerHTML = "TRIPLE 19 + DOBLE 11";

            } else if (id === 2) {
                $cardText2.innerHTML = "TRIPLE 19 + DOBLE 11";

            } else if (id === 3) {
                $cardText3.innerHTML = "TRIPLE 19 + DOBLE 11";

            } else {
                $cardText4.innerHTML = "TRIPLE 19 + DOBLE 11";

            }

            break;
        case 78:

            if (id === 1) {
                $cardText1.innerHTML = "TRIPLE 18 + DOBLE 12";

            } else if (id === 2) {
                $cardText2.innerHTML = "TRIPLE 18 + DOBLE 12";

            } else if (id === 3) {
                $cardText3.innerHTML = "TRIPLE 18 + DOBLE 12";

            } else {
                $cardText4.innerHTML = "TRIPLE 18 + DOBLE 12";

            }

            break;
        case 77:

            if (id === 1) {
                $cardText1.innerHTML = "TRIPLE 19 + DOBLE 10";

            } else if (id === 2) {
                $cardText2.innerHTML = "TRIPLE 19 + DOBLE 10";

            } else if (id === 3) {
                $cardText3.innerHTML = "TRIPLE 19 + DOBLE 10";

            } else {
                $cardText4.innerHTML = "TRIPLE 19 + DOBLE 10";

            }

            break;
        case 76:

            if (id === 1) {
                $cardText1.innerHTML = "TRIPLE 20 + DOBLE 8";

            } else if (id === 2) {
                $cardText2.innerHTML = "TRIPLE 20 + DOBLE 8";

            } else if (id === 3) {
                $cardText3.innerHTML = "TRIPLE 20 + DOBLE 8";

            } else {
                $cardText4.innerHTML = "TRIPLE 20 + DOBLE 8";

            }

            break;
        case 75:

            if (id === 1) {
                $cardText1.innerHTML = "TRIPLE 17 + DOBLE 12";

            } else if (id === 2) {
                $cardText2.innerHTML = "TRIPLE 17 + DOBLE 12";

            } else if (id === 3) {
                $cardText3.innerHTML = "TRIPLE 17 + DOBLE 12";

            } else {
                $cardText4.innerHTML = "TRIPLE 17 + DOBLE 12";

            }

            break;
        case 74:

            if (id === 1) {
                $cardText1.innerHTML = "TRIPLE 14 + DOBLE 16";

            } else if (id === 2) {
                $cardText2.innerHTML = "TRIPLE 14 + DOBLE 16";

            } else if (id === 3) {
                $cardText3.innerHTML = "TRIPLE 14 + DOBLE 16";

            } else {
                $cardText4.innerHTML = "TRIPLE 14 + DOBLE 16";

            }

            break;
        case 73:

            if (id === 1) {
                $cardText1.innerHTML = "TRIPLE 19 + DOBLE 8";

            } else if (id === 2) {
                $cardText2.innerHTML = "TRIPLE 19 + DOBLE 8";

            } else if (id === 3) {
                $cardText3.innerHTML = "TRIPLE 19 + DOBLE 8";

            } else {
                $cardText4.innerHTML = "TRIPLE 19 + DOBLE 8";

            }

            break;
        case 72:

            if (id === 1) {
                $cardText1.innerHTML = "TRIPLE 16 + DOBLE 12";

            } else if (id === 2) {
                $cardText2.innerHTML = "TRIPLE 16 + DOBLE 12";

            } else if (id === 3) {
                $cardText3.innerHTML = "TRIPLE 16 + DOBLE 12";

            } else {
                $cardText4.innerHTML = "TRIPLE 16 + DOBLE 12";

            }

            break;
        case 71:

            if (id === 1) {
                $cardText1.innerHTML = "TRIPLE 13 + DOBLE 16";

            } else if (id === 2) {
                $cardText2.innerHTML = "TRIPLE 13 + DOBLE 16";

            } else if (id === 3) {
                $cardText3.innerHTML = "TRIPLE 13 + DOBLE 16";

            } else {
                $cardText4.innerHTML = "TRIPLE 13 + DOBLE 16";

            }

            break;
        case 70:

            if (id === 1) {
                $cardText1.innerHTML = "TRIPLE 18 + DOBLE 8";

            } else if (id === 2) {
                $cardText2.innerHTML = "TRIPLE 18 + DOBLE 8";

            } else if (id === 3) {
                $cardText3.innerHTML = "TRIPLE 18 + DOBLE 8";

            } else {
                $cardText4.innerHTML = "TRIPLE 18 + DOBLE 8";

            }

            break;
        case 69:

            if (id === 1) {
                $cardText1.innerHTML = "TRIPLE 19 + DOBLE 6";

            } else if (id === 2) {
                $cardText2.innerHTML = "TRIPLE 19 + DOBLE 6";

            } else if (id === 3) {
                $cardText3.innerHTML = "TRIPLE 19 + DOBLE 6";

            } else {
                $cardText4.innerHTML = "TRIPLE 19 + DOBLE 6";

            }

            break;
        case 68:

            if (id === 1) {
                $cardText1.innerHTML = "TRIPLE 20 + DOBLE 4";

            } else if (id === 2) {
                $cardText2.innerHTML = "TRIPLE 20 + DOBLE 4";

            } else if (id === 3) {
                $cardText3.innerHTML = "TRIPLE 20 + DOBLE 4";

            } else {
                $cardText4.innerHTML = "TRIPLE 20 + DOBLE 4";

            }

            break;
        case 67:

            if (id === 1) {
                $cardText1.innerHTML = "TRIPLE 17 + DOBLE 8";

            } else if (id === 2) {
                $cardText2.innerHTML = "TRIPLE 17 + DOBLE 8";

            } else if (id === 3) {
                $cardText3.innerHTML = "TRIPLE 17 + DOBLE 8";

            } else {
                $cardText4.innerHTML = "TRIPLE 17 + DOBLE 8";

            }

            break;
        case 66:

            if (id === 1) {
                $cardText1.innerHTML = "TRIPLE 10 + DOBLE 18";

            } else if (id === 2) {
                $cardText2.innerHTML = "TRIPLE 10 + DOBLE 18";

            } else if (id === 3) {
                $cardText3.innerHTML = "TRIPLE 10 + DOBLE 18";

            } else {
                $cardText4.innerHTML = "TRIPLE 10 + DOBLE 18";

            }

            break;
        case 65:

            if (id === 1) {
                $cardText1.innerHTML = "DIANA + DOBLE 20";

            } else if (id === 2) {
                $cardText2.innerHTML = "DIANA + DOBLE 20";

            } else if (id === 3) {
                $cardText3.innerHTML = "DIANA + DOBLE 20";

            } else {
                $cardText4.innerHTML = "DIANA + DOBLE 20";

            }

            break;
        case 64:

            if (id === 1) {
                $cardText1.innerHTML = "TRIPLE 16 + DOBLE 8";

            } else if (id === 2) {
                $cardText2.innerHTML = "TRIPLE 16 + DOBLE 8";

            } else if (id === 3) {
                $cardText3.innerHTML = "TRIPLE 16 + DOBLE 8";

            } else {
                $cardText4.innerHTML = "TRIPLE 16 + DOBLE 8";

            }

            break;
        case 63:

            if (id === 1) {
                $cardText1.innerHTML = "TRIPLE 17 + DOBLE 6";

            } else if (id === 2) {
                $cardText2.innerHTML = "TRIPLE 17 + DOBLE 6";

            } else if (id === 3) {
                $cardText3.innerHTML = "TRIPLE 17 + DOBLE 6";

            } else {
                $cardText4.innerHTML = "TRIPLE 17 + DOBLE 6";

            }

            break;
        case 62:

            if (id === 1) {
                $cardText1.innerHTML = "TRIPLE 10 + DOBLE 16";

            } else if (id === 2) {
                $cardText2.innerHTML = "TRIPLE 10 + DOBLE 16";

            } else if (id === 3) {
                $cardText3.innerHTML = "TRIPLE 10 + DOBLE 16";

            } else {
                $cardText4.innerHTML = "TRIPLE 10 + DOBLE 16";

            }

            break;
        case 61:

            if (id === 1) {
                $cardText1.innerHTML = "TRIPLE 15 + DOBLE 8";

            } else if (id === 2) {
                $cardText2.innerHTML = "TRIPLE 15 + DOBLE 8";

            } else if (id === 3) {
                $cardText3.innerHTML = "TRIPLE 15 + DOBLE 8";

            } else {
                $cardText4.innerHTML = "TRIPLE 15 + DOBLE 8";

            }

            break;
        case 60:

            if (id === 1) {
                $cardText1.innerHTML = "20 + DOBLE 20";

            } else if (id === 2) {
                $cardText2.innerHTML = "20 + DOBLE 20";

            } else if (id === 3) {
                $cardText3.innerHTML = "20 + DOBLE 20";

            } else {
                $cardText4.innerHTML = "20 + DOBLE 20";

            }

            break;
        case 59:

            if (id === 1) {
                $cardText1.innerHTML = "19 + DOBLE 20";

            } else if (id === 2) {
                $cardText2.innerHTML = "19 + DOBLE 20";

            } else if (id === 3) {
                $cardText3.innerHTML = "19 + DOBLE 20";

            } else {
                $cardText4.innerHTML = "19 + DOBLE 20";

            }

            break;
        case 58:

            if (id === 1) {
                $cardText1.innerHTML = "18 + DOBLE 20";

            } else if (id === 2) {
                $cardText2.innerHTML = "18 + DOBLE 20";

            } else if (id === 3) {
                $cardText3.innerHTML = "18 + DOBLE 20";

            } else {
                $cardText4.innerHTML = "18 + DOBLE 20";

            }

            break;
        case 57:

            if (id === 1) {
                $cardText1.innerHTML = "17 + DOBLE 20";

            } else if (id === 2) {
                $cardText2.innerHTML = "17 + DOBLE 20";

            } else if (id === 3) {
                $cardText3.innerHTML = "17 + DOBLE 20";

            } else {
                $cardText4.innerHTML = "17 + DOBLE 20";

            }

            break;
        case 56:

            if (id === 1) {
                $cardText1.innerHTML = "16 + DOBLE 20";

            } else if (id === 2) {
                $cardText2.innerHTML = "16 + DOBLE 20";

            } else if (id === 3) {
                $cardText3.innerHTML = "16 + DOBLE 20";

            } else {
                $cardText4.innerHTML = "16 + DOBLE 20";

            }

            break;
        case 55:

            if (id === 1) {
                $cardText1.innerHTML = "15 + DOBLE 20";

            } else if (id === 2) {
                $cardText2.innerHTML = "15 + DOBLE 20";

            } else if (id === 3) {
                $cardText3.innerHTML = "15 + DOBLE 20";

            } else {
                $cardText4.innerHTML = "15 + DOBLE 20";

            }

            break;
        case 54:

            if (id === 1) {
                $cardText1.innerHTML = "14 + DOBLE 20";

            } else if (id === 2) {
                $cardText2.innerHTML = "14 + DOBLE 20";

            } else if (id === 3) {
                $cardText3.innerHTML = "14 + DOBLE 20";

            } else {
                $cardText4.innerHTML = "14 + DOBLE 20";

            }

            break;
        case 53:

            if (id === 1) {
                $cardText1.innerHTML = "13 + DOBLE 20";

            } else if (id === 2) {
                $cardText2.innerHTML = "13 + DOBLE 20";

            } else if (id === 3) {
                $cardText3.innerHTML = "13 + DOBLE 20";

            } else {
                $cardText4.innerHTML = "13 + DOBLE 20";

            }

            break;
        case 52:

            if (id === 1) {
                $cardText1.innerHTML = "12 + DOBLE 20";

            } else if (id === 2) {
                $cardText2.innerHTML = "12 + DOBLE 20";

            } else if (id === 3) {
                $cardText3.innerHTML = "12 + DOBLE 20";

            } else {
                $cardText4.innerHTML = "12 + DOBLE 20";

            }

            break;
        case 51:

            if (id === 1) {
                $cardText1.innerHTML = "11 + DOBLE 20";

            } else if (id === 2) {
                $cardText2.innerHTML = "11 + DOBLE 20";

            } else if (id === 3) {
                $cardText3.innerHTML = "11 + DOBLE 20";

            } else {
                $cardText4.innerHTML = "11 + DOBLE 20";

            }

            break;
        case 50:

            if (id === 1) {
                $cardText1.innerHTML = "10 + DOBLE 20";

            } else if (id === 2) {
                $cardText2.innerHTML = "10 + DOBLE 20";

            } else if (id === 3) {
                $cardText3.innerHTML = "10 + DOBLE 20";

            } else {
                $cardText4.innerHTML = "10 + DOBLE 20";

            }

            break;
        case 49:

            if (id === 1) {
                $cardText1.innerHTML = "9 + DOBLE 20";

            } else if (id === 2) {
                $cardText2.innerHTML = "9 + DOBLE 20";

            } else if (id === 3) {
                $cardText3.innerHTML = "9 + DOBLE 20";

            } else {
                $cardText4.innerHTML = "9 + DOBLE 20";

            }

            break;
        case 48:

            if (id === 1) {
                $cardText1.innerHTML = "16 + DOBLE 16";

            } else if (id === 2) {
                $cardText2.innerHTML = "16 + DOBLE 16";

            } else if (id === 3) {
                $cardText3.innerHTML = "16 + DOBLE 16";

            } else {
                $cardText4.innerHTML = "16 + DOBLE 16";

            }

            break;
        case 47:

            if (id === 1) {
                $cardText1.innerHTML = "15 + DOBLE 16";

            } else if (id === 2) {
                $cardText2.innerHTML = "15 + DOBLE 16";

            } else if (id === 3) {
                $cardText3.innerHTML = "15 + DOBLE 16";

            } else {
                $cardText4.innerHTML = "15 + DOBLE 16";

            }

            break;
        case 46:

            if (id === 1) {
                $cardText1.innerHTML = "6 + DOBLE 20";

            } else if (id === 2) {
                $cardText2.innerHTML = "6 + DOBLE 20";

            } else if (id === 3) {
                $cardText3.innerHTML = "6 + DOBLE 20";

            } else {
                $cardText4.innerHTML = "6 + DOBLE 20";

            }

            break;
        case 45:

            if (id === 1) {
                $cardText1.innerHTML = "13 + DOBLE 16";

            } else if (id === 2) {
                $cardText2.innerHTML = "13 + DOBLE 16";

            } else if (id === 3) {
                $cardText3.innerHTML = "13 + DOBLE 16";

            } else {
                $cardText4.innerHTML = "13 + DOBLE 16";

            }

            break;
        case 44:

            if (id === 1) {
                $cardText1.innerHTML = "12 + DOBLE 16";

            } else if (id === 2) {
                $cardText2.innerHTML = "12 + DOBLE 16";

            } else if (id === 3) {
                $cardText3.innerHTML = "12 + DOBLE 16";

            } else {
                $cardText4.innerHTML = "12 + DOBLE 16";

            }

            break;
        case 43:

            if (id === 1) {
                $cardText1.innerHTML = "3 + DOBLE 20";

            } else if (id === 2) {
                $cardText2.innerHTML = "3 + DOBLE 20";

            } else if (id === 3) {
                $cardText3.innerHTML = "3 + DOBLE 20";

            } else {
                $cardText4.innerHTML = "3 + DOBLE 20";

            }

            break;
        case 42:

            if (id === 1) {
                $cardText1.innerHTML = "10 + DOBLE 16";

            } else if (id === 2) {
                $cardText2.innerHTML = "10 + DOBLE 16";

            } else if (id === 3) {
                $cardText3.innerHTML = "10 + DOBLE 16";

            } else {
                $cardText4.innerHTML = "10 + DOBLE 16";

            }

            break;
        case 41:

            if (id === 1) {
                $cardText1.innerHTML = "9 + DOBLE 16";

            } else if (id === 2) {
                $cardText2.innerHTML = "9 + DOBLE 16";

            } else if (id === 3) {
                $cardText3.innerHTML = "9 + DOBLE 16";

            } else {
                $cardText4.innerHTML = "9 + DOBLE 16";

            }

            break;
        case 40:

            if (id === 1) {
                $cardText1.innerHTML = "SUMA TU COJONES!!!";

            } else if (id === 2) {
                $cardText2.innerHTML = "SUMA TU COJONES!!!";

            } else if (id === 3) {
                $cardText3.innerHTML = "SUMA TU COJONES!!!";

            } else {
                $cardText4.innerHTML = "SUMA TU COJONES!!!";

            }

            break;
        default:
            break;
    }

    if (paraCerrar < 40) {


        if (id === 1) {
            $cardText1.innerHTML = "SUMA TU COJONES!!!";

        } else if (id === 2) {
            $cardText2.innerHTML = "SUMA TU COJONES!!!";

        } else if (id === 3) {
            $cardText3.innerHTML = "SUMA TU COJONES!!!";

        } else {
            $cardText4.innerHTML = "SUMA TU COJONES!!!";

        }

    }
}



// **********************************************

let contenedor = d.querySelector(".curso2");

let indice = 0;

function animacion(frase) {
    if (indice === 0) {
        for (let i = 0; i < frase.length; i++) {
            span = d.createElement("span");
            span.append(frase[i]);
            contenedor.appendChild(span);
        }
    } else {
        spanLleno = d.querySelectorAll("span");
        spanLleno[indice - 1].classList.remove("rojo");
        spanLleno[indice].classList.add("rojo");
    }
    indice++;
    if (indice == frase.length) indice = 1;
}

setInterval('animacion(" Diana ")', 1000);