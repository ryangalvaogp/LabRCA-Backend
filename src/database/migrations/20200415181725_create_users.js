
exports.up = function(knex) {
    return  knex.schema.createTable('usuario', function(table){
        table.engine('InnoDB')
       
        table.string ('id', 50).primary();
        table.string('name');
        table.string('email');
        table.string('celular');
        table.string('funcao');
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('usuario');
};
