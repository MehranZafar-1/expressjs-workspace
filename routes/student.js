import express from 'express';

const router = express.Router();

router.get('/all', (req, res) => {    
    res.send('All Students');
}).post('/create', (req, res) => {
    res.send('Add New Student');
}).put('/update', (req, res) => {
    res.send('Update Student');
}).delete('/delete', (req, res) => {
    res.send('Delete Student');
});

export default router;