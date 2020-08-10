const { proffys, subjects, weekdays, getSubject, convertHoursToMinutes } = require('../../routes/data');
const Database = require('sqlite-async');

module.exports = {
  index(request, response) {
    return response.render('give-classes.html', {
      subjects, weekdays
    });
  },

  async store(request, response) {
    const createProffy = require('../../database/createProffy');
    // const data = request.body;

    const proffyValue = {
      name: request.body.name,
      avatar: request.body.avatar,
      whatsapp: request.body.whatsapp,
      bio: request.body.bio,
    }

    const classValue = {
      subject: request.body.subject,
      cost: request.body.cost,
    };

    const classScheduleValues = request.body.weekday.map((weekday, i) => {
      return {
        weekday,
        time_from: convertHoursToMinutes(request.body.time_from[i]),
        time_to: convertHoursToMinutes(request.body.time_to[i]),
      }
    });

    try {
      const db = await Database;

      await createProffy(db, {
        proffyValue,
        classValue,
        classScheduleValues
      });

      let queryString = `?subject=${request.body.subject}`;
      queryString += `&weekday=${request.body.weekday[0]}`;
      queryString += `&time=${request.body.time_from[0]}`;

      return response.redirect('/study' + queryString);

    } catch (error) {
      console.error(error);
    }



  }
}
