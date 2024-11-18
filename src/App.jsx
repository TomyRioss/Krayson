import './App.css'
import { ServicesComponent } from './insfrastructure/components/Content/ServicesComponent.jsx'
import { HeaderComponent } from './insfrastructure/components/Header/HeaderComponent.jsx'
import { HeroBanner } from './insfrastructure/components/Hero/HeroBanner.jsx'


function App() {

  return (
    <>
    <div className='flex-col'>
      <div className='bg-image'>
        <HeaderComponent/>
        <HeroBanner/>
      </div>
    </div>
    </>
  )
}

export default App
