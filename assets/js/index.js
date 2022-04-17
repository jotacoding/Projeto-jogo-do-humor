let modelo = document.querySelector(".modelo");
let legenda = document.querySelector("#legenda");

let i = 0;

function mudarImagem() {
  i++;
  if (i == 1){
    modelo.setAttribute("src", "assets/img/humor_feliz.jpg");
    legenda.setAttribute("alt", "Minha mãe feliz.");
    legenda.innerHTML = "<h2>Humor: Feliz</h2>";
  } else if (i == 2){
    modelo.setAttribute("src", "assets/img/humor_indefinido.jpeg");
    legenda.setAttribute("alt", "Minha mãe fazendo careta");
    legenda.innerHTML = "<h2>Humor: Desconhecido (ha ha ha) </h2>";
  } else if (i == 3){
    modelo.setAttribute("src", "assets/img/humor_normal.jpeg");
    legenda.setAttribute("alt", "Humor normal");
    legenda.innerHTML = "<h2>Humor: Normal</h2>";
  } else if (i == 4){
    modelo.setAttribute("src", "assets/img/humor_fome.jpeg");
    legenda.setAttribute("alt", "Minha mãe comendo");
    legenda.innerHTML = "<h2>Humor: Morta de fome</h2>"
  } else if (i == 5){
    modelo.setAttribute("src", "assets/img/humor_engraçada.jpg");
    legenda.setAttribute("alt", "Minha mãe com filtro de coelho");
    legenda.innerHTML = "<h2>Humor: Brincalhona</h2>";
  } else if (i == 6){
    modelo.setAttribute("src", "./assets/img/humor_acordei.jpeg");
    modelo.setAttribute("alt", "Minha mãe com o cabelo todo bagunçado");
    legenda.innerHTML = "<h2>Humor: 'Acordei agora'</h2>";
  }

  if (i > 5){
    i = 0; 
 
  }
}