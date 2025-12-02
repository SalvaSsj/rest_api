import {Request,Response} from 'express'
import Products from '../models/Product.model'

export const createProduct = async (req: Request,res: Response)=>{
    const product = await Products.create(req.body)

    const saveProduct = await product.save()
    
    res.json({data: saveProduct})
}