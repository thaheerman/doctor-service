import {catchAsync} from '../utils/catchAsync.js'
import {Doctor} from '../models/doctorModel.js'
import {ApiError}from '../utils/ApiError.js'

const getDoctors = catchAsync(async(req,res)=>{
    const {category}=req.query
    const doctors = await Doctor.findOne({category})
    res.status(200).json({success:true,doctors})
})
export{
    getDoctors
}