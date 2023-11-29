import { useNavigate } from 'react-router-dom'
import { Button, Camp } from '../../styles'

import * as S from './styles'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { alterarTermo } from '../../store/reducers/contatos'

type Props = {
  homeScreen?: boolean
}

const SideBar = ({ homeScreen }: Props) => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { termo } = useSelector((state: RootReducer) => state.contatos)

  return (
    <S.Aside>
      {homeScreen ? (
        <Camp
          type="text"
          placeholder="Buscar"
          value={termo}
          onChange={(e) => dispatch(alterarTermo(e.target.value))}
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
