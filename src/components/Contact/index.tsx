import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'

import * as S from './styles'
import { Button, SaveButton } from '../../styles'
import { edit, remove } from '../../store/reducers/contatos'

type Props = Contato

const Contact = ({
  id,
  nome,
  telefone: telefoneOriginal,
  email: emailOriginal
}: Props) => {
  const [estaEditando, setEstaEditando] = useState(false)
  const [email, setEmail] = useState('')
  const [telefone, setTelefone] = useState('')
  const dispatch = useDispatch()

  useEffect(() => {
    if (emailOriginal.length > 0) {
      setEmail(emailOriginal)
    }
  }, [emailOriginal])

  useEffect(() => {
    if (telefoneOriginal.length > 0) {
      setTelefone(telefoneOriginal)
    }
  }, [telefoneOriginal])

  function cancelarEdicao() {
    setEstaEditando(false)
    setEmail(emailOriginal)
    setTelefone(telefoneOriginal)
  }

  return (
    <S.Card>
      <S.Title>
        {estaEditando ? <em>Editando: </em> : ''}
        {nome}
      </S.Title>
      <S.Description
        disabled={!estaEditando}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <S.Description
        disabled={!estaEditando}
        value={telefone}
        onChange={(e) => setTelefone(e.target.value)}
      />
      <S.ActionBar>
        {estaEditando ? (
          <>
            <SaveButton
              onClick={() => {
                dispatch(
                  edit({
                    nome,
                    id,
                    email,
                    telefone
                  })
                )
                setEstaEditando(false)
              }}
            >
              Salvar
            </SaveButton>
            <S.CancelButton onClick={() => cancelarEdicao()}>
              Cancelar
            </S.CancelButton>
          </>
        ) : (
          <>
            <Button onClick={() => setEstaEditando(true)}>Editar</Button>
            <S.CancelButton onClick={() => dispatch(remove(id))}>
              Remover
            </S.CancelButton>
          </>
        )}
      </S.ActionBar>
    </S.Card>
  )
}

export default Contact
