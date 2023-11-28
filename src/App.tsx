import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'

import { Container, GlobalCss } from './styles'

import PRoute from './routes'
import store from './store'

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <GlobalCss />
        <Container>
          <PRoute />
        </Container>
      </BrowserRouter>
    </Provider>
  )
}

export default App
