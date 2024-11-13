import './App.css'
import { ServicesComponent } from './insfrastructure/components/Content/ServicesComponent.jsx'
import { HeaderComponent } from './insfrastructure/components/Header/HeaderComponent.jsx'


function App() {

  return (
    <>
    <div className='flex-col pr-12 pl-12'>
      <HeaderComponent/>
      <ServicesComponent/>
    </div>
    </>
  )
}

export default App
