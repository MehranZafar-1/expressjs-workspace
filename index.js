// Create Folder
// npm init -y
// npm i express
// Create Instance express
// Provide Port
// Basic Route /
import express, { query } from 'express';

const app = express();

// HTTP Methods
// GET - Read Data
// POST - Create Data
// PUT - Update Data
// PATCH - Partial Update Data
// DELETE - Delete Data 
// ALL - Any HTTP Request Method


// Basic Routing --------------------
// app.get('/', (req, res) => {
//     res.send('Home');
// });


// app.get('/about', (req, res) => {
//     res.send('About');
// });
// app.get('/contact', (req, res) => {
//     res.send('Contact');
// });


// String Pattern Path --------------------
// app.get("/ab?cd", (req, res) => {
//     res.send("If the user hit (acd) or (abcd) then this will run");
// });


// Regex - Regular Expression --------------------
// app.get(/x/, (req, res) => {
//     res.send("If the path includes the letter (x) it will work. ");
// });

// will work for users/four digits
// app.get(/^\/users\/[0-9]{4}$/, (req, res) => {
//     res.send("Working");
// })


// Nested Routes --------------------
// app.get('/products/iphone', (req, res) => {
//    res.send("This will only work if you provide /products/iphone"); 
// });


// Single callback --------------------
// app.get('/single-cb', (req, res) => {
//     res.send('Single Callback');
// });


// Double callback using next --------------------
// app.get(
//     '/double-cb', 
//     (req, res, next) => {
//     console.log('First Callback');
//     next(); //allows to jump from first to second
// }, 
// (req, res) => {
//     res.send('Second Callback');
// }
// );


// array of call back --------------------
// const cb1 = (req, res, next) => {
//     console.log('First Callback');
//     next();
// }
// const cb2 = (req, res, next) => {
//     console.log('Second Callback');
//     next();
// }
// const cb3 = (req, res) => {
//     console.log('Third Callback');
//     res.send('Array of Callbacks');
// }
//app.get("/array-cb", [cb1, cb2, cb3]);


// Mix of all --------------------
// const cb1 = (req, res, next) => {
//     console.log('First Callback');
//     next();
// }
// const cb2 = (req, res, next) => {
//     console.log('Second Callback');
//     next();
// }
// app.get("/mix-all", [cb1, cb2], (req, res, next) => {
//     console.log('Third Callback');
//     next();
// }, (req, res, next) => {
//     console.log('Fourth Callback');
//     res.send('Mix of all');
// });


// Refactoring Code --------------------
// Before
// app.get('/student', (req, res) => {
//     res.send('All Students');
// })
// app.post('/student', (req, res) => {
//     res.send('Add New Student');
// })
// app.put('/student', (req, res) => {
//     res.send('Update Students');
// })
// app.delete('/student', (req, res) => {
//     res.send('Delete Students');
// })
//
// After
// app.route('/student').get((req, res) => {
//     res.send('All Students');
// }).post((req, res) => {
//     res.send('Add New Student');
// }).put((req, res) => {
//     res.send('Update Student');
// }).delete((req, res) => {
//     res.send('Delete Students');
// });


// Using Router --------------------
// 1. Create routes folder and put routes in separate file
// 2. Create instance of express.Router()
// 3. Instead of app.method change to router.method
// 4. Export router
// 5. Import router 
// 6. use (app.use) built-in middleware and provide your routers

// import students from './routes/student.js';
// import teachers from './routes/teacher.js';

// app.use('/students', students);
// app.use('/teachers', teachers);

// Route Params - values specified in the url
// (/:) is used for route params
// stored in req.params
// app.get('/student/delete/:id', (req, res) => {
//     const {model} = req.params;
//     res.send("Delete Student " + req.params.id);
// })
// //multiple parameters
// app.get('/student/update/:id/:email', (req, res) => { 
//     const {id, email} = req.params;
//     res.send("Update Student " + req.params.id + " with email " + req.params.email);
// })
// // separate function of app for parameters
// app.param('id', (req, res, next, id) => {
//     console.log(id);
//     next();
// });
// app.get('/student/:id', (req, res) => {
//     res.send("This is student id path");
// })


// Controllers - functions that handle requests ---------------------------------------------------------------------------------------------------
// import students from './routes/student.js';

// app.use('/students', students);


// Query String (?) ---------------------------------------------------------------
// send data from client to server 
// separate with & and specify with =
// app.get('/product', (req, res) => {
//     //res.send('Response OK ' + req.query.category)
//     const {category, id} = req.query;
//     res.send('Category: ' + category + " id: " + id);
// })

// Sending Data from backend to client -------------------------------------------------------------------------------------------------------------
// import products from './products.js';
// app.get('/', (req, res) => {
//     res.json(products);
// })

// Middleware - performs function --------------------------------------------------------------------
// import userCredentials from './middleware/logs.js';
// app.use(userCredentials); // allows to use middleware for multiple routes
// app.get('/', userCredentials, (req, res) => {
//   res.send('Hello Admin');
// });
// app.get('/about', userCredentials, (req, res) => {
//     res.send('Hello Admin');
//   });

// Serving Static Files ---------------------------------------------------------------------------------------------
import path from 'path';

app.use(express.static('./public'));

app.get('/', (req, res) => {
    res.sendFile(path.resolve(path.join(process.cwd(), './public/index.html')));
});

app.listen(8000, () => {
    console.log('Server is running on port 8000');
});