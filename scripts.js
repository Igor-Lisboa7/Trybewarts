// Captura imagem log para botão home
const btnHome = document.getElementById("home-page")



btnHome.addEventListener('click', (e) => {
  location.reload()
})

const inputPassword = document.querySelector('#senha');
const inputEmail = document.querySelector('#email');
const btnSubmit = document.querySelector('#submit');
const pictureContainer = document.querySelector('#picture-container');

const PATH_IMAGE = './images/trybewarts-colored.svg';

function formValidate() {
  const passwordIsValid = inputPassword.value === '123456';
  const emailIsValid = inputEmail.value === 'tryber@teste.com';
  return (
    passwordIsValid && emailIsValid ? alert('Olá, Tryber!') : alert('Email ou senha inválidos.')
  );
}

function createImage(path) {
  const img = document.createElement('img');
  img.id = 'trybewarts-forms-logo';
  img.src = path;
  img.draggable = false;
  img.style.height = '500px';
  return img;
}

const image = createImage(PATH_IMAGE);
pictureContainer.appendChild(image);

btnSubmit.addEventListener('click', (e) => {
  e.preventDefault();
  formValidate();
});

// Capitura de elementos
const submitBtn = document.getElementById('submit-btn');
const agreement = document.getElementById('agreement');
const myTextArea = document.getElementById('textarea');
const numCaracteres = document.getElementById('counter');

// Function requisito 18. Habilite o botão 'Enviar' após a validação do checkbox.

function checkBoxStatus() {
  if (agreement.checked) {
    submitBtn.disabled = false;
    submitBtn.style.backgroundColor = 'forestgreen';
  } else {
    submitBtn.disabled = true;
  }
}

agreement.addEventListener('click', checkBoxStatus);

// requisito 20.//
function countMyTextArea() {
  numCaracteres.innerHTML = (500 - myTextArea.value.length);
}

myTextArea.addEventListener('keyup', countMyTextArea);

// 21 Substitua o formulario pelos dados submetidos

const nome = document.getElementById('input-name');
const sobrenome = document.getElementById('input-lastname');
const email = document.getElementById('input-email');
const casa = document.getElementById('house');
const familia = document.querySelectorAll('[name="family"]');
const materias = document.getElementsByClassName('subject');
const avaliacao = document.querySelectorAll('[name="rate"]');
const observacoes = document.getElementById('textarea');
const myform = document.getElementById('evaluation-form');
const auxiliary = ['evaluation-form', 'span', 'br'];

const info = {
  nome: '',
  sobrenome: '',
  email: '',
  casa: '',
  familia: '',
  materias: '',
  avaliacao: '',
  observacoes: '',
};

function getIndexFamily() {
  for (let index = 0; index < 3; index += 1) {
    if (familia[index].checked) {
      return index;
    }
  }
  return -1;
}

function listSubjects() {
  let subjects = '';
  for (let index = 0; index < materias.length; index += 1) {
    if (materias[index].checked) {
      subjects += materias[index].value;
      subjects += ', ';
    }
  }
  if (subjects.length > 3) {
    subjects = subjects.substring(0, subjects.length - 2);
  }
  return subjects;
}

function getGrade() {
  for (let index = 0; index < avaliacao.length; index += 1) {
    if (avaliacao[index].checked) {
      return index;
    }
  }
  return -1;
}

function createElement(parent, tag, text) {
  const myNewElement = document.createElement(tag);
  if (text !== '') {
    myNewElement.innerText = text;
  }
  parent.appendChild(myNewElement);
}

function listResults1() {
  createElement(myform, auxiliary[1], 'Nome: ');
  createElement(myform, auxiliary[1], info.nome);
  createElement(myform, auxiliary[1], ' ');
  createElement(myform, auxiliary[1], info.sobrenome);
  createElement(myform, auxiliary[2], '');
  createElement(myform, auxiliary[1], 'Email: ');
  createElement(myform, auxiliary[1], info.email);
  createElement(myform, auxiliary[2], '');
  createElement(myform, auxiliary[1], 'Casa: ');
  createElement(myform, auxiliary[1], info.casa);
  createElement(myform, auxiliary[2], '');
}

function listResults2() {
  createElement(myform, auxiliary[1], 'Família: ');
  createElement(myform, auxiliary[1], info.familia);
  createElement(myform, auxiliary[2], '');
  createElement(myform, auxiliary[1], 'Matérias: ');
  createElement(myform, auxiliary[1], info.materias);
  createElement(myform, auxiliary[2], '');
  createElement(myform, auxiliary[1], 'Avaliação: ');
  createElement(myform, auxiliary[1], info.avaliacao);
  createElement(myform, auxiliary[2], '');
  createElement(myform, auxiliary[1], 'Observações: ');
  createElement(myform, auxiliary[1], info.observacoes);
  createElement(myform, auxiliary[2], '');
}

function submitForm() {
  info.nome = nome.value;
  info.sobrenome = sobrenome.value;
  info.email = email.value;
  info.casa = casa[casa.selectedIndex].value;
  info.familia = familia[getIndexFamily()].value;
  info.materias = listSubjects();
  info.avaliacao = avaliacao[getGrade()].value;
  info.observacoes = observacoes.value;
  myform.innerHTML = '';
  listResults1();
  listResults2();
  myform.style.display = 'inline-block';
}

submitBtn.addEventListener('click', submitForm);