module.exports.migrations = {
  connection: 'LocalMysqlServer',
  //  connection: 'DevelopmentMysqlServer',
  // connection: 'ProductionMysqlServer',
  table: 'sails_migrations',
  migrationsDir: 'sails_migrations',
  coffeeFile: false
};
