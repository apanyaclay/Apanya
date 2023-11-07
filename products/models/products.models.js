import db from '../../db/db.js'
// const db = require('../../db/db');

class productModel {
  listItems(callback) {
    db.query('SELECT * FROM pos_items', (err, result) => {
      if (err) throw err;
      callback(result);
    });
  }

  getItem(productId, callback) {
    db.query('SELECT * FROM pos_items WHERE id = ?', [productId], (err, result) => {
      if (err) throw err;
      callback(result[0]);
    });
  }

  addItem(product, callback) {
    db.query('INSERT INTO pos_items SET ?', product, (err, result) => {
      if (err) throw err;
      callback(result.insertId);
    });
  }

  editItem(productId, product, callback) {
    db.query('UPDATE pos_items SET ? WHERE id = ?', [product, productId], (err, result) => {
      if (err) throw err;
      callback(result.affectedRows);
    });
  }

  deleteItem(productId, callback) {
    db.query('DELETE FROM pos_items WHERE id = ?', [productId], (err, result) => {
      if (err) throw err;
      callback(result.affectedRows);
    });
  }
}

export default new productModel();