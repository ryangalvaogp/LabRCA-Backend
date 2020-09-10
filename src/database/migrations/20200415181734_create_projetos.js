
exports.up = function(knex) {
  
    return  knex.schema.createTable('Projetos', function(table){ 
        table.engine('InnoDB')

        table.increments ();

    table.string('Titulo');
    table.string('Descricao');

    table.string('Responsavel_id');
    table.foreign('Responsavel_id').references('id').inTable('usuario');
    })
};

exports.down = function(knex) {
  return knex.schema.dropTable('Projetos')
};
