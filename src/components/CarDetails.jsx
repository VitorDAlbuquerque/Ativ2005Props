const CarDetails = ({marca, km, cor, ano}) => {
  return (
    <div style={{
      borderWidth: '2px',
      borderColor: '#0000',
      borderRadius: 10,
      
    }}>
        <ul>
        <li>Marca: {marca}</li>
         <li>{km} Km</li>
        <li>Cor: {cor}</li>
        <li>Ano: {ano}</li>
        
      {ano<=2020? <li>Carro Usado</li>: <li>Carro novo</li>}
      </ul>
    </div>
  )
}

export default CarDetails