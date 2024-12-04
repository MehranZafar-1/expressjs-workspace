// Create Folder
// npm init -y
// npm i express
// Create Instance express
// Provide Port
// Basic Route /
import express from 'express';

const app = express();

// HTTP Methods
// GET - Read Data
// POST - Create Data
// PUT - Update Data
// PATCH - Partial Update Data
// DELETE - Delete Data 
// ALL - Any HTTP Request Method


// Basic Routing
// app.get('/', (req, res) => {
//     res.send('Home');
// });


// app.get('/about', (req, res) => {
//     res.send('About');
// });
// app.get('/contact', (req, res) => {
//     res.send('Contact');
// });


// String Pattern Path
// app.get("/ab?cd", (req, res) => {
//     res.send("If the user hit (acd) or (abcd) then this will run");
// });


// Regex - Regular Expression
// app.get(/x/, (req, res) => {
//     res.send("If the path includes the letter (x) it will work. ");
// });

// will work for users/four digits
// app.get(/^\/users\/[0-9]{4}$/, (req, res) => {
//     res.send("Working");
// })


// Nested Routes
// app.get('/products/iphone', (req, res) => {
//    res.send("This will only work if you provide /products/iphone"); 
// });


// Single callback
// app.get('/single-cb', (req, res) => {
//     res.send('Single Callback');
// });


// Double callback using next
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


// array of call back
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


// Mix of all
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




app.listen(8000, () => {
    console.log('Server is running on port 8000');
});