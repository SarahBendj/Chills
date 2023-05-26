const Core = require('./Core')

class Extra extends Core {
    static tableName = "extra";

    constructor(obj){
        super(obj)
        this.name = obj.name;
        this.price= obj.price;
    }
}
module.exports = Extra;