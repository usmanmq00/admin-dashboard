const validateForm = (formData) => {
  const errors = {};

  // Validate each field and add error messages to the errors object if necessary
  //   if (!formData.thumbnail) {
  //     errors.thumbnail = "This is required.";
  //   }

  //   if (!formData.status) {
  //     errors.status = "This is required.";
  //   }
  //   if (!formData.categories) {
  //     errors.categories = "This is required.";
  //   }
  //   if (!formData.tags) {
  //     errors.tags = "This is required.";
  //   }
  if (!formData.productName) {
    errors.productName = "This is required.";
  }
  //   if (!formData.productDescription) {
  //     errors.productDescription = "This is required.";
  //   }
  //   if (!formData.shippingReturns) {
  //     errors.shippingReturns = "This is required.";
  //   }
  //   if (!formData.careInstructions) {
  //     errors.careInstructions = "This is required.";
  //   }
  //   if (!formData.media) {
  //     errors.media = "This is required.";
  //   }
  if (!formData.basePrice) {
    errors.basePrice = "This is required.";
  }
  //   if (!formData.discountType) {
  //     errors.discountType = "This is required.";
  //   }
  //   if (!formData.discount) {
  //     errors.discount = "This is required.";
  //   }
  //   if (!formData.sku) {
  //     errors.sku = "This is required.";
  //   }
  //   if (!formData.barcode) {
  //     errors.barcode = "This is required.";
  //   }
  if (!formData.stock) {
    errors.stock = "This is required.";
  }
  //   if (!formData.backorders) {
  //     errors.backorders = "This is required.";
  //   }
  //   if (!formData.metaTagTitle) {
  //     errors.metaTagTitle = "This is required.";
  //   }
  //   if (!formData.metaTagDescription) {
  //     errors.metaTagDescription = "This is required.";
  //   }
  //   if (!formData.metaTagKeywords) {
  //     errors.metaTagKeywords = "This is required.";
  //   }

  return errors;
};

export default validateForm;
