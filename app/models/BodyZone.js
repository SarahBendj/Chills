const Core = require('./Core')

class BodyZone extends Core {
    static tableName = "Body_zone";

    constructor(obj){
        super(obj)
        this.name = obj.name;
        this.price= obj.price;
    }
}
module.exports = BodyZone;