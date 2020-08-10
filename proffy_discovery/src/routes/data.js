const proffys = [
  {
    name: "Diego Fernandes",
    avatar: "https://avatars2.githubusercontent.com/u/2254731?s=460&amp;u=0ba16a79456c2f250e7579cb388fa18c5c2d7d65&amp;v=4",
    whatsapp: "47999999999",
    bio: `Entusiasta das melhores tecnologias de química avançada.

    Apaixonado por explodir coisas em
    laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por
    uma das minhas explosões.`,
    subject: "Química",
    cost: "20",
    weekday: [0],
    time_from: [720],
    time_from: [1280]
  },
  {
    name: "Brinlo",
    avatar: "https://avatars2.githubusercontent.com/u/2254731?s=460&amp;u=0ba16a79456c2f250e7579cb388fa18c5c2d7d65&amp;v=4",
    whatsapp: "47999999999",
    bio: `Entusiasta das melhores tecnologias de química avançada. Apaixonado por explodir coisas em
    laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por
    uma das minhas explosões.`,
    subject: "Química",
    cost: "20",
    weekday: [0],
    time_from: [720],
    time_from: [1280]
  }
];

const subjects = [
  'Artes',
  'Biologia',
  'Ciencias',
  'Educação Física',
  'Física',
  'Geografia',
  'História',
  'Matemática',
  'Português',
  'Química'
];

const weekdays = [
  'Domingo',
  'Segunda-feira',
  'Terça-feira',
  'Quarta-feira',
  'Quinta-feira',
  'Sexta-feira',
  'Sábado',
];

function getSubject(subjectNumber) {
  const position = +subjectNumber - 1;

  return subjects[position];
}

function convertHoursToMinutes(time) {
  const [hour, minutes] = time.split(':');
  return Number(hour * 60) + minutes;
}

module.exports = {
  proffys,
  subjects,
  weekdays,
  getSubject,
  convertHoursToMinutes
}
