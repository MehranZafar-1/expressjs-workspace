import express from 'express';

const allStudents = (req, res) => {
    res.send('All Students');
}

const newStudent = (req, res) => {
    res.send('Add New Student');
}

const updateStudent = (req, res) => {
    res.send('Update Student');
}

const deleteStudent = (req, res) => {
    res.send('Delete Student');
}

export {allStudents, newStudent, updateStudent, deleteStudent};