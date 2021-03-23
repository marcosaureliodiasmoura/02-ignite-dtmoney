import styled from "styled-components";

export const Container = styled.div`
display: grid; //3 itens do mesmo tamanho, um ao lado do outro por isso grid.
grid-template-columns: repeat(3, 1fr); //3 colunas de tamanhos iguais
gap: 2rem; //espaçamento de cada um dos grids
margin-top: -10rem; //Joga para cima do header

div{      //isso se chama, encadeamento de estilos -> div.
background: var(--shape);
padding: 1.5rem 2rem; //24px smartphone e 32 no desktop
border-radius: 0.25rem; //bordar da div
color: var(--text-title);


header{
  display: flex;
  align-items: center;
  justify-content: space-between; //espaço entre o <p> e o 
  
}

&.highlight{
  background: var(--green);
  color: #FFF;
}

strong{
  display: block; //por padrão vem inline, dando mais espacamento com o block para ativar o margin-top
  margin-top: 1rem;
  font-size: 2rem;
  font-weight: 500;
  line-height: 3rem;
}
}
`;
