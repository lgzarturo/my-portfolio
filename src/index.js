import ReactDOM from 'react-dom/client'
import List from './components/List'

function App () {
  return (
    <>
      <h1>Rick and Morty</h1>
      <List />
    </>
  )
}

const container = document.getElementById('app')
const root = ReactDOM.createRoot(container)
root.render(<App />)
