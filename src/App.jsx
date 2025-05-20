import './App.css'
import CarDetails from './components/CarDetails'

function App() {
  const cars = [
    {id: 1001, marca: "Honda Civic", km: 0, cor: "Vermelho", ano: "2025"},
    {id: 1002, marca: "Corolla Xei", km: 25.0, cor: "Azul", ano: "2005"},
    {id: 1003, marca: "Ferrari", km: 230, cor: "Vermelho", ano: "1997"}
  ]
  return (
    <>
      <h1>Nossos carros</h1>
      <div style={{
        display: "flex",
        flexDirection: "column",
        gap: 5
      }}>
        {cars.map(car =>{
          return(
            <CarDetails key={car.id} marca={car.marca} km={car.km} cor={car.cor} ano={car.ano}/>
          )
        })}
      </div>
      
    </>
  )
}

export default App