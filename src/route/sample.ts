import {Router} from 'express'

const router = Router()

router.get('/', (req, res) => {
    res.json({
        resp: 'ok'
    })
})

export default router