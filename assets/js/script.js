// If field is empty shows: *Campo Obrigatório*
// If the form contains an empty field show the message: Campos obrigatórios não registrados. if not show Sucesso 
const form = document.getElementById('form')
const username = document.getElementById ('username')
const email = document.getElementById('email')
const phone = document.getElementById('phone')
const cpf = document.getElementById('cpf')
const password = document.getElementById('password')


// phone.addEventListener('keypress', () =>{
//   let phoneLength = phone.value.length

//   if(phoneLength == 0 || phoneLenght == 3){
//     phone.value += '('
//   }

// })

  cpf.addEventListener('keypress', () =>{
    let cpfLength = cpf.value.length

    if(cpfLength === 3 || cpfLength === 7){
      cpf.value += '.'
    } else if (cpfLength === 11){
      cpf.value += '-'
    }
  })


form.addEventListener('submit', (error) =>{
  error.preventDefault()

  checkInput()

})

function checkInput(){
  const usernameValue = username.value
  const emailValue = email.value
  const phoneValue = phone.value
  const cpfValue = cpf.value
  const passwordValue = password.value



  if(usernameValue === ''){
    //show error | add class error
    errorValidation(username, '*Campo Obrigatório*')
  } else {
    removeError(username, '')
  }

  if(emailValue === ''){
    //show error | add class error
    errorValidation(email, '*Campo Obrigatório*')
  } else {
    removeError(email, '')
  }

  if(phoneValue === ''){
    //show error | add class error
    errorValidation(phone, '*Campo Obrigatório*')
  } else {
    removeError(phone, '')

  }

  if(cpfValue === ''){
    //show error | add class error
    errorValidation(cpf, '*Campo Obrigatório*')
  } else {
    removeError(cpf, '')

  }

  if(passwordValue === ''){
    //show error | add class error
    errorValidation(password, '*Campo Obrigatório*')
  } else {
    removeError(password, '')
  }

}


function errorValidation (input, message){
  const inputArea = input.parentElement;  //get the reference of formControl at index.html
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

