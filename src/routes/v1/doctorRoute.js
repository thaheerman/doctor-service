import express from 'express'
const router = express.Router()

import {getDoctors} from '../../controllers/doctorController.js'
// to get doctors with a category
router.get('/',getDoctors)

 export default {
    router
}