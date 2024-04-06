export const typeDefs = `#graphql

    #defining a schema
    
    type Author {
        id:ID!
        name:String!
        books:[Book]
    }

    type Book {
        id:ID!
        title:String!
        publishedYear:Int
        author: Author
    }

    #get all authors and books
    type Query {
        authors: [Author]
        books:[Book]
    }

    #add new book
    type Mutation {
        addBook(title:String!, publishedYear:Int, authorId:ID!):Book!
    }

  
`;
