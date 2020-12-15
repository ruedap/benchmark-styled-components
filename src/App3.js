import styled, { css } from 'styled-components'

const items = Array(1000).fill(99)

const App3 = () => {
  return (
    <ul>
      { items.map((number, index) =>
        <Li key={index} style={{ left: index}}>
          { number }
        </Li>
      ) }
    </ul>
  )
}

export default App3

const Li = styled.li(() => css`
  list-style: none;
`)
