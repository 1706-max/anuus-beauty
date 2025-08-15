// src/utils/imageImporter.js
console.log('Image importer loaded');

export const importGalleryImages = () => {
  console.log('Starting image import process...');
  const images = [];

  // Import fashion images
  console.log('Attempting to import fashion images...');
  const fashionImages = import.meta.glob('../assets/images/gallery/fashion/*.{png,jpg,jpeg,webp}', { eager: true });

  Object.values(fashionImages).forEach((image, index) => {
    images.push({
      id: images.length + 1,
      category: 'fashion',
      title: `Fashion Design ${index + 1}`,
      description: 'Custom fashion design work',
      image: image.default // Vite puts the file URL in .default
    });
  });

  // Import before-after images
  console.log('Attempting to import before-after images...');
  const beforeAfterImages = import.meta.glob('../assets/images/gallery/beforeafter/*.{png,jpg,jpeg,webp}', { eager: true });

  Object.values(beforeAfterImages).forEach((image, index) => {
    images.push({
      id: images.length + 1,
      category: 'beforeafter',
      title: `Transformation ${index + 1}`,
      description: 'Before and after results',
      image: image.default
    });
  });

  console.log('Final images array:', images);
  return images;
};

export const getGalleryCategories = (images) => {
  if (!images || images.length === 0) {
    return [{ id: 'all', name: 'All Work' }];
  }

  const categories = [...new Set(images.map(item => item.category))];
  const categoryObjects = [{ id: 'all', name: 'All Work' }];

  if (categories.includes('fashion')) {
    categoryObjects.push({ id: 'fashion', name: 'Fashion Design' });
  }
  if (categories.includes('beforeafter')) {
    categoryObjects.push({ id: 'beforeafter', name: 'Before & After' });
  }

  console.log('Generated categories:', categoryObjects);
  return categoryObjects;
};
