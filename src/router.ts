import {Router} from 'express'
import {createProduct} from './handlers/product'

const router = Router()

//Routing
router.get('/',(req,res)=>{
    res.json("HOLA get")
})

router.post('/',createProduct)

router.put('/',(req,res)=>{
    res.json("HOLA put")
})

router.patch('/',(req,res)=>{
    res.json("HOLA patch")
})

export default router
