import styled from 'styled-components'

const items = Array(1000).fill(99)

const App2 = () => {
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

export default App2

const Li = styled.li`
  list-style: none;
`
