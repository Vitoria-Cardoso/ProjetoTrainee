//* Arrays das tasks
let taskAFazer = [] //? A fazer
let taskFazendo = [] //? Fazendo
let taskFeito = [] //? Feito

//* form
document.getElementById("newTaskForm").addEventListener("submit", (event) => {
  event.preventDefault()
  criarTask() //? function
})

//! FUNCITION ADD TASK A FAZER
//* Primeira funcao chamada quando user submeter o form
function criarTask() {
  const dados = getDados() //? function pegar os dados - obj
  taskAFazer.push(dados) //? add os dados no array de obj

  //? limpa o UL pra dps repopular 
  const ul = document.getElementById("listAFazer")
  ul.innerHTML = "" //? limpa ul 

  //! aqui --
  //? visita cada obj do array taskAFazer e manda pra function popularLista()
  taskAFazer.forEach((task) => {
    //? function
    popularLista("listFazer", task.titulo, task.descricao)
  })
}

//* Function que pega os dados do submit e retorna obj
function getDados() {
  const inputTitulo = document.getElementById("inpTituloTask") 
  const titulo = inputTitulo.value
  
  const inputDescricao = document.getElementById("inpDescTask")
  const descricao = inputDescricao.value

  return {titulo, descricao}
}

//* Function de popular as listas, injetar o html
function popularLista(lista, titulo, descricao) {
  const ul = document.getElementById(lista) //? seleciona a lista que passsamos
  const li = criarTaskElement(titulo, descricao) //? cria o HTML da li

  //?injeta o elemtento
  ul.appendChild(li)
}

//* Function cria o html da li e add a class task pra style dps
function criarTaskElement(titulo, descricao) {
  const li = document.createElement("li") //? cria li
  li.classList.add("task") //? add class pra css dps

  //? HTML da li , injetado pela popularLista()
  li.innerHTML =  `
  <div class = "container-li"> 
  <div class="titulo-li" > <p> ${titulo} </p> <span class="material-icons-outlined">
  more_vert
  </span>
  </div>
  <div class = "desc-li" >
  <p> ${descricao} </p>  <span class="material-icons-outlined">
  navigate_next
  </span>
  </div>
  </div>
  `
  return li
}