const botao = document.querySelector('button')

botao.onclick = () => {
  
  var valorEmLibra = Number(document.querySelector('input').value.replace(',','.'))
  
  document.querySelector('h2').innerHTML = '$ '+(valorEmLibra * 1.38).toFixed(2)
  
}