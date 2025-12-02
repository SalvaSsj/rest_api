import {Router} from 'express'
import {createProduct} from './handlers/product'
import {body} from 'express-validator'
import { handleImputError } from './middleware'

const router = Router()

//Routing
router.get('/',(req,res)=>{
    res.json("HOLA get")
})

router.post('/',
        //validacion
    body ('name').
        notEmpty().withMessage('Nombre del producto vacio'),
    body ('price').isNumeric().withMessage('No es numero').
        notEmpty().withMessage('Precio del producto vacio').
        custom(value => value=>0).withMessage('Precio no valido'),
    handleImputError,
    createProduct)

router.put('/',(req,res)=>{
    res.json("HOLA put")
})

router.patch('/',(req,res)=>{
    res.json("HOLA patch")
})

export default router
