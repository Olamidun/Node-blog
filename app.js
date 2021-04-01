const express = require('express')
const morgan = require('morgan')
const mongoose = require('mongoose')
const Blog = require('./models/blog')


// Instance of express app
const app = express()

// CONNECT TO MONGODB
const dbURI = '**********************'

mongoose.connect(dbURI, {useNewUrlParser: true, useUnifiedTopology: true}).then((result) =>{
    app.listen(3000)
}).catch((err) =>{
    console.log(err)
})

// Register View Engine
app.set('view engine', 'ejs')


// MIDDLEWARE FOR STATIC FILES

app.use(express.static('public'))

app.use(morgan('dev'));

app.get('/', (req, res)=>{
    
    res.redirect('/blogs')
});

app.get('/blogs', (req, res) =>{
    Blog.find()
    .then((result) =>{
        res.render('index', {title: 'All blogs', blogs: result})
    })
    .catch((err) =>{
        console.log(err)
    })
})
app.get('/about', (req, res)=>{
    res.render('about', {about: 'About'})
    // res.send('<p>About page</p>')
});


app.get('/blogs/create', (req, res)=>{
    res.render('create', {create: 'Create Posts'})
})

// 404 Error
app.use((req, res) =>{
    res.status(404).render('404', {404: '404'})
})
