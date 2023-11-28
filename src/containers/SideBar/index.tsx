import { useNavigate } from 'react-router-dom'
import { Button, Campo } from '../../styles'

import * as S from './styles'
// import { useDispatch, useSelector } from 'react-redux'
// import { RootReducer } from '../../store'

type Props = {
  homeScreen?: boolean
}

const SideBar = ({ homeScreen }: Props) => {
  const navigate = useNavigate()
  // const dispatch = useDispatch()
  // const { itens } = useSelector((state: RootReducer) => state.contatos)

  return (
    <S.Aside>
      {homeScreen ? (
        <Campo
          type="text"
          placeholder="Buscar"
          // value={itens}
          // onChange={(e) => dispatch(alterarTermo(e.target.value))}
        />
      ) : (
        <Button onClick={() => navigate('/')} type="button">
          Voltar a lista de contatos
        </Button>
      )}
    </S.Aside>
  )
}

export default SideBar
