const data = {
  authors: [
    { id: "1", name: "Chirag Goel", bookIds: ["101", "102"] },
    { id: "2", name: "Akshay Saini", bookIds: ["103"] },
  ],
  books: [
    {
      id: "101",
      title: "Namaste Frontend System Design",
      publishedYear: 2000,
      authorId: "1",
    },
    { id: "102", title: "Book 2", publishedYear: 2010, authorId: "1" },
    { id: "103", title: "Book 3", publishedYear: 2020, authorId: "2" },
  ],
};
export const resolvers = {
  //list of books with author info
  Book: {
    author: (parent, args, context, info) => {
      console.log(parent); // here is Book
      return data.authors.find(
        (authorDetail) => authorDetail.id === parent.authorId
      );
    },
  },

  //list of author have related to books
  Author: {
    books: (parent, args, context, info) => {
      console.log(parent); // here is author
      return data.books.filter((book) => parent.bookIds.includes(book.id));
    },
  },
  Query: {
    //this return is hardcoded and this is the result we get query authors
    // authors: () => {
    //   return [
    //     {
    //       id: 1,
    //       name: "ABJ",
    //     },
    //   ];
    authors: () => {
      return data.authors;
    },
    //this return is hardcoded and this is the result we get query books
    books: () => {
      return data.books;
      //   return [
      //     {
      //       id: 1,
      //       title: "work hard",
      //       publishedYear: 2020,
      //     },
      //   ];
    },
  },
  Mutation: {
    addBook: (parent, args, context, info) => {
      console.log(args); // it will return our input to store in backend
      const newBook = { ...args, id: data.books.length + 1 };
      data.books.push(newBook);
      return newBook;
    },
  },
};
