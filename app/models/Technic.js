const Core = require('./Core')
const dbClient = require("../services/dataBase");

class Technic extends Core {
    static tableName = "technic"
  //  static ohterTableName = "Technic"
    constructor(obj){
        super(obj)
        this.name = obj.name;
       
    }
   }
module.exports = Technic