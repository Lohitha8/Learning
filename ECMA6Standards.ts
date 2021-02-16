class ECMAStandards {

    arrayValue = [1, 2, 3, 4, 5];
    constructor() {
        //const declarations
        const a = 10;
        this.defualtParameterValues(4); //output 4 7 8
        this.defualtParameterValues(4, 10, 20); //output 4 10 20

        this.restParameter(1, 3, 'lohi', 'potti', 34); // ouput 1 4

        this.interpolation();
    }

    add() {
        //block scoped variables
        let a = 20;
        let b = 30;
    }

    usingExpresionBodies() {
        //expression bodies
        let transformedArray = this.arrayValue.map(x => 2 * x)
            ;

        //statement bodies
        let newArray = [];
        this.arrayValue.forEach(x => {
            if (x % 2 === 0) {
                newArray.push(x);
            }
        });

    }

    defualtParameterValues(x, y = 7, z = 8) {
        console.log(x + ' ' + y + ' ' + z);
    }

    restParameter(x, ...a) {
        console.log(x + ' ' + a.length);
    }

    interpolation() {
        var customer = { name: "Foo" };
        var card = { amount: 7, product: "Bar", unitprice: 42 }
        var message = `Hello ${customer.name}`;
        console.log(message);
    }


    shorthandObject() {
        let name = 'potti';
        let age = 47;
        let obj = { name: name, age: age }; // ES5
        let obj1 = { name, age }; //ES6
    }
}