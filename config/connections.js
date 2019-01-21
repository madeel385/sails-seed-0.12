module.exports.connections = {
  LocalMysqlServer: {

    adapter: 'sails-mysql',
    host: 'localhost',
    user: 'root',
    password: 'Password',
    database: 'DB Name',
    wlNext: {
      caseSensitive: false
    }
  },
  DevelopmentMysqlServer: {
    // dev db configuration 
  },
  ProductionMysqlServer: {
    // live db configuration
  }
};
