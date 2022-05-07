// Test unitario de la sumatoria.
import suma from './suma'

// En el test de la suma, se entegan dos números (en este caso 2 y 5)
// y se espera que regrese un 7 como resultado.
it('returs its addition', () => {
  expect(suma(2, 5)).toBe(7)
})
