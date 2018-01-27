module.exports = {
    port: process.env.PORT || 3000,
    db: process.env.MongoDB || 'mongodb://localhost:27017/reserve'
}