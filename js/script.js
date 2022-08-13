var state = {

  string_value: '',
  value: 0.0,
  last_value:0.0,
  memory:0.0,
  operation:'',
  last_key:''
  
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
    
  }
  if(basic_operations.includes(v)){
   
    
    
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
    
    



  }

  renderDisplay()
  state.last_key = v
  
  


}
function clearValueString(){
  state.string_value = ''

}
function doOperation(operation){

  switch (operation){
    case('+'):
    state.result = state.last_value  + state.value
    break
  
    case('-'):
    state.result = state.last_value - value
    break

    case('x'):
    state.result = state.last_value * state.value
    break

    case('\u00f7'):
    state.result = state.last_value/state.value
    break
    
  }
  



}