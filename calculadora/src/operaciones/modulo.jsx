// Javier Valle
// Carnet 20159
// Esta operacion recibe como parámetro dos números que luego calcula
// su módulo.

const modulo = (a, b) => {
  // Se guarda la operación dentro de una variable y luego
  // se analiza.

  const mod = a % b

  // Si el resultado es menor a cero, entonces se retorna un error.
  if (mod < 0 || mod > 999999999) {
    return 'ERROR'
  }

  return mod // Si no hay error, entonces se retorna el resultado normal.
}

export default modulo
