const items = Array(1000).fill(99)

const App1 = () => {
  return (
    <ul>
      { items.map((number, index) =>
        <li key={index} style={ {listStyle: 'none', left: index} }>
          { number }
        </li>
      ) }
    </ul>
  )
}

export default App1
