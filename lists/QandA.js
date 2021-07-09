const { Text } = require("@keystonejs/fields");

module.exports = {
  fields: {
    question: {
      type: Text,
      isRequired: true
    },
    answer: {
      type: Text,
      isRequired: true
    }
  }
}