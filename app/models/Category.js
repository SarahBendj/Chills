const Core = require('./Core')

class Category extends Core {
    static tableName = "category";
    
    constructor(obj){
        super(obj)
        this.name = obj.name;
        this.img= obj.img
    }

 
}
module.exports = Category;