//* Arrays das tasks
let taskAFazer = [] //? A fazer
let taskFazendo = [] //? Fazendo
let taskFeito = [] //? Feito

//! form
document.getElementById('newTaskForm').addEventListener('submit', event => {
  event.preventDefault()
  criarTask() //? function
  document.getElementById('modalNewTask').style.display = 'none'
})

//! FUNCITION ADD TASK A FAZER
//* Primeira funcao chamada quando user submeter o form
function criarTask() {
  const dados = getDados() //? function pegar os dados - obj
  taskAFazer.push(dados) //? add os dados no array de obj

  //? limpa o UL pra dps repopular
  const ul = document.getElementById('listAFazer')
  ul.innerHTML = '' //? limpa ul

  //! --
  //? visita cada obj do array taskAFazer e manda pra function popularLista()
  taskAFazer.forEach(task => {
    //? function
    popularLista('listAFazer', task.titulo, task.descricao)
  })

  //achar task para mover
  acharTask()
}

//* Function que pega os dados do submit e retorna obj
function getDados() {
  const inputTitulo = document.getElementById('inpTituloTask')
  const titulo = inputTitulo.value

  const inputDescricao = document.getElementById('inpDescTask')
  const descricao = inputDescricao.value

  //!mensagem de erro
  if (titulo && descricao != '') {
    return { titulo, descricao }
  } else {
    alert('Acho que voce esqueceu de preencher algum campo ⚠️')
  }
}

//* Function de popular as listas, injetar o html
function popularLista(lista, titulo, descricao) {
  console.log(lista, titulo, descricao)
  const ul = document.getElementById(lista) //? seleciona a lista que passsamos
  console.log(ul)
  const li = criarTaskElement(titulo, descricao) //? cria o HTML da li
  console.log(li)
  //?injeta o elemtento
  ul.appendChild(li)

  //*mover
  document.getElementById('insertTitle').value = titulo
  document.getElementById('insertDescricao').value = descricao
}

//* Function cria o html da li e add a class task pra style dps
function criarTaskElement(titulo, descricao) {
  const li = document.createElement('li') //? cria li
  li.classList.add('task') //? add class pra css dps

  //? HTML da li , injetado pela popularLista()
  li.innerHTML = `
  <form class="container-li" id="mudarTask">
      <label class="titulo-li">
          <p>${titulo}</p>
          <span class="material-symbols-outlined">
            more_vert
          </span>
			</label>
			<input type="text" id="insertTitle">

      <div class="desc-li">
				<label>
				<p>${descricao}</p>
				</label>
				<input type="text" id="insertDescricao">
        <input class="navigate-icon material-icons-outlined" type="submit" value="navigate_next">
      </div>
    </form>
  `
  return li
}

//! ADICIONAR TASK NO AFAZER TA FUNCIONANDO

//!mover task

function acharTask() {
  document.getElementById('mudarTask').addEventListener('submit', event => {
    event.preventDefault()
    getDadosTask()
  })
}

//!PEGA os dados da task que quer mover e manda pra moverTask()
function getDadosTask() {
  const inputTitulo = document.getElementById('insertTitle')
  const titulo = inputTitulo.value

  const inputDescricao = document.getElementById('insertDescricao')
  const descricao = inputDescricao.value

  moverTask(titulo, descricao)
}

function moverTask(titulo, descricao) {
  let objeto = {}
  let posicao = 0

  taskAFazer.forEach((task, index) => {
    //indo task por task ver de match a que a gente quer mover
    if (task.titulo === titulo && task.descricao === descricao) {
      objeto = task
      posicao = index
    }
  })

  taskAFazer.splice(posicao, 1)
  taskFazendo.push(objeto)
  //!

  //repopular , listaAFazer => Fazendo
  let ul = document.getElementById('listAFazer')
  ul.innerHTML = '' //limpa
  taskAFazer.forEach(task => {
    popularLista('listAFazer', task.titulo, task.descricao)
  })

  let ul2 = document.getElementById('listFazendo')
  ul2.innerHTML = ''
  taskFazendo.forEach(task => {
    popularLista('listFazendo', task.titulo, task.descricao)
  })

}
