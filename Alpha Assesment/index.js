const exp=require('express');
const app= exp();
const path= require('path');
const meod= require('method-override');
const ejsMate= require('ejs-mate')

const mon=require('mongoose');
mon.connect('mongodb://localhost:27017/Alpha', { useNewUrlParser:true,useUnifiedTopology:true})
.then(() =>{
    console.log("Mongo Connected")
})
.catch(err =>{
    console.log("ERROR DB CONNECTION")
})
const Paper= require('./models/news');


app.set('views',path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.engine('ejs',ejsMate);
app.use(exp.urlencoded({extended:true}));
app.use(meod('_method'))


app.get('/news', async(req,res,next)=>{
    try{
    console.log('hi newsboy');
    const papers= await Paper.find({})
     console.log(papers);
    res.render("news/index",{papers})
    }catch(e){
        next(e)
    }
})

app.get('/news/new', (req, res) => {
    res.render("news/new")
})
app.post('/news', async (req,res,next)=>{
    try{
    const newPaper= new Paper(req.body);

     await newPaper.save();
     console.log(newPaper);
    res.redirect(`/news/${newPaper._id}`)
    }catch(e){
        next(e)
    }
})

app.get('/news/:id', async(req,res,next)=>{
    try{
    const { id }= req.params;
    const p= await Paper.findById(id)
    
    // console.log(p)
    // res.send("founded")
    res.render("news/show",{p})
    }catch(e){
        next(e)
    }
})

app.get('/news/:id/edit', async(req, res) => {
    const { id }= req.params;
    const f= await Paper.findById(id);
    res.render("news/edit",{f})
})

app.put('/news/:id', async(req, res,next) => {
    try{
    const { id }= req.params;
    const f= await Paper.findByIdAndUpdate(id,req.body, {runValidators:true,new:true});
    res.redirect(`/news/${f._id}`)
    }catch(e){
        next(e)
    }
})

app.delete('/news/:id', async(req, res) => {
    const { id }= req.params;
    const f= await Paper.findByIdAndDelete(id);
    res.redirect(`/news`)
})

app.use((err, req, res, next) => {
    const { status = 500, message = 'Something Went Wrong' } = err;
    res.status(status).send(message)
})


app.listen(3001, ()=>{
    console.log("started")
})