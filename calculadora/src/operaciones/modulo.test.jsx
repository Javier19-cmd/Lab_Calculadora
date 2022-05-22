import modulo from './modulo'

// Probando la operación con números normales.
// Acá debería haber una respuesta positiva o cero.
it('returns its module', () => {
  expect(modulo(4, 2)).toBe(0)
})

// Probando la operación con números negativos.
// Esto debe dar error.
it('returns an error', () => {
  expect(modulo(-13, 5)).toBe('ERROR')
})
