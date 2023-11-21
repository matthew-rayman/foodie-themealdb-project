import Meal from './Meal'
import {Routes,Route} from "react-router-dom"
import Detail from './Detail'
import Search from './Search'

const App = () => {

  return (
    <div >
      <div className=' bg-back '>
      <Routes>
        <Route path='/' element={<Meal/>} />
        <Route path='/detail/:id' element={<Detail/>} />
        <Route path='/search/:name' element={<Search/>} />
      </Routes>
      </div>
    </div>
  )
}

export default App
