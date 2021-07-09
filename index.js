const { Keystone } = require('@keystonejs/keystone');
const { GraphQLApp } = require('@keystonejs/app-graphql');
const { AdminUIApp } = require('@keystonejs/app-admin-ui');
const { MongooseAdapter: Adapter } = require('@keystonejs/adapter-mongoose');
const PROJECT_NAME = 'my-app';
const adapterConfig = { mongoUri: 'mongodb://localhost/my-app' };
const ProductCategoriesSchema = require("./lists/product-categories.js");
const ProductSchema = require("./lists/products.js");
const QandASchema = require("./lists/QandA.js");
const CVESchema = require("./lists/CVE.js");


/**
 * You've got a new KeystoneJS Project! Things you might want to do next:
 * - Add adapter config options (See: https://keystonejs.com/keystonejs/adapter-mongoose/)
 * - Select configure access control and authentication (See: https://keystonejs.com/api/access-control)
 */

const keystone = new Keystone({
  adapter: new Adapter(adapterConfig),
  cookieSecret: process.env.COOKIE_SECRET
});

keystone.createList("ProductCategory", ProductCategoriesSchema);
keystone.createList("Product", ProductSchema);
keystone.createList("QandA", QandASchema);
keystone.createList("CVE", CVESchema);

module.exports = {
  keystone,
  apps: [new GraphQLApp(), new AdminUIApp({ name: PROJECT_NAME, enableDefaultRoute: true })],
};
