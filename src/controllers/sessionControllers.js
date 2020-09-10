const connection = require ('.././database/conection');

module.exports = {
async create (request, response){
    const { Email } = request.body;
    
    const Usuario = await connection ('usuario').where('Email', Email).select('Name', 'Email', 'id').first();

    if (!Usuario){
        return response.status (400).json({error: 'Usuario não encontrada pelo ID'})
    }
    
    return response.json(Usuario)
   
    



}


}
