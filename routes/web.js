const express = require('express');
const router = express.Router();

// import StudentController from '../controller/studentController.js';
const StudentController = require('../controller/studentController')
// module.exports = router.get('/', StudentController.getAllDoc);

router.get('/', StudentController.getAllDoc);
router.post('/', StudentController.CreateDoc);
router.get('/edit/:id', StudentController.editDoc);
router.post('/update/:id', StudentController.updateDoc);
router.post('/delete/:id', StudentController.DeleteDoc);

module.exports = router;
