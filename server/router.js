const router = require('express').Router();
const questionsRouter = require('./routes/questionsRouter');

router.use('/questions', questionsRouter);

module.exports = router;