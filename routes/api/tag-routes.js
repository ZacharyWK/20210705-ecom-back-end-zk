// The `/api/tags` endpoint

const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');


// Get all Tags
router.get('/', async (req, res) => {
try
{
const tagData = await Tag
.findAll(
{
include: [{model: ProductTag, model: Product}],
});
if (!tagData)
{
res.status(404).json
({ message: 'No tags found.'});
return;
}
res.status(200).json(tagData);
}
catch 
(err) {res.status(500).json(err)}
});


// Get by Tag ID
router.get('/:id', async (req, res) => {
try
{
const tagData = await Product
.findByPk(req.params.id,
{
include: [{model: ProductTag, model: Product}],
});
if (!tagData)
{
res.status(404).json
({ message: 'Im afraid I cant let you do that, the ID is incorrect.'});
return;
}
res.status(200).json(tagData);
} 
catch
(err) {res.status(500).json(err)}
});


// New Tag
router.post('/', async (req, res) => {
try
{
const tagData = 
await Tag.create(req.body);
if (!tagData)
{
res.status(404).json
({ message: 'Im afraid I cant let you do that, the ID is incorrect.'});
return;
}
res.status(200).json(tagData)
}
catch 
(err) {res.status(500).json(err);}
});


// Update Tag
router.put('/:id', async (req, res) => {
try 
{
const tagData = 
await Tag.update(req.body, 
{
where:
{id: req.params.id,},
});
if (!tagData[0]) 
{
res.status(404).json
({ message: 'Im afraid I cant let you do that, the ID is incorrect.'});
return;
}
res.status(200).json(tagData);
} 
catch 
(err) {res.status(500).json(err);}
});


// Delete Tag
router.delete('/:id', async (req, res) => {
try 
{
const tagData = 
await Tag.destroy({
where: 
{id: req.params.id,},
});
if (!tagData) 
{
res.status(404).json
({ message: 'Im afraid I cant let you do that, the ID is incorrect.'});
return;
}
res.status(200).json(tagData);
} 
catch 
(err) {res.status(500).json(err);}
});


module.exports = router;