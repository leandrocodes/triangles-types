const side1 = document.getElementById('side1')
const side2 = document.getElementById('side2')
const side3 = document.getElementById('side3')
const btn = document.getElementById('btn')
const result = document.getElementById('result')

btn.addEventListener('click', () => {
  result.classList.remove('error')
  console.log('Calculando...')
  if (!isNaN(side1.value) && !isNaN(side2.value) && !isNaN(side3.value)) {
    if (side1.value <= 0 || side2.value <= 0 || side3.value <= 0) {
      result.classList.add('error')
      result.style.display = 'block'
      result.innerText = 'Erro! Não pode número menores que zero!'
    } else {
      if (side1.value === side2.value && side1.value === side3.value && side2.value === side3.value) {
        result.style.display = 'block'
        result.innerText = 'O trinângulo é equilátero'
      }

      else if (side1.value === side2.value || side2.value === side3.value || side1.value === side3.value) {
        result.style.display = 'block'
        result.innerText = 'O triângulo é isóceles'
      }

      else if (side1.value !== side2.value && side1.value !== side3.value && side2.value !== side3.value) {
        result.style.display = 'block'
        result.innerText = 'O triângulo é escaleno'
      }
    }
  } else {
    result.innerText = 'Somente caracteres são válidos'
    result.classList.add('error')
  }
})
