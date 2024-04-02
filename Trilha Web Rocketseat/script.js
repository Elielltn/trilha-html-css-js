let participantes = [
  {
    nome: "Mayk Brito",
    email: "mayk@gmail.com",
    dataInscricao: new Date(2024, 2, 22, 19, 20),
    dataCheckIn: new Date(2024, 2, 25, 22, 00),
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
    dataCheckIn: new Date(2024, 2, 28, 14, 45),
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
    dataCheckIn: new Date(2024, 2, 30, 18, 15),
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
  const dataCheckIn = dayjs(Date.now()).to(participante.dataCheckIn);
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

  const formData = new FormData(event.target);

  const participante = {
    nome: formData.get("nome"),
    email: formData.get("email"),
    dataInscricao: new Date(),
    dataCheckIn: null,
  };

  participantes = [participante, ...participantes];
  atualizarLista(participantes)
};
