const connection = require("../config/connection.js");

function printQuestionMarks(num) {
  var arr = [];
  for (var i = 0; i < num; i++) {
    arr.push("?");
  }
  return arr.toString();
}

function objToSql(ob) {
  var arr = [];
  for (var key in ob) {
    var value = ob[key];
    if (Object.hasOwnProperty.call(ob, key)) {
      if (typeof value === "string" && value.indexOf(" ") >= 0) {
        value = "'" + value + "'";
      }
      arr.push(key + "=" + value);
    }
  }
  return arr.toString();
}

const orm = {
  // ORM to select all info on db
  selectAll: function (tableInput, cb) {
    //   ask tutor about declaring here.... var vs let vs const?
    var queryString = "SELECT * FROM " + tableInput + ";";
    connection.query(queryString, function (err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },
  // ORM to insert info into db
  insertOne: function (table, cols, vals, cb) {
    var queryString = "INSERT INTO " + table;

    queryString += " (";
    queryString += cols.toString();
    queryString += ") ";
    queryString += "VALUES ( ";
    queryString += printQuestionMarks(vals.length);
    queryString += ") ";
    console.log(queryString);

    connection.query(queryString, vals, function (err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },
  // ORM to update info in db
  updateOne: function (table, objColVals, condition, cb) {
    var queryString = "UPDATE " + table;
    queryString += " SET ";
    queryString += objToSql(objColVals);
    queryString += " WHERE ";
    queryString += condition;
    console.log(queryString);
    connection.query(queryString, function (err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },
};

module.exports = orm;
