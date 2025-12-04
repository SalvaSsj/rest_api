import {Router} from 'express'
import {createProduct, getProducts, getProductById, updateProduct, updateAvailability, deleteProduct} from './handlers/product'
import {body, param} from 'express-validator'
import { handleImputError } from './middleware'

const router = Router()

//Routing
router.get('/', getProducts)

router.get('/:id',
    param('id').isInt().withMessage('Id no valido'), 
    handleImputError,    
    getProductById)

router.post('/',
    //validacion
    body ('name').notEmpty().withMessage('Nombre del producto vacio'),
    body ('price').isNumeric().withMessage('No es numero').
        notEmpty().withMessage('Precio del producto vacio').
        custom(value => value => 0).withMessage('Precio no valido'),
    handleImputError,
    createProduct)


router.put('/:id',
    //validacion
    body ('name').notEmpty().withMessage('Nombre del producto vacio'),
    body ('price').isNumeric().withMessage('No es numero').
        notEmpty().withMessage('Precio del producto vacio').
        custom(value => value > 0).withMessage('Precio no valido'),
    body('availability').isBoolean().withMessage('Valor debe ser boolean'),
    handleImputError,
    updateProduct)

router.patch('/', 
    //validacion
    param('id').isInt().withMessage('Id no valido'), 
    handleImputError,  
    updateAvailability)

router.delete('/:id',    
    param('id').isInt().withMessage('Id no valido'), 
    handleImputError,  
    deleteProduct)

export default router
