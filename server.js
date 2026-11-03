const express = require("express");

const app = express();


// Middleware to accept JSON request body
app.use(express.json());


// In-memory array to store students
let students = [];


// POST API - Create Student
app.post("/api/students", (req, res) => {

    const { id, name, email, course, age } = req.body;


    // Validate mandatory fields
    if (!id || !name || !email || !course || !age) {
        return res.status(400).json({
            message: "All fields are mandatory"
        });
    }


    // Check duplicate student ID
    const existingStudent = students.find(
        student => student.id === id
    );


    if (existingStudent) {
        return res.status(409).json({
            message: "Student ID already exists"
        });
    }


    // Create student object
    const student = {
        id,
        name,
        email,
        course,
        age
    };


    // Store student record
    students.push(student);


    // Success response
    res.status(201).json({
        message: "Student created successfully",
        student: student
    });

});


// Get all students
app.get("/api/students", (req, res) => {

    res.status(200).json({
        message: "Student records fetched successfully",
        students: students
    });

});


// Start server
app.listen(3000, () => {
    console.log("Server running on port 3000");
});