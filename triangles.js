const side1 = document.getElementById('side1')
const side2 = document.getElementById('side2')
const side3 = document.getElementById('side3')
const btn = document.getElementById('btn')
const result = document.getElementById('result')

btn.addEventListener('click', () => {
  console.log('Calculando...')
  if (!isNaN(side1.value) && !isNaN(side2.value) && !isNaN(side3.value)) {
    if (side1.value <= 0 || side2.value <= 0 || side3.value <= 0) {
      result.classList.add('error')
      result.innerText = 'Erro! Não pode número menores que zero!'
    } else {
      if (side1.value === side2.value && side1.value === side3.value && side2.value === side3.value)
        result.innerText = 'O trinângulo é equilátero'

      if (side1.value === side2.value || side2.value === side3.value || side1.value === side3.value)
        result.innerText = 'O triângulo é isóceles'

      if (side1.value !== side2.value && side1.value !== side3.value && side2.value !== side3.value)
        result.innerText = 'O triângulo é escaleno'
    }
  } else {
    result.innerText = 'Somente caracteres são válidos'
    result.classList.add('error')
  }
})
