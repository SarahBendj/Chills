const dbClient = require('../services/dataBase')
const Core = require('./Core')


class Services extends Core {
    static tableName = "services";

    constructor(obj){
        super(obj)
        this.name = obj.name;
        this.price= obj.price
        this.img = obj.img;
        this.description = obj.description
     
    }
    static async post(img) {
       
        const sqlQuery = `INSERT INTO ${this.tableName} ("img") VALUES ($1)`;
        const value = [img]
        
        const result = await dbClient.query(sqlQuery, value);
        console.log(result)
        return result.rows[0] ;
    
}
}


// Utiliser la requête SQL pour insérer l'image dans la base de données

module.exports = Services;