import Meal from './meal'
import {Routes,Route} from "react-router-dom"
import Detail from './Detail'
import Search from './Search'

const App = () => {

  return (
    <div className='container mx-auto'>
      <Routes>
        <Route path='/' element={<Meal/>} />
        <Route path='/detail/:id' element={<Detail/>} />
        <Route path='/search/:name' element={<Search/>} />
      </Routes>
    </div>
  )
}

export default App
