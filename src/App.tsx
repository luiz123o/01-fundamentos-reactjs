import { Posts } from './pages/Posts'
import {globalStyles} from './styles/global'

function App() {
  globalStyles()
  return (
    <div className="App">
     <Posts/>
    </div>
  )
}

export default App
