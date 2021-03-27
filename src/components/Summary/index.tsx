import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import totalImg from '../../assets/total.svg';
import { useTransactions } from '../../hooks/useTransactions';

import { Container } from "./styles";

export function Summary() {
  const {transactions} = useTransactions();

  // const totalDeposits = transactions.reduce((acc, transaction) => {
  //   if(transaction.type === 'deposit'){
  //     return acc + transaction.amount;
  //   }
  //   return acc;
  // },0)

  const summary = transactions.reduce((acc, transaction) => { //ACC: Acumulator do reduce

    console.log(transaction);

    if(transaction.type === 'deposit'){
      acc.deposits += transaction.amount; //+= soma para entradas
      acc.total += transaction.amount; //resultado do total
    }else{
      acc.withdraws -= transaction.amount; //resultado de saídas
      acc.total -= transaction.amount; //-+ subtrair
    }
    return acc; //o reduce precisa que toda alteração retorne com as mudanças o acc

  },{ //reinicia como objetos
    deposits: 0, 
    withdraws: 0,
    total: 0,
  }) 

  return (
    <Container>
      <div>
        <header>
          <p>Entradas</p>
          <img src={incomeImg} alt="Entradas" />
        </header>
          <strong>
          {new Intl.NumberFormat('pt-BR',{
                style: 'currency',
                currency: 'BRL'
              }).format(summary.deposits)}
          </strong>
      </div>
      <div>
        <header>
          <p>Saídas</p>
          <img src={outcomeImg} alt="Saídas" />
        </header>
        <strong>
        {new Intl.NumberFormat('pt-BR',{
                style: 'currency',
                currency: 'BRL'
              }).format(summary.withdraws)}
          </strong>
      </div>
      <div className="highlight">
        <header>
          <p>Total</p>
          <img src={totalImg} alt="Total" />
        </header>
        <strong>
        {new Intl.NumberFormat('pt-BR',{
                style: 'currency',
                currency: 'BRL'
              }).format(summary.total)}
        </strong>
       
      </div>
    </Container>
  )
}