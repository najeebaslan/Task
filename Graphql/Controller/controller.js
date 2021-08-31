const Cat = require('../Model/schemaUser');
const { HandleError, validateId } = require('../../errors');
const { validationUser } = require("../Model/schemaUser");

exports.getCateById = async Args => {
  try {
    const { error } = validateId(Args)
    if (error) return Error(`&404&${error.details[0].message}}`)
    const Response = await Cat.findById(Args._id);
    if (Response) {
      console.log(Response);
      return {
        __typename:"Cat",
        ...Response._doc
      }
    }
    else return HandleError(Response, 404, "not found  data")
  } catch (error) {
    console.log(error);
    return new Error(`&401&${error}`)
  }
}
exports.getCate = async (Args,context) => {
  try {
    const Response = await Cat.find();
    if (Response) {
      console.log(Response);
      context.res.setHeader('Authorization', `Bearer 'dd'`)
 
      return Response;
    }
    else return HandleError(Response, 404, "not found  data")
  } catch (error) {
    console.log(error);
    return new Error(`&401&${error}`)
  }
}


exports.CreateCat = async (args) => {
  try {
    console.log(args);
    const { error } = validationUser(args);
    if (error) return new Error(`&404&${error.details[0].message}`)
    const cat = new Cat({ name: args.userInput.name, username: args.userInput.username })
    await cat.save()
    if (cat) {
      return {
        __typename: "Cat",//This Is Name Database Collection
        ...cat._doc, //This is Response data
      };
    }
  } catch (error) {
    return new Error(`&401&${error}`)
  }

}


