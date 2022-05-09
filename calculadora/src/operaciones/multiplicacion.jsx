// Archivo que tiene la multiplicación.
// Esta operación recibe dos parámetros que se usan para ser multiplicados.

const multiplicacion = (a, b) => {
  // Se guarda la operación de multiplicación a una variable.
  const mult = a * b

  // Se analiza la operación.
  if (mult > 999999999) {
    // Si la multiplicación es mayor a 999999999, entonces se retorna
    // un error.
    return 'ERROR'
  }

  return mult
}

export default multiplicacion
