
const Product = require('../Models/prodeal.model');

exports.getProductsByPage = async (req, res,next) => {
  const { pageType } = req.params;
  const { category, brand, delivery, sortBy } = req.query;
  const filters = { pageType };
  const sortOptions = {};

  try {
    if (category) filters.category = category;
    if (brand) filters.brand = brand;
    if (delivery) filters.deliveryOptions = delivery;

    if (sortBy === 'price-low-to-high') sortOptions.price = 1;
    else if (sortBy === 'price-high-to-low') sortOptions.price = -1;
    else sortOptions.createdAt = -1;

    const products = await Product.find(filters).sort(sortOptions);
    res.status(200).json(products);
  } catch (error) {
    next(err)
  }
};

// GET affordable deals (homepage)
exports.getAffordableDeals = async (req, res,next) => {
  try {
    const products = await Product.find({ isAffordableDeal: true });
    res.status(200).json(products);
  } catch (error) {
    next(err)
  }
};

// GET top products (homepage)
exports.getTopProducts = async (req, res,next) => {
  try {
    const products = await Product.find({ isTopProduct: true });
    res.status(200).json(products);
  } catch (error) {
    next(err)
  }
};

// GET top categories this week products (homepage)
exports.getTopCategoriesThisWeekProducts = async (req, res,next) => {
  try {
    const products = await Product.find({ topCategoryThisWeek: true });
    res.status(200).json(products);
  } catch (error) {
    next(err)
  }
};

// GET explore beauty categories products (homepage)
exports.getExploreBeautyProducts = async (req, res,next) => {
  try {
    const products = await Product.find({ beautyCategoryHighlight: true });
    res.status(200).json(products);
  } catch (error) {
    next(err)
  }
};

// GET explore the range of beauty products (homepage)
exports.getBeautyRangeProducts = async (req, res,next) => {
  try {
    const products = await Product.find({ pageType: 'beauty' }); // Or a specific beauty category
    res.status(200).json(products);
  } catch (error) {
    next(err)
  }
};

// GET bundle up for big discounts products (homepage)
exports.getBundleDiscountsProducts = async (req, res,next) => {
  try {
    const products = await Product.find({ bundleDiscountItem: true });
    res.status(200).json(products);
  } catch (error) {
    next(err)
  }
};

// GET your nutrition guide products (homepage)
exports.getNutritionGuideProducts = async (req, res,next) => {
  try {
    const products = await Product.find({ nutritionGuideItem: true });
    res.status(200).json(products);
  } catch (error) {
    next(err)
  }
};

// GET explore your nutrition store products (homepage)
exports.getNutritionStoreProducts = async (req, res,next) => {
  try {
    const products = await Product.find({ pageType: 'nutrition' }); // Or a specific nutrition category
    res.status(200).json(products);
  } catch (error) {
    next(err)
  }
};

// GET explore newly launched brands products (homepage)
exports.getNewlyLaunchedBrandsProducts = async (req, res,next) => {
  try {
    const products = await Product.find({ newlyLaunchedBrandItem: true });
    res.status(200).json(products);
  } catch (error) {
    next(err)
  }
};

// GET exclusively launched products (homepage)
exports.getExclusivelyLaunchedProducts = async (req, res,next) => {
  try {
    const products = await Product.find({ exclusivelyLaunchedItem: true });
    res.status(200).json(products);
  } catch (error) {
    next(err)
  }
};

// GET lil care for you & your baby products (homepage)
exports.getLilCareBabyProducts = async (req, res,next) => {
  try {
    const products = await Product.find({ lilCareBabyItem: true });
    res.status(200).json(products);
  } catch (error) {
    next(err)
  }
};

// GET a single product by ID
exports.getProductById = async (req, res,next) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) return res.status(404).json({ message: 'Product not found' });
    res.status(200).json(product);
  } catch (error) {
    next(err)
  }
};

