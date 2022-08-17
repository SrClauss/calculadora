var state = {
  string_value: '',
  value: 0.0,
  last_value:0.0,
  memory:0.0,
  operation:'',
  last_key:'',
  last_value2:0.0
  }

  

start()

function start(){
 
  
  
  renderDisplay()
  var keyboard_buttons = Array.from(document.getElementsByClassName('keyboard'))
  keyboard_buttons.forEach(element=>{element.addEventListener('click',handleKeyboard)})

  

}
function renderDisplay(error=false){
  var display_value = document.getElementById('display-value')
  var display_memory = document.getElementById('memory')
  var display_signal = document.getElementById('signal')
  var display_error = document.getElementById('error')
  display_value.textContent = state.value
  if (Number.isInteger(state.value)){
    display_value.innerHTML = Math.abs(state.value) + "."
  }
  else{
    display_value.innerHTML = Math.abs(state.value)
  }
  
  if (state.memory!=0){
    display_memory.innerHTML = 'M'
  }
  else{
    display_memory.innerHTML = '&nbsp'
  }
  if (state.value<0){

    display_signal.innerHTML = '-'
  }
  else{
    display_signal.innerHTML = '&nbsp'
  }
  if (error){
    display_error.innerHTML = 'E'
  }
  else{
    display_error.innerHTML - '&nbsps'
  }


}
function handleKeyboard(event){
  var v = event.target.textContent
  var numbers = '0123456789'
  var basic_operations = '+-x\u00f7'
  
  if(numbers.includes(v)){
    state.string_value+=v
    state.value = Number(state.string_value)
    state.last_key = v
    
  }
  if (basic_operations.includes(v)){
    if (basic_operations.includes(state.last_key)){
      state.operation = v
    }
    else{
      
    state.string_value = ''
    state.value = doOperation()
    console.log('value = '+ state.value)
    state.last_value2 = state.last_value2
    state.last_value = state.value
    console.log('last = '+ state.last_value)
    state.operation = v
    console.log(state.operation)
    }
  }


    
    
  
  
  switch(v){
    
    case('.'):
    if (!Number.isInteger(state.value)){
      state.string_value+='.'
    }
    break
    
    case('+/-'):
    state.value = state.value*-1.0
    break

    case('M+'):
    state.memory+=state.value
    clearValueString()
    break;

    case('M-'):
    state.memory-=state.value
    clearValueString()
    break

    case('MC'):
    state.memory = 0.0
    break

    case('MR'):
    state.value = state.memory
    break

    case('\u221A'):
    state.value = Math.sqrt(state.value)
    break

    case('='):
    state.value = doOperation()
    clearValueString()
    state.last_value = 0.0
    break

    case('CE'):
    state.last_value = state.last_value2
    console.log(state.last_value)
    state.last_value2 = 0.0
    state.operation = ''
    state.value = 0.0
    
    



  }

  renderDisplay()
  state.last_key = v
  
} 



function clearValueString(){
  state.string_value = ''

}
function doOperation(){
  switch(state.operation){
    case('+'):
    return state.last_value + state.value
    case('-'):
    return state.last_value - state.value
    case('x'):
    return state.last_value * state.value
    case('\u00f7'):
    return state.last_value / state.value
    default:
      return state.value
  }
}