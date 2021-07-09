const { Text, Float, Integer, Relationship } = require("@keystonejs/fields");

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
    severity: {
      type: Text,
      isRequired: true
    },
    cvssScore: {
      type: Float,
      isRequired: true
    },
    lastUpdated: {
      type: Integer,
      isRequired: true
    },
    qAndA: {
      type: Relationship,
      ref: "QandA",
      many: true
    }
  }
}