import express from 'express';

const router = express.Router();

router.get('/all', (req, res) => {    
    res.send('All Teachers');
}).post('/create', (req, res) => {
    res.send('Add New Teacher');
}).put('/update', (req, res) => {
    res.send('Update Teacher');
}).delete('/delete', (req, res) => {
    res.send('Delete Teacher');
});

export default router;