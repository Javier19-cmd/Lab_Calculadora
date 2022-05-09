import multiplicacion from './multiplicacion'

// Probando la operación con números nornmales.
it('returs its multiplication', () => {
  expect(multiplicacion(10, 5)).toBe(50)
})

// Probando la operación con números grandes.
// Esto debe dar error.
it('returs an error', () => {
  expect(multiplicacion(100000000000000, 50000000000)).toBe('ERROR')
})
