import styled from 'styled-components';

export const Container = styled.header`
background: var(--blue);

`;

export const Content = styled.div`
max-width: 1120px; //Máxima largura
margin: 0 auto; //Centralizando na tela

padding: 2rem 1rem 12rem; //2*16 para distancia de cima, 16px nas laterais quando estiver em celulares não irá encostar  e 192px no padding de baixo 16*12
display: flex;
align-items: center; //Alinhar verticalmente ao centro
justify-content: space-between; //espaço entre os itens que estão dentro do meu content "a logo e o botão"

button{
  font-size: 1rem;
  color: #FFF;
  background: var(--blue-light);
  border: 0;
  padding: 0 2rem;
  border-radius: 0.25rem;
  height: 3rem;
  transition: filter 0.2s; //Efeito de transição ao passar o mouse encima.

  &:hover { //Quando eu passar o mouse encima do botão
    filter: brightness(0.9) //Escurecer a cor do botão     /* filter: blur(5px) //Hack de efeitos */
  
  }
}
`;