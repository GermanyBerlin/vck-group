const Router = require('express')
const router = new Router()

const userRouter = require('./userRouter')
const productRouter = require('./productRouter')
const serviceRouter = require('./serviceRouter')
const typeRouter = require('./typeRouter')

router.use('/user', userRouter)
router.use('/product', productRouter)
router.use('/service', serviceRouter)
router.use('/type', typeRouter)

module.exports = router