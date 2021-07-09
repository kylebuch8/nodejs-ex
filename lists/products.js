const { Text, Url, Relationship } = require("@keystonejs/fields");

module.exports = {
  fields: {
    name: {
      type: Text,
      isRequired: true
    },
    description: {
      type: Text,
      isRequired: true
    },
    ctaText: {
      type: Text,
      isRequired: true
    },
    ctaURL: {
      type: Url,
      isRequired: true
    },
    productCategory: {
      type: Relationship,
      ref: "ProductCategory",
      isRequired: true
    }
  }
}