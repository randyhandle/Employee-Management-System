import './App.css'
import FooterComponent from './components/FooterComponent'
import ListEmployeeComponent from './components/ListEmployeeComponent'
import HeaderComponent from './components/HeaderComponent'
import { BrowserRouter, Route , Routes } from 'react-router-dom'
import EmployeeComponents from './components/EmployeeComponents'

function App() {

  return (
    <>
      <BrowserRouter>
        <HeaderComponent/>
          <Routes>
            <Route path = '/' element = { <ListEmployeeComponent/>}></Route>
            <Route path = '/employees' element = { <ListEmployeeComponent/>}></Route>
            <Route path = '/add-employee' element = { <EmployeeComponents/>}></Route>
            <Route path = '/edit-employee/:id' element = {<EmployeeComponents/>}></Route>
          </Routes>
        {/* <ListEmployeeComponent /> */}
        <FooterComponent/>
      </BrowserRouter>
    </>
  )
}

export default App
