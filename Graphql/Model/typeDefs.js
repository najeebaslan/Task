
const { gql } = require('apollo-server-express')

exports.typeDefs = gql`
  union CandyResult = Cat | Response 


  type Cat {
  	_id: ID!
  	name: String!
    username:String!
  }

type User  {
    _id:ID!
  	name: String!
    username:String!
    emile:String!
    password:String # ازلنا علامة التعجب لانه من المحتل ان لا نعيد كلمة المرور 
  }
  input UserInput  {
  	name: String!
    username:String!
    emile:String!
    password:String!
  }
  input CatInput  {
    name: String!
    username:String!
  }

  type Query {
    hello:String!
    cats:[Cat!]!
    getCateById(_id:ID!):Cat!
  }

  type Mutation {
  	createUser(userInput:UserInput): User
  	createCat(userInput:CatInput): Cat

  }
  
  type Response {
    status: Int!
    message: String!
  }
 
`
