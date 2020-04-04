"use strict";
var SingletonClassDemo = (function () {
    function SingletonClassDemo(id) {
        this.id = id;
    }
    SingletonClassDemo.getInstance = function () {
        if (SingletonClassDemo.instance) {
            return this.instance;
        }
        this.instance = new SingletonClassDemo("007");
        return this.instance;
    };
    return SingletonClassDemo;
}());
var childObj = SingletonClassDemo.getInstance();
var childObj1 = SingletonClassDemo.getInstance();
console.log(childObj);
console.log(childObj1);
//# sourceMappingURL=Singleton.js.map