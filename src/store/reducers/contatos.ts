import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type ContatoState = {
  itens: Contato[]
}

const initialState: ContatoState = {
  itens: [
    {
      id: 1,
      nome: 'Carlos',
      email: 'carlos@teste.com',
      telefone: '(00) 12345 - 1234'
    },
    {
      id: 2,
      nome: 'Teste',
      email: 'testes@teste.com',
      telefone: '(11) 12345 - 1234'
    },
    {
      id: 1,
      nome: 'Teste 2',
      email: 'teste2@teste.com',
      telefone: '(22) 12345 - 1234'
    }
  ]
}

const contatosSlice = createSlice({
  name: 'contatos',
  initialState,
  reducers: {
    remove: (state, action: PayloadAction<number>) => {
      state.itens = state.itens.filter(
        (contato) => contato.id !== action.payload
      )
    },
    edit: (state, action: PayloadAction<Contato>) => {
      const index = state.itens.findIndex(
        (item) => item.id === action.payload.id
      )

      if (index >= 0) {
        state.itens[index] = action.payload
      }
    },
    register: (state, action: PayloadAction<Omit<Contato, 'id'>>) => {
      const contatoJaExiste = state.itens.find(
        (contato) =>
          contato.nome.toLowerCase() === action.payload.nome.toLowerCase()
      )

      if (contatoJaExiste) {
        alert('Este contato já existe')
      } else {
        const ultimoContato = state.itens[state.itens.length - 1]

        const contatoNovo = {
          ...action.payload,
          id: ultimoContato ? ultimoContato.id + 1 : 1
        }
        state.itens.push(contatoNovo)
      }
    }
  }
})

export const { remove, edit, register } = contatosSlice.actions

export default contatosSlice.reducer
