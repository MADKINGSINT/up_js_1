"use strict";

/*
###Задание 1
Необходимо создать класс Library. Конструктор класса, должен принимать начальный 
список книг (массив) в качестве аргумента. Убедитесь, что предоставленный массив 
не содержит дубликатов; в противном случае необходимо выбросить ошибку.
1. Класс должен содержать приватное свойство #books, которое должно хранить 
книги, переданные при создании объекта.
2. Реализуйте геттер-функцию allBooks, которая возвращает текущий список книг.
3. Реализуйте метод addBook(title), который позволяет добавлять книгу в список. 
Если книга с таким названием уже существует в списке, выбросьте ошибку с 
соответствующим сообщением.
4. Реализуйте метод removeBook(title), который позволит удалять книгу из списка 
по названию. Если книги с таким названием нет в списке, выбросьте ошибку с 
соответствующим сообщением.
5. Реализуйте метод hasBook(title), который будет проверять наличие книги в 
библиотеке и возвращать true или false в зависимости от того, есть ли такая 
книга в списке или нет.
*/
class Library {
  #books;

  constructor(books = []) {
    if (Array.isArray(books)) {
      this.#books = this.#removeDuplicates(books);
    } else {
      throw new Error("Начальный список книг должен быть массивом");
    }
  }

  get allBooks() {
    return this.#books;
  }

  addBook(title) {
    if (this.#books.some((book) => book.title === title)) {
      throw new Error(`Книга с названием '${title}' уже существует`);
    }

    this.#books.push({ title });
  }

  removeBook(title) {
    const index = this.#books.findIndex((book) => book.title === title);
    if (index === -1) {
      throw new Error(`Книги с названием '${title}' нет в списке`);
    }

    this.#books.splice(index, 1);
  }

  hasBook(title) {
    return this.#books.some((book) => book.title === title);
  }

  #removeDuplicates(books) {
    const uniqueBooks = [];

    for (const book of books) {
      if (!uniqueBooks.some((uniqueBook) => uniqueBook.title === book.title)) {
        uniqueBooks.push(book);
      }
    }

    return uniqueBooks;
  }
}

const books = [
  { title: "Книга 1" },
  { title: "Книга 2" },
  { title: "Книга 3" },
  { title: "Книга 1" },
];

const library = new Library(books);

console.log(library.allBooks); 

library.addBook("Книга 4");
console.log(library.allBooks); 

library.removeBook("Книга 2");
console.log(library.allBooks); 

console.log(library.hasBook("Книга 3")); 
console.log(library.hasBook("Книга 5")); 
