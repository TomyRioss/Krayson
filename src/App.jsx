import './App.css'
import { ServicesComponent } from './insfrastructure/components/Content/ServicesComponent.jsx'
import { HeaderComponent } from './insfrastructure/components/Header/HeaderComponent.jsx'


function App() {

  return (
    <>
    <div className='flex-col'>
      <HeaderComponent/>
      <ServicesComponent/>
    </div>
    </>
  )
}

export default App
