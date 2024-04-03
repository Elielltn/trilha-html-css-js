let participantes = [
  {
    nome: "Mayk Brito",
    email: "mayk@gmail.com",
    dataInscricao: new Date(2024, 2, 22, 19, 20),
    dataCheckIn: null,
  },
  {
    nome: "Maria Santos",
    email: "maria@gmail.com",
    dataInscricao: new Date(2024, 2, 22, 11, 15),
    dataCheckIn: new Date(2024, 2, 24, 16, 20),
  },
  {
    nome: "Carlos Oliveira",
    email: "carlos@gmail.com",
    dataInscricao: new Date(2024, 2, 22, 12, 0),
    dataCheckIn: new Date(2024, 2, 25, 18, 30),
  },
  {
    nome: "Ana Costa",
    email: "ana@gmail.com",
    dataInscricao: new Date(2024, 2, 22, 13, 45),
    dataCheckIn: new Date(2024, 2, 26, 10, 15),
  },
  {
    nome: "Pedro Santos",
    email: "pedro@gmail.com",
    dataInscricao: new Date(2024, 2, 22, 14, 30),
    dataCheckIn: new Date(2024, 2, 27, 12, 0),
  },
  {
    nome: "Luisa Oliveira",
    email: "luisa@gmail.com",
    dataInscricao: new Date(2024, 2, 22, 15, 15),
    dataCheckIn: null,
  },
  {
    nome: "Rafaela Pereira",
    email: "rafaela@gmail.com",
    dataInscricao: new Date(2024, 2, 22, 16, 0),
    dataCheckIn: new Date(2024, 2, 29, 16, 30),
  },
  {
    nome: "Gustavo Martins",
    email: "gustavo@gmail.com",
    dataInscricao: new Date(2024, 2, 22, 16, 45),
    dataCheckIn: null,
  },
  {
    nome: "Juliana Costa",
    email: "juliana@gmail.com",
    dataInscricao: new Date(2024, 2, 22, 17, 30),
    dataCheckIn: new Date(2024, 2, 31, 20, 0),
  },
  {
    nome: "Fernando Almeida",
    email: "fernando@gmail.com",
    dataInscricao: new Date(2024, 2, 22, 18, 15),
    dataCheckIn: new Date(2024, 3, 1, 10, 45),
  },
];

const criarNovoParticipante = (participante) => {
  const dataInscricao = dayjs(Date.now()).to(participante.dataInscricao);
  let dataCheckIn = dayjs(Date.now()).to(participante.dataCheckIn);

  if (participante.dataCheckIn == null) {
    dataCheckIn = `
      <button
        data-email="${participante.email}"
        onclick="fazerCheckIn(event)"
      >
        Confirmar check-in
      </button>
    `;
  }

  return `
  <tr>
    <td>
      <strong>${participante.nome}</strong>
      <br />
      <small>${participante.email}</small>
    </td>
    <td>${dataInscricao}</td>
    <td>${dataCheckIn}</td>
  </tr>
  `;
};

const atualizarLista = (participantes) => {
  let output = "";
  for (let participante of participantes)
    output = output + criarNovoParticipante(participante);

  document.querySelector("tbody").innerHTML = output;
};

atualizarLista(participantes);

const adicionarParticipante = (event) => {
  event.preventDefault();

  const dadosDoFormulario = new FormData(event.target);

  const participante = {
    nome: dadosDoFormulario.get("nome"),
    email: dadosDoFormulario.get("email"),
    dataInscricao: new Date(),
    dataCheckIn: null,
  };

  // verificar se o participante ja existe
  const participanteExiste = participantes.find(
    (p) => p.email == participante.email
  );

  if (participanteExiste) {
    alert("Email já cadastrado!");
    return;
  }

  participantes = [participante, ...participantes];
  atualizarLista(participantes);

  //limpar o formulario
  event.target.querySelector('[name="nome"').value = "";
  event.target.querySelector('[name="email"').value = "";
};

const fazerCheckIn = (event) => {
  // confirmar se realmente quer fazer check-in
  const mensagemConfirmacao = "Tem certeza que deseja fazer o check-in?";
  if (confirm(mensagemConfirmacao) == false) return;
  // encontrar o participante dentro da lista
  const participante = participantes.find(
    (p) => p.email == event.target.dataset.email
  );
  // atualizar o check-in do participante
  participante.dataCheckIn = new Date();
  //atualizar a lista de participantes
  atualizarLista(participantes);
};
