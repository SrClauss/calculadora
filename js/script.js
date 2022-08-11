var state = {
  display: '0',
  last_number: 0.0,
  main_memory: 0.0,
  secundary_memory: 0.0,




}
start()
function start(){
  render()
  var botoes = Array.from(document.getElementsByClassName('botao'))
  botoes.forEach(element=>element.addEventListener('click', handleTeclas))
}
function render(){
  renderDisplay()
}
function renderDisplay(){
  display = document.getElementById("display")
  display.textContent = state.display
}


