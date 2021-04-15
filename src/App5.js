import styled, { css } from 'styled-components'

const items = Array(1000).fill(99)

const App5 = () => {
  return (
    <ul>
      { items.map((number, index) => {
        return (
        <Li key={index} style={{'--left': `${index}px`}}>
          { number }
        </Li>
        )}
      ) }
    </ul>
  )
}

export default App5

const Li = styled.li(() => css`
  list-style: none;
  left: var(--left);
`)
