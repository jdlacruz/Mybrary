const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.render('index')
})

// Export the information to other modules
module.exports = router