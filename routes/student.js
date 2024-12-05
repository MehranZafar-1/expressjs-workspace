import express from 'express';

import {allStudents, 
    newStudent, 
    updateStudent, 
    deleteStudent
} from '../controllers/student.js';
const router = express.Router();

// router.get('/all', (req, res) => {    
//     res.send('All Students');
// }).post('/create', (req, res) => {
//     res.send('Add New Student');
// }).put('/update', (req, res) => {
//     res.send('Update Student');
// }).delete('/delete', (req, res) => {
//     res.send('Delete Student');
// });

router.get("/all", allStudents);
router.post("/create", newStudent);
router.put("/update", updateStudent);
router.delete("/delete", deleteStudent);

export default router;