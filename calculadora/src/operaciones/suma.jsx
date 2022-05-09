// Javier Valle
// Carnet 20159
// Esta operación recibe como parámetro dos números que luego los suma.

const suma = (a, b) => {
    
  // Aquí lo que se hace es guardar la suma en una variable y 
  // luego la analiza.

  const sum = a + b

  // Si la suma es mayor a 999999999, entonces se retorna un error.
  if(sum > 999999999) {
    return "ERROR"
  }else {
    // Si la suma es menor a 999999999, entonces se devuelve la resta.
    return sum
  }
}

export default suma
