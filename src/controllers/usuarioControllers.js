const connection = require('../database/conection')

module.exports = {
    /**Listagem de Ogs cadastradas */
    async create (request, response){
        const {id, name, email, celular, funcao} = request.body;
        

                try{
                    await connection('usuario').insert({
                        id,
                        name,
                        email,
                        celular,
                        funcao,
                    })
                    return response.json({Status: "Cadastrado com sucesso"});
        
                }catch(err) {
                    if(err.errno===1062){
                        return response.json({Status: "Usuário já existente", err: err.stack});
        
                    }else{
                        return response.json({Status: "Erro não encontrado"});
        
                    }
                    
        
                }
                
    },

    async index (request, response ){
        const users = await connection('usuario').select('*');

        return response.json(users);


    }    
}