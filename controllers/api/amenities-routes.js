const router = require('express').Router();
const { Amenities } = require('../../models');

// GET all amenities /api/amenities
router.get('/', (req, res) => {
    Amenities.findAll()
    .then((dbAmenityData) => res.json(dbAmenityData))
    .catch((err) => {
        console.log(err);
        res.status(500).json(err);
    });
});

// GET single amenity by id /api/amenities/:id
router.get('/:id', (req, res) => {
    Amenities.findOne({
        where: { id: req.params.id }
    })
    .then((dbAmenityData) => {
    if (!dbAmenityData) {
        res.status(400).json({ message: 'No amenity found with this id' });
        return;
    }
    res.json(dbAmenityData);
    })
    .catch((err) => {
        console.log(err);
        res.status(500).json(err);
    });
});

// CREATE amenity /api/amenities
router.post('/', (req,res) => {
    Amenities.create({
        amentity_type: req.body.amentity_type
    })
    .then((dbAmenityData) => res.json(dbAmenityData))
    .catch((err) => {
        console.log(err);
        res.status(500).json(err);
    });
});

// DELETE single amenity by id /api/amenities/:id
router.delete('/:id', (req,res) => {
    Amenities.destroy({
        where: { id: req.params.id }
    })
    .then((dbAmenityData) => {
        if (!dbAmenityData) {
            res.status(400).json({ message: 'No amenity found with this id' });
            return;
        }
        res.json(dbAmenityData);
    })
    .catch((err) => {
        console.log(err);
        res.status(500).json(err);
    });
});

module.exports = router;