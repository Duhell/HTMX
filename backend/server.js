import express, { urlencoded } from 'express'
import cors from 'cors'
const app = express();
const Route = express.Router();

app.use(cors())
app.use(express.static('views'))
app.use(express.urlencoded({ extended:true}));
app.use(express.json());
app.set('view engine','ejs');
app.use('/api',Route);

// API ROUTES
Route.get('/home',(req,res)=>res.sendFile('Home.html',{ root: './views' }))
Route.get('/about',(req,res)=>res.sendFile('About.html',{ root: './views' }))
Route.get('/services',(req,res)=>res.sendFile('Service.html',{ root: './views' }))
Route.get('/contact',(req,res)=>res.sendFile('Contact.html',{ root: './views' }))

app.listen(3000,()=>console.log('Server running on port 3000'))