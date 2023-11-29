import { useSelector } from 'react-redux'
import Contact from '../../components/Contact'
import { RootReducer } from '../../store'
import { MainContainer } from '../../styles'

const ContactList = () => {
  const { itens, termo } = useSelector((state: RootReducer) => state.contatos)

  const filtrarContatos = () => {
    let contatosFiltrados = itens

    if (termo !== undefined) {
      contatosFiltrados = contatosFiltrados.filter(
        (item) => item.nome.toLowerCase().search(termo.toLowerCase()) >= 0
      )
      return contatosFiltrados
    } else {
      return itens
    }
  }

  const contatos = filtrarContatos()

  return (
    <MainContainer>
      <ul>
        {contatos.map((c) => (
          <li key={c.id}>
            <Contact
              id={c.id}
              nome={c.nome}
              email={c.email}
              telefone={c.telefone}
            />
          </li>
        ))}
      </ul>
    </MainContainer>
  )
}

export default ContactList
