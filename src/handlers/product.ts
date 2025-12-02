import {Request,Response} from 'express'
import { check,validationResult } from 'express-validator'
import Products from '../models/Product.model'

export const createProduct = async (req: Request,res: Response)=>{
    try{
        const product = await Products.create(req.body)    
        res.json({data: product})
    }catch(error){
        console.log(error)
    }




}