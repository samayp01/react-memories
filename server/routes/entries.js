const router = require('express').Router()
let Entry = require('../models/entry.model')

router.route('/add').post((req, res) => {
    const date = Date.parse(req.body.date);
    const logText = req.body.logText;

    const newEntry = new Entry({
        date,
        logText,
    });

    newEntry.save()
        .then(() => res.json('Added new entry.'))
        .catch(err => res.status(400).json(err));
});

router.route('/').get((req, res) => {
    Entry.find()
        .then(entries => res.json(entries))
        .catch(err => res.status(400).json(err))
});

router.route('/:id').get((req, res) => {
    Entry.findById(req.params.id)
        .then(entry => res.json(entry))
        .catch(err => res.status(400).json(err));
});

router.route('/update/:id').post((req, res) => {
    Entry.findById(req.params.id)
        .then(entry => {
            entry.date = Date.parse(req.body.date);
            entry.logText = req.body.logText;
            entry.save()
                .then(() => res.json('Updated entry.'))
                .catch(err => res.status(400).json(err));
        })
        .catch(err => res.status(400).json(err));
});

router.route('/:id').delete((req, res) => {
    Entry.findByIdAndDelete(req.params.id)
        .then(() => res.json('Deleted entry.'))
        .catch(err => res.status(400).json(err));
});

module.exports = router;