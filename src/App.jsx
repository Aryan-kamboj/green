import './App.css'
import { Dashboard } from './components/Dashboard'
import {Content} from "./components/Content"
function App() {

  return (
      <div className='flex font-inter h-fit'>
        <Dashboard/>
        <Content/>
      </div>
  )
}

export default App
