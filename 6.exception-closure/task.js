// задача 1

function parseCount(numberToParse) {
  if (isNaN(numberToParse)) {
    throw new Error("Невалидное значение")
  }
    return Number.parseFloat(numberToParse);
  }


function validateCount(numberToParse) {
    try {
        return parseCount(numberToParse);
    }
    catch (error) {
        return error;
    }    
}


// Задача 2

class Triangle{
    constructor(a, b, c) {
        if ((a + b) < c || (a +c) < b || (b + c) < a) {
            throw new Error('Треугольник с такими сторонами не существует')
        }
        this.a = a;
        this.b = b;
        this.c = c;
        
    }

    get perimeter() {
        return this.a + this.b + this.c;
    }

    get area() {
        const halfPerimeter = this.perimeter / 2
        return Number(Math.sqrt(halfPerimeter * (halfPerimeter - this.a) * (halfPerimeter - this.b) * (halfPerimeter - this.c)).toFixed(3)) ;
    }
}



function getTriangle (a, b, c) {
    try {
        let trg = new Triangle(a, b, c);
        return trg;
    }
    catch (error) {
        let err = {
            get perimeter() {
               return "Ошибка! Треугольник не существует";
            },
            get area() {
               return "Ошибка! Треугольник не существует";
            }
        }
        return err;
    }
    finally {

    }
}