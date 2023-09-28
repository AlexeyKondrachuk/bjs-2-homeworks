// Задача 1

class PrintEditionItem {
    constructor(name, releaseDate, pagesCount, type = null) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.state = 100;
        this.type = null;
    }

    fix() {
        this.state *=1.5;
    }

    set state(num) {
    if (num < 0) {
        this.state = 0;
    }
    if (num > 100) {
        this._state = 100;
    }
    else {
        this._state = num;
    }
    }

    get state() {
        return this._state;
    }
}

class Magazine extends PrintEditionItem {
    type = "magazine";
}


class Book extends PrintEditionItem {
    type = "book"
    constructor (author, name, releaseDate, pagesCount, type = 'book') {
     super(name, releaseDate, pagesCount, type) ;
     this.author = author;
    }

} 

class NovelBook extends Book {
        type = "novel";
}

class FantasticBook extends Book {
       type = "fantastic"; 
  
}

class DetectiveBook extends Book {
       type = "detective";
    }

  // Задача 2


    class Library {
        constructor(name) {
            this.name = name;
            this.books = [];
        }
        addBook(book) {
            if (book.state > 30) {
                return this.books.push(book);
            }
        }
    
        findBookBy(type, value) {
           const search = this.books.find((item) => item[type] === value)
           return search || null;
        }


        giveBookByName(bookName) {
            const findBook = this.books.findIndex(item => item.name === bookName);

            if (findBook === - 1) {
                return null
            } 
          
            return this.books.splice(findBook, 1)[0];
            
        }
    }

   // Задача 3

    class Student {
        constructor(name) {
            this.name = name;
            this.marksl = {};
        }
    
        addMarks(mark, subject) {
            if (mark <2 || mark > 5) {
                return;
            }

            if(!this.marks[subject]) {
                this.marks[subject] = [];
            }
            
        
            this.marks[subject].push(mark);
            


        }
       
        getAverageBySubject(subject) {
            if(!this.marks[subject]) {
                return 0;
            } 
            return this.marks[subject].reduce((acc, item) => acc + item) / this.marks[subject].length
        }
      
        getAverage() {
           let subjects = Object.keys(this.marks);
           if (subjects.length === 0) {
            return 0;
           }
        
           return objects.reduce((acc, subject) => acc + this.getAverageBySubject(subject), 0) / subjects.length;
        }
    }







