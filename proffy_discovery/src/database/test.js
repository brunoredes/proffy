const Database = require('./db');
const createProffy = require('./createProffy');

Database.then(async (db) => {

  proffyValue = {
    name: "Diego Fernandes",
    avatar: "https://avatars2.githubusercontent.com/u/2254731?s=460&amp;u=0ba16a79456c2f250e7579cb388fa18c5c2d7d65&amp;v=4",
    whatsapp: "47999999999",
    bio: `Entusiasta das melhores tecnologias de química avançada.

    Apaixonado por explodir coisas em
    laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por
    uma das minhas explosões.`,

  }

  classValue = {
    subject: 1,
    cost: "20",
    // proffy_id
  }

  classScheduleValues = [
    {
      weekday: 0,
      time_from: 720,
      time_to: 1280
    },
    {
      weekday: 1,
      time_from: 520,
      time_to: 1280
    },
  ]

  // await createProffy(db, { proffyValue, classValue, classScheduleValues });

  // const selectedProffys = await db.all("SELECT * FROM proffys");
  // console.table(selectedProffys);

  // const selectedClassesProffy = await db.all(`
  //   SELECT classes.*, proffys.*
  //   FROM proffys
  //   INNER JOIN classes ON
  //     proffys.id = classes.proffy_id
  //   WHERE classes.proffy_id = 1;
  // `);
  // console.log(selectedClassesProffy);


  // const selectClassesSchedules = await db.all(`
  //   SELECT * FROM class_schedule as cs
  //   WHERE cs.class_id = "1"
  //   AND cs.weekday = "0";
  //   AND cs.time_from <= "520"
  //   AND cs.time_to > "520"
  // `);

  // console.log(selectClassesSchedules);
});
