const side1 = document.getElementById('side1')
const side2 = document.getElementById('side2')
const side3 = document.getElementById('side3')
const btn = document.getElementById('btn')
const result = document.getElementById('result')

btn.addEventListener('click', () => {
  console.log('Calculando...')

  if (side1.value === side2.value && side1.value === side3.value && side2.value === side3.value)
    console.log('esquilátero')
  if (side1.value === side2.value || side2.value === side3.value || side1.value === side3.value)
    console.log('isóceles')
  if (side1.value !== side2.value && side1.value !== side3.value) console.log('escaleno')
  else console.log('triangulo inválido!')
})
