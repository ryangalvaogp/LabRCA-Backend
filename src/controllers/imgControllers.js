const connect = require ('../database/conection');
const crypto = require ('crypto');
const data = new Date();


module.exports = {
    async create (req, res){
       
        const CreatedAt =  data.getFullYear()+'-'+
                        (data.getMonth()+1)+'-'+
                        data.getDate()+' '+
                        data.getHours()+':'+
                        data.getMinutes()+':'+
                        data.getSeconds()
        

        const Name = req.file.originalname;
        const Size = req.file.size;
        const Key = req.file.filename;
        const Destino = req.file.path
        const id = crypto.randomBytes(4).toString('HEX');
        const Eventoid = req.body.Eventoid;
        const Projetoid = req.body.Projetoid; 
        
        await connect('imagens').insert({
                id,
                Name,
                Size,
                Key,
                Destino,
                CreatedAt,
                Projetoid,
                Eventoid
        });
        
        return res.json({status: "Enviado com Sucesso"})
    }
}