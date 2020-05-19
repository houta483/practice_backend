const db = require('./MessageModel');

module.exports = {
  postMessage(req, res, next) {
    const { message, password } = req.body
    const postMessageScript = `INSERT INTO Message (message, password) VALUES ("${message}", "${password}")`

    db.query(postMessageScript, (err, result) => {
      if (err) throw err;
      else { res.locals.posted = result }
    })
    return next();
  },

  async getMessage(req, res, next) {
    const getMessageScript = 'SELECT * FROM Message'

    db.query(getMessageScript, (err, result) => {
      if (err) throw err;
      else { res.locals.messages = result }
      console.log(result)
    })
    return next();
  },

  deleteMessage(req, res, next) {
    const { id } = req.body
    const deleteMessageScript = `DELETE FROM Messages WHERE id=${id}`

    db.query(deleteMessageScript, (error, result) => {
      if (error) throw error
      else { res.locals.delete = result}
    })
    return next();
  }
}