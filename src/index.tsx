import React from 'react';
import ReactDOM from 'react-dom';
import {createServer, Model} from 'miragejs';

import { App } from './App';

createServer({
  models:{
    transaction: Model, //nome da entidade
  },

  seeds(server){
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: 'Freelance de website',
          type: 'deposit',
          category: 'Dev',
          amount: 6000,
          createdAt: new Date('2021-02-12 09:00:00'),
        },
        {
          id: 2,
          title: 'Aluguel',
          type: 'withdraw',
          category: 'Aluguel',
          amount: 5000,
          createdAt: new Date('2021-02-12 09:00:00'),
        }
      ]
    })
  },

  routes(){
    this.namespace ='api'; //Chama apartir deste endereço

    this.get('/transactions', () =>{ //O que gostaria de retornar  
         return this.schema.all('transaction')    
    })
    this.post('/transactions', (schema, request) => {  //Parametros recebidos schema e request
      const data = JSON.parse(request.requestBody)
      return schema.create('transaction', data)
    })
  }
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
