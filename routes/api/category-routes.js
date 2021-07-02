// The `/api/categories` endpoint
  
const router = require('express').Router();
const { Category, Product } = require('../../models');


// Get all Categories
router.get('/', async (req, res) => {
try
{
const categoryData = await Category
.findAll(
{
include: [{ model: Product}]
});
if (!categoryData)
{
res.status(404).json
({ message: 'No categories found.'});
return;
}
res.status(200).json(categoryData)
} 
catch 
(err) {res.status(500).json(err);}
});


// Get by Category ID
router.get('/:id', async (req, res) => {
try
{
const categoryData = await Category
.findByPk(req.params.id,
{
include:[{ model: Product}],
});
if (!categoryData)
{
res.status(404).json
({ message: 'Im afraid I cant let you do that, the ID is incorrect.'});
return;
}
res.status(200).json(categoryData);
} 
catch 
(err) {res.status(500).json(err);}
});


// New Category
router.post('/', async (req, res) => {
try
{
const categoryData = 
await Category.create(req.body);
if (!categoryData)
{
res.status(404).json
({ message: 'Im afraid I cant let you do that, the ID is incorrect.'});
return;
}
res.status(200).json(categoryData)
} 
catch 
(err) {res.status(500).json(err);}
});


// Update Category
router.put('/:id', async (req, res) => {
try 
{
const categoryData = 
await Category.update(req.body, 
{
where: 
{id: req.params.id,},
});
if (!categoryData[0]) 
{
res.status(404).json
({ message: 'Im afraid I cant let you do that, the ID is incorrect.'});
return;
}
res.status(200).json(categoryData);
} 
catch 
(err) {res.status(500).json(err);}
});


// Delete Category
router.delete('/:id', async (req, res) => {
try 
{
const categoryData = 
await Category.destroy({
where: 
{id: req.params.id,},
});
if (!categoryData) 
{
res.status(404).json
({ message: 'Im afraid I cant let you do that, the ID is incorrect.'});
return;
}
res.status(200).json(categoryData);
} 
catch 
(err) {res.status(500).json(err);}
});


module.exports = router;