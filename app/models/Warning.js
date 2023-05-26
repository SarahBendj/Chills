const Core = require('./Core')

const dbClient = require("../services/dataBase");

class Warning extends Core {
    static tableName = "warning";

    constructor(obj){
        super(obj)
        this.warning_status = obj.warning_status
        this.reception_controle= obj.reception_controle;
        this.fridge_controle= obj.fridge_controle;
        //todo this.sanitizing_controle= obj.sanitizing_controle;
        this.createdAt = obj.createdAt;
        this.updatedAt = obj.updatedAt
    }
    static async joinWarning() {
      
          const sqlQuery = `SELECT warning.id, warning.createdat , warning.updatedat , warning.description ,
           fridge_controle.id as "fridgeId" , reception_controle.id as "receptionId", reception_controle.description as "receptionDesc", warning_status FROM  warning
          left JOIN fridge_controle ON fridge_controle_id = fridge_controle.id
          left JOIN reception_controle ON reception_controle_id = reception_controle.id`;
          const response = await dbClient.query(sqlQuery)

             
         return response.rows;
        
      }
      static async joinTrueWarningOnly() {
        const sqlQuery = `SELECT warning.createdat , warning.updatedat , warning.description , fridge_controle.id as "fridgeId" , reception_controle.id as "receptionId", reception_controle.description as "receptionDesc", warning_status FROM  warning
        left JOIN fridge_controle ON fridge_controle_id = fridge_controle.id
        left JOIN reception_controle ON reception_controle_id = reception_controle.id
        where warning_status = 'true'`;
          const response = await dbClient.query(sqlQuery)
         return response.rows;
      }
    
}
module.exports = Warning