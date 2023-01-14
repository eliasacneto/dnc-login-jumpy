// If field is empty shows: *Campo Obrigatório*
// If the form contains an empty field show the message: Campos obrigatórios não registrados. if not show Sucesso 
const form = document.getElementById('form')
const username = document.getElementById ('username')
const email = document.getElementById('email')
const phone = document.getElementById('phone')
const cpf = document.getElementById('cpf')
const password = document.getElementById('password')
const signup = document.getElementById('alert')



phone.addEventListener('keypress', (e) => phoneMask(e.target.value)) //insert mask when key is pressed
phone.addEventListener('change', (e) => phoneMask(e.target.value)) // change to the mask pattern

const phoneMask = (mask) => {
  mask = mask.replace(/\D/g,"")
  mask = mask.replace(/^(\d{2})(\d)/g, "($1) $2")
  mask = mask.replace(/(\d)(\d{4})$/, "$1-$2") // insert the - on the last 4 digits
  phone.value = mask // insert number on field
}

  cpf.addEventListener('keypress', () =>{
    let cpfLength = cpf.value.length

    if(cpfLength === 3 || cpfLength === 7){
      cpf.value += '.'
    } else if (cpfLength === 11){
      cpf.value += '-'
    }
  })


form.addEventListener('submit', (e) =>{
  e.preventDefault()

  checkInput() 
  
})

function checkInput(){
  const usernameValue = username.value
  const emailValue = email.value
  const phoneValue = phone.value
  const cpfValue = cpf.value
  const passwordValue = password.value
 

  let filled = true



  if(usernameValue === ''){
    //show error | add class error
    errorValidation(username, '*Campo Obrigatório*')
    filled = false
  } else {
    removeError(username, '')
  }

  if(emailValue === ''){
    //show error | add class error
    errorValidation(email, '*Campo Obrigatório*')
    filled = false
  } else {
    removeError(email, '')
  }

  if(phoneValue === ''){
    //show error | add class error
    errorValidation(phone, '*Campo Obrigatório*')
    filled = false
  } else {
    removeError(phone, '')

  }

  if(cpfValue === ''){
    //show error | add class error
    errorValidation(cpf, '*Campo Obrigatório*')
    filled = false
  } else {
    removeError(cpf, '')

  }

  if(passwordValue === ''){
    //show error | add class error
    errorValidation(password, '*Campo Obrigatório*')
    filled = false
  } else {
    removeError(password, '')
  }
  
  if(filled === false){
    const error = document.getElementById('alert')
    error.innerText = 'Campos obrigatórios não registrados'
    error.className = 'input-area alert'
    console.log('Campos obrigatórios não registrados.')
  }
  else{
    const success = document.getElementById('alert')
    success.innerText = 'Sucesso!'
    success.className = 'input-area success'

    console.log('Sucesso!')
  }

}


function errorValidation (input, message){
  const inputArea = input.parentElement;  //get the reference of inputArea at index.html
  const span = inputArea.querySelector('span')

  span.innerText = message
  inputArea.className = 'input-area warning'
}


function removeError(input, message){
  const inputArea = input.parentElement;  
  const span = inputArea.querySelector('span')
  span.innerText = message
  inputArea.className = 'input-area'
}

