import logoImg from '../../assets/logo.svg'
import { Container, Content } from './styles'

interface HeaderProps{
  onOpenNewTransactionModal: () => void; //informamos que essa propriedade é uma função 
                                         // e que não irá receber nenhum parâmetro e nem 
                                         // devolver nenhum retorno.
}

export function Header({onOpenNewTransactionModal}: HeaderProps) { //As props são do tipo HeaderProps

  return (
    <Container>
      <Content>
        <img src={logoImg} alt="" />
        <button type="button" onClick={onOpenNewTransactionModal}>
          Nova transação
      </button>
      </Content>
    </Container>
  )
}