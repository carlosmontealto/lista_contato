import { useSelector } from 'react-redux'
import Contact from '../../components/Contact'
import { RootReducer } from '../../store'
import contatos from '../../store/reducers/contatos'
import { MainContainer } from '../../styles'

const ContactList = () => {
  const { itens } = useSelector((state: RootReducer) => state.contatos)

  return (
    <MainContainer>
      <ul>
        {itens.map((c) => (
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
