import express from 'express';
import {
    createUniversity,
    editUniversity,
    getAllUniversity,
    deleteUniversity,
    getOneUniversity,
    getOneUniversityByName
} from "../controllers/universityController.js";

const router = express.Router();

router.route('/createUniversity').post(createUniversity);
router.route('/getAllUniversity').get(getAllUniversity);
router.route('/getOneUniversity/:id').get(getOneUniversity).put(editUniversity);
router.route('/getOneUniversity/:universityName').get(getOneUniversityByName)
router.route('/editUniversity/:id').put(editUniversity);
router.route('/deleteUniversity/:id').delete(deleteUniversity);


export default router;