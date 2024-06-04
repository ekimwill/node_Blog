const morgan = require('morgan');
const fs=require('fs')
const path=require('path')
const config=require('./config')
morgan.token('message', (req, res) => res.locals.errorMessage || '');
const getIpformat=()=>{
    config.env=='production'?':remote-adress':''
}

const accessLogStream= fs.createWriteStream(
    path.join(__dirname,'..','log/access.log'),
    {flags: 'a'})

const successResponseFormat=`${getIpformat()} :method :url :status :response-time ms :user-agent :date`
const successHandler=morgan(successResponseFormat,{
    stream:accessLogStream,
    skip:(req,res)=>res.statusCode>=400,
})
const errorResponseFormat=`${getIpformat()} :method :url :status :response-time ms :user-agent :date - error-message: :message`
const errorHandler=morgan(errorResponseFormat,{
    stream:accessLogStream,
    skip:(req,res)=>res.statusCode<400,
})
module.exports = { successHandler, errorHandler}