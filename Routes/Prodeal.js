// routes/productRoutes.js
const express = require('express');
const router = express.Router();
const productController = require('../Controller/Prodeal.controller');



// GET products for a specific page with optional filtering and sorting
router.get('/products/:pageType', productController.getProductsByPage);

// GET affordable deals (homepage)
router.get('/affordable-deals', productController.getAffordableDeals);

// GET top products (homepage)
router.get('/top-products', productController.getTopProducts);

// GET top categories this week products (homepage)
router.get('/top-categories-week/products', productController.getTopCategoriesThisWeekProducts);

// GET explore beauty categories products (homepage)
router.get('/explore-beauty/products', productController.getExploreBeautyProducts);

// GET explore the range of beauty products (homepage - might filter by category)
router.get('/beauty-range/products', productController.getBeautyRangeProducts);

// GET bundle up for big discounts products (homepage)
router.get('/bundle-discounts/products', productController.getBundleDiscountsProducts);

// GET your nutrition guide products (homepage)
router.get('/nutrition-guide/products', productController.getNutritionGuideProducts);

// GET explore your nutrition store products (homepage - might filter by category)
router.get('/nutrition-store/products', productController.getNutritionStoreProducts);

// GET explore newly launched brands products (homepage)
router.get('/new-brands/products', productController.getNewlyLaunchedBrandsProducts);

// GET exclusively launched products (homepage)
router.get('/exclusively-launched/products', productController.getExclusivelyLaunchedProducts);

// GET lil care for you & your baby products (homepage)
router.get('/lil-care-baby/products', productController.getLilCareBabyProducts);

// GET a single product by ID (within a page type)
router.get('/products/:pageType/:id', productController.getProductById);

// POST a new product (admin - specify pageType in body)
router.post('/products', productController.createProduct);

// PUT/PATCH update a product (admin)
router.put('/products/:id', productController.updateProduct);
router.patch('/products/:id', productController.updateProduct);

// DELETE a product (admin)
router.delete('/products/:id', productController.deleteProduct);

module.exports = router;

