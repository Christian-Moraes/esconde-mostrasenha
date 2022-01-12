const input = document.querySelector('.senha input')
const eye = document.querySelector('.senha .fa-eye-slash')
const lock = document.querySelector('.senha .fa-lock')
const overlay = document.querySelector('.overlay')

eye.addEventListener('click', () => {
  if (input.type === 'password') {
    input.type = 'text'

    eye.classList.remove('fa-eye-slash')
    eye.classList.add('fa-eye')

    setTimeout(() => {
      lock.getElementsByClassName.color = '#111625'
    }, 500)
  } else {
    input.type = 'password'

    eye.classList.remove('fa-eye')
    eye.classList.add('fa-eye-slash')

    lock.style.color = '#dbdbdb'
  }

  overlay.classList.toggle('overlay-cover')
})
