import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`

:root{ //variaveis de estilização
  --background: #f8f2f5;
  --red:#E62E4D;
  --blue:#5429CC;
  --green: #33CC95;

  --blue-light:#6933FF;

  --text-title:#363F5F;
  --text-body:#969CB3;

  --background:#F0F2F5;
  --shape:#FFFFFF;
}

* { //efeito aplicado em todas as páginas
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

// por padrão: 16px (Desktop)
// RER = 1rem = 16px
html{
  @media (max-width: 1080px){
    font-size: 93.75%; //15px -> 16 * 9375 = 15
  }

  @media (max-width: 720px){
    font-size: 87.5%; //14px -> 16 * 87.5 = 14
  }
}


body{
  background:  var(---background);
  -webkit-font-smoothing: antialiased; //deixa as fontes mais nítidas
}

//adiciono a fonte no:
body, input, textarea, button{
  font-family: 'Poppins', sans-serif;
  font-weight: 400;
}

h1, h2, h3, h4, h5, h6, strong{
  font-weight: 600;
}

button {
  cursor: pointer; //habilitar botão clicavel
}


[disabled]{ //Tudo que estiver desabilitado na aplic (botões, inputs)
opacity: 0.6; //deixar mais clarinho;
cursor: not-allowed; //
}


`;

