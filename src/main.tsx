import React from 'react'
import { render } from 'react-dom'
import { createServer, Model } from 'miragejs'
import { App } from './App'

createServer({
  models: {
    transaction: Model,
  },

  // seeds(server) {
  //   server.db.loadData({
  //     transactions: [
  //       {
  //         id: 1,
  //         title: 'Development website',
  //         type: 'deposit',
  //         amount: 4500,
  //         category: 'Dev',
  //         createdAt: new Date(),
  //       },
  //       {
  //         id: 2,
  //         title: 'Aluguel',
  //         type: 'withdraw',
  //         amount: 500,
  //         category: 'Casa',
  //         createdAt: new Date(),
  //       },
  //     ],
  //   })
  // },

  routes() {
    this.namespace = 'api'

    this.get('/transactions', () => {
      return this.schema.all('transaction')
    })

    this.post('/transactions', (schema, request) => {
      const data = JSON.parse(request.requestBody)

      return schema.create('transaction', data)
    })
  },
})

render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
)
