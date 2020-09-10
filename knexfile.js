// modifique com as suas configurações

module.exports = {

  development: {
    client: 'mysql',
    connection: { 
      port: '3306',
      database: 'sql10364911',
      host:'sql10.freemysqlhosting.net',
      user: 'sql10364911',
      password: 'kNfJ9KuKuk',
    },
    migrations: {
      directory: './src/database/migrations'
    },
    useNullAsDefault: true,
  },

  staging: {
    client: 'mysql',
    connection: { 
      port: '3306',
      database: 'sql10364911',
      host:'sql10.freemysqlhosting.net',
      user: 'sql10364911',
      password: 'kNfJ9KuKuk',
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
      port: '3306',
      database: 'sql10364911',
      host:'sql10.freemysqlhosting.net',
      user: 'sql10364911',
      password: 'kNfJ9KuKuk',
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
