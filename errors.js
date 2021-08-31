


const Joi=require('@hapi/joi')


exports.CustomError = CustomError = (err) => {
  console.log(err);
  var resultStatus, resultMessage;
  const string = err.message;
  if (string.startsWith('&')) {
    resultStatus = string.replace(/&/g, '\u000B').split('\u000B');
    resultMessage = string.replace(/[0-9]/g, '').split('&&');
    return ({ message: resultMessage[1], status: Number(resultStatus[1]) })
  } else return ({ message: err.message, status: 400 })
}


exports.HandleError = HandleError = (data, status, error) => {
  if (data == null || data == [null] || data == undefined) {
    return new Error(`&${status}&${error}`)
  }
}

exports. validateId=validateId=(args)=>{
  const Schema = { _id: Joi.string().required(),};
  return Joi.validate(args,Schema)
 }




