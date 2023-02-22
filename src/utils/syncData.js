import {Doctor} from '../models/doctorModel.js'
import {data} from '../assets/doctors.mjs'

const syncData = async()=>{
  await Promise.all(data.forEach(doctor=>{
    console.log(doctor);
      Doctor.create(doctor)
    }))
    console.log("data inserted successfully");
}
export {
    syncData
}