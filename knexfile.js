// modifique com as suas configurações

module.exports = {

  development: {
    client: 'mysql',
    connection: { 
      port: '3308',
      database: 'estagio',
      host:'127.0.0.1',
      user: 'root',
      password: '',
    },
    migrations: {
      directory: './src/database/migrations'
    },
    useNullAsDefault: true,
  },

  staging: {
    client: 'mysql',
    connection: { 
      port: '3308',
      database: 'estagio',
      host:'192.168.11.7',
      user: 'root',
      password: '',
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'mysql',
    connection: { 
      port: '3308',
      database: 'estagio',
      host:'192.168.11.7',
      user: 'root',
      password: '',
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