// POST a new product (admin)
exports.createProduct = async (req, res,next) => {
  const newProduct = new Product(req.body);
  try {
    const savedProduct = await newProduct.save();
    res.status(201).json(savedProduct);
  } catch (error) {
    next(err)
  }
};

// PUT/PATCH update a product (admin)
exports.updateProduct = async (req, res,next) => {
  try {
    const updatedProduct = await Product.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    if (!updatedProduct) return res.status(404).json({ message: 'Product not found' });
    res.status(200).json(updatedProduct);
  } catch (error) {
    next(err)
  }
};

// DELETE a product (admin)
exports.deleteProduct = async (req, res,next) => {
  try {
    const deletedProduct = await Product.findByIdAndDelete(req.params.id);
    if (!deletedProduct) return res.status(404).json({ message: 'Product not found' });
    res.status(204).send();
  } catch (error) {
    next(err)
  }
};


//const Product = require('../Models/prodeal.model');
// Utility function to fetch products by a boolean flag
const getProductsByFlag = (flag) => async (req, res,next) => {
  try {
    const products = await Product.find({ [flag]: true });
    res.status(200).json(products);
  } catch (error) {
    next(err)
  }
};

// Generic query with filters and sorting
exports.getProductsByPage = async (req, res,next) => {
  const { pageType } = req.params;
  const { category, brand, delivery, sortBy } = req.query;

  const filters = { pageType };
  if (category) filters.category = category;
  if (brand) filters.brand = brand;
  if (delivery) filters.deliveryOptions = delivery;

  const sortOptions = {
    'price-low-to-high': { price: 1 },
    'price-high-to-low': { price: -1 },
    default: { createdAt: -1 }
  };

  try {
    const products = await Product.find(filters).sort(sortOptions[sortBy] || sortOptions.default);
    res.status(200).json(products);
  } catch (error) {
    next(err)
  }
};

// Flagged homepage sections
exports.getAffordableDeals = getProductsByFlag('isAffordableDeal');
exports.getTopProducts = getProductsByFlag('isTopProduct');
exports.getTopCategoriesThisWeekProducts = getProductsByFlag('topCategoryThisWeek');
exports.getExploreBeautyProducts = getProductsByFlag('beautyCategoryHighlight');
exports.getBundleDiscountsProducts = getProductsByFlag('bundleDiscountItem');
exports.getNutritionGuideProducts = getProductsByFlag('nutritionGuideItem');
exports.getNewlyLaunchedBrandsProducts = getProductsByFlag('newlyLaunchedBrandItem');
exports.getExclusivelyLaunchedProducts = getProductsByFlag('exclusivelyLaunchedItem');
exports.getLilCareBabyProducts = getProductsByFlag('lilCareBabyItem');

// Category-based homepage sections
exports.getBeautyRangeProducts = async (req, res,next) => {
  try {
    const products = await Product.find({ pageType: 'beauty' });
    res.status(200).json(products);
  } catch (error) {
    next(err)
  }
};

exports.getNutritionStoreProducts = async (req, res,next) => {
  try {
    const products = await Product.find({ pageType: 'nutrition' });
    res.status(200).json(products);
  } catch (error) {
    next(err)
  }
};

// CRUD operations
exports.getProductById = async (req, res,next) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) return res.status(404).json({ message: 'Product not found' });
    res.status(200).json(product);
  } catch (error) {
    next(err)
  }
};

exports.createProduct = async (req, res,next) => {
  try {
    const newProduct = new Product(req.body);
    const saved = await newProduct.save();
    res.status(201).json(saved);
  } catch (error) {
    next(err)
  }
};

exports.updateProduct = async (req, res,next) => {
  try {
    const updated = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!updated) return res.status(404).json({ message: 'Product not found' });
    res.status(200).json(updated);
  } catch (error) {
    next(err)
  }
};

exports.deleteProduct = async (req, res,next) => {
  try {
    const deleted = await Product.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ message: 'Product not found' });
    res.status(204).send();
  } catch (error) {
    next(err)
  }
};
