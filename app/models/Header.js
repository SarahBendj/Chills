const Core = require('./Core');


class Header extends Core {
    static tableName = "header";

    constructor(obj){
        super(obj)
        this.name = obj.name;
       
    }
    
    

};

module.exports = Header;