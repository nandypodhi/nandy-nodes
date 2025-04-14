const mongoose = require('mongoose');

const prodealSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String },
    price: { type: Number, required: true },
    currency: { type: String, default: 'AED' },
    imageUrl: { type: String },
    brand: { type: String },
    category: { type: String }, // General product category
    subCategory: { type: String },
    discountPercentage: { type: Number },
    originalPrice: { type: Number },
    deliveryOptions: [String],
    pageType: { type: String, enum: ['mother-baby', 'beauty', 'nutrition', 'equipment-care', 'personal-care'], required: true },
    // Homepage Section Flags
    isAffordableDeal: { type: Boolean, default: false },
    isTopProduct: { type: Boolean, default: false },
    topCategoryThisWeek: { type: Boolean, default: false },
    beautyCategoryHighlight: { type: Boolean, default: false }, // For "Explore Beauty Categories"
    bundleDiscountItem: { type: Boolean, default: false }, // For "Bundle Up for Big Discounts"
    nutritionGuideItem: { type: Boolean, default: false }, // For "Your Nutrition Guide"
    newlyLaunchedBrandItem: { type: Boolean, default: false }, // For "Explore Newly Launched Brands"
    exclusivelyLaunchedItem: { type: Boolean, default: false }, // For "Exclusively Launched"
    lilCareBabyItem: { type: Boolean, default: false }, // For "Lil Care For You & Your Baby"
    // Add other relevant fields
  }, { timestamps: true });
  
  const Prodeal = mongoose.model('Prodeal', prodealSchema);
  
  module.exports = Prodeal;