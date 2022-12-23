import express, { Request, Response } from 'express'
import 'dotenv/config'

const app = express()
app.use(express.json())

app.get('/', (req: Request, res: Response) => {
    res.send('<h1>Hi mom</h1>')
})

const port = Number(process.env.PORT) || 5000

const start = (port: number) => { 
    app.listen(port, () => {
      process.stdout.write('Server Deployed on:')
      console.log(`\x1b[33m`, `http://localhost:${port}/`);
    })  
}

start(port)