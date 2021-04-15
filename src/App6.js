import styled, { css } from 'styled-components'

const items = Array(1000).fill(99)

const App6 = () => {
  return (
    <ul>
      { items.map((number, index) =>
        <Li key={index} left={ index }>
          { number }
        </Li>
      ) }
    </ul>
  )
}

export default App6

const Li = ({children, left}) => {
  return (
    <Root style={{left: left}}>{children}</Root>
  )
}

const Root = styled.li(() => css`
  list-style: none;
`)
