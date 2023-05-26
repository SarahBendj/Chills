const Core = require('./Core')
const dbClient = require("../services/dataBase");

class Discount extends Core {
    static tableName = "discount";
    
    constructor(obj){
        super(obj)
        this.name = obj.name;
        this.price= obj.price
    }

  static async deleteOne(id) {
    const sqlQuery = `DELETE  FROM ${this.tableName} WHERE id=${id}`

        const response = await dbClient.query(sqlQuery);
      return response.rows[0];
        

    
  }
}
module.exports = Discount;