const sequelize = require('../db')
const {DataTypes} = require('sequelize')

const User = sequelize.define('user',{
  id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
  email: {type: DataTypes.STRING, unique: true},
  password: {type: DataTypes.STRING},
  role: {type: DataTypes.STRING, defaultValue: "USER"}
})

const Basket = sequelize.define('basket',{
  id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
})

const BasketProduct = sequelize.define('basket_product',{
  id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
})

const BasketService = sequelize.define('basket_service',{
  id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
})

const Product = sequelize.define('product',{
  id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
  name: {type: DataTypes.STRING, unique: true, allowNull: false},
  price: {type: DataTypes.INTEGER, allowNull: false},
  img: {type: DataTypes.STRING, allowNull: false}
})

const Service = sequelize.define('service',{
  id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
  name: {type: DataTypes.STRING, unique: true, allowNull: false},
  price: {type: DataTypes.INTEGER, allowNull: false},
  img: {type: DataTypes.STRING, allowNull: false}
})

const Type = sequelize.define('type',{
  id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
  name: {type: DataTypes.STRING, unique: true, allowNull: false}
})

const ProductInfo = sequelize.define('product_info',{
  id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
  description: {type: DataTypes.STRING, allowNull: false}
})

const ServiceInfo = sequelize.define('service_info',{
  id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
  description: {type: DataTypes.STRING, allowNull: false}
})


User.hasOne(Basket)
Basket.belongsTo(User)

Basket.hasMany(BasketProduct)
BasketProduct.belongsTo(Basket)

Basket.hasMany(BasketService)
BasketService.belongsTo(Basket)

Type.hasMany(Product)
Product.belongsTo(Type)

Type.hasMany(Service)
Service.belongsTo(Type)

Product.hasMany(ProductInfo)
ProductInfo.belongsTo(Product)

Service.hasMany(ServiceInfo)
ServiceInfo.belongsTo(Product)

module.exports = {
  User,
  Basket,
  BasketProduct,
  BasketService,
  Product,
  Service,
  Type,
  ProductInfo,
  ServiceInfo
}