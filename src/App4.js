import styled, { css } from 'styled-components'

const items = Array(1000).fill(99)

const App4 = () => {
  return (
    <ul>
      { items.map((number, index) => {
        return (
        <Li key={index} left={index}>
          { number }
        </Li>
        )}
      ) }
    </ul>
  )
}

export default App4

const Li = styled.li(({left}) => css`
  list-style: none;
  left: ${left}px;
`)
