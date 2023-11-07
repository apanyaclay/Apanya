import db from '../../db/db.js'
// const db = require('../../db/db');

class userModel {
  listItems(callback) {
    db.query('SELECT * FROM users', (err, result) => {
      if (err) throw err;
      callback(result);
    });
  }

  getItem(userId, callback) {
    db.query('SELECT * FROM users WHERE id = ?', [userId], (err, result) => {
      if (err) throw err;
      callback(result[0]);
    });
  }

  addItem(user, callback) {
    db.query('INSERT INTO users SET ?', user, (err, result) => {
      if (err) throw err;
      callback(result.insertId);
    });
  }

  editItem(userId, user, callback) {
    db.query('UPDATE users SET ? WHERE id = ?', [user, userId], (err, result) => {
      if (err) throw err;
      callback(result.affectedRows);
    });
  }

  deleteItem(userId, callback) {
    db.query('DELETE FROM users WHERE id = ?', [userId], (err, result) => {
      if (err) throw err;
      callback(result.affectedRows);
    });
  }
}

export default new userModel();