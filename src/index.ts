import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import morgan from 'morgan'
import testRoute from './route/sample'

function main() {
    let app = express()
    //setup express
    app.use(morgan('[:date[web]] :method :url :status'))
    app.use(bodyParser.json()) // for parsing application/json
    app.use(cors()) //to avoid CORS problems
    app.use(bodyParser.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
    //---routes
    app.use('/test', testRoute)

    app.listen(3000, () => {
        console.log('server on')
    })
}
main()

