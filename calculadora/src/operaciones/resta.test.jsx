// Importando el archivo encargado de la resta.
import resta from './resta'

// En este test de la resta, se reciben dos números (10 y 5)
// los números se restan y se imprime un mensaje de éxito
// indicando que la resta salió bien.
it('returs its substraction', () => {
  expect(resta(10, 5)).toBe(5)
})

// En este test de la resta, se reciben dos números (10 y 15)
// los números se restan y se imprime un mensaje de fracaso
// indicando que la resta salió mal.

it('returs its substraction', () => {
  expect(resta(10, 15)).toBe(-5)
})
