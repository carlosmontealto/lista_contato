import { createGlobalStyle } from 'styled-components'
import styled from 'styled-components'

export const colors = {
  white: '#EEEEEE',
  black: '#111111',
  gray: '#333333',
  green: '#44bd32',
  lightGray: '#cccccc',
  DarkBlue: '#2f3640',
  red: '#c23616'
}

export const breakpoints = {
  desktop: '1024px',
  tablet: '768px'
}

export const GlobalCss = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
    list-style: none;
    text-decoration: none;
  }
  body{

  }

  .container{
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;

    @media (max-width: ${breakpoints.desktop}) {
      max-width: 80%;
    }
  }
`

export const Container = styled.div`
  display: grid;
  grid-template-columns: 224px auto;
`

export const Camp = styled.input`
  padding: 8px;
  background-color: #fff;
  border-radius: 8px;
  font-weight: bold;
  color: ${colors.gray};
  border: 1px solid ${colors.lightGray};
  width: 100%;
  margin-bottom: 8px;
`

export const Button = styled.button`
  color: #fff;
  font-weight: bold;
  font-size: 12px;
  padding: 8px 12px;
  border: none;
  cursor: pointer;
  background-color: ${colors.DarkBlue};
  border-radius: 8px;
  margin-right: 8px;
`
export const SaveButton = styled(Button)`
  background-color: ${colors.green};
`

export const MainContainer = styled.main`
  padding: 0 40px;
  height: 100vh;
  overflow-y: scroll;
`
export const Title = styled.h3`
  font-size: 16px;
  font-weight: bold;
  margin: 16px 0;
`
