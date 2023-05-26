const Core = require('./Core')

class Appointement extends Core {
    static tableName = "appointement"
    constructor(obj){
        super(obj)
        this.discount = obj.discount;
        this.discount_sale = obj.discount_sale;
        this.drvDate = obj.drvDate;
        this.app_user_id = obj.app_user_id;
        this.periods_id = obj.periods_id;
        this.services_id = obj.services_id;
        this.description = obj.description;
        this.createdAt = obj.createdAt;
        this.conditions = obj.conditions;  
    }
    
    
}
module.exports = Appointement;