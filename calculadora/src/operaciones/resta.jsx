// Esta función recibe dos parámetros.
// Estos dos parámetros son restados y guardados en una variable.
// Si la resta es menor a 0, entonces hay un mensaje de error.
// Si en caso la resta es mayor a cero, se dice que todo pasó.

const resta = (a, b) => {
  const res = a - b // Resta guardada en una variable.

  // Si la resta es menor a cero, entonces se imprime un mensaje de error.
  // Si la operación es mayor a cero, entonces se dice que todo pasó.
  if (res < 0) {
    // Error, resta menor a cero.
    return 'Error'
  }

  return res
}

export default resta
