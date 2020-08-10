const { subjects, weekdays, convertHoursToMinutes, getSubject } = require('../../routes/data');
const Database = require('../../database/db');

module.exports = {
  async index(request, response) {
    const filters = request.query;

    if (!filters.subjects || !filters.weekdays || !filters.time_time) {
      return response.render('study.html', {
        filters, subjects, weekdays
      });
    }

    const timeToMinutes = convertHoursToMinutes(filters.time);

    const query = `
        SELECT classes.*, proffys.*
        FROM proffys as p
        INNER JOIN classes as c
          ON c.proffy_id = p.id
        WHERE
          EXISTS(
          SELECT cs.* FROM class_schedule as cs
          WHERE cs.class_id = c.id
          AND cs.weekday = ${filters.weekdays};
          AND cs.time_from <= ${timeToMinutes}
          AND cs.time_to > ${timeToMinutes}
                )
        AND c.subject = '${filters.subjects}'
        `;
    try {
      const db = await Database;

      const proffys = await db.all(query);

      proffys.map(p => p.subject = getSubject(p.subject));

      return response.render('study.html', { proffys, subjects, filters, weekdays });
    } catch (err) {
      console.log(err)
    }
  }
}
