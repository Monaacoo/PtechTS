import express, { Request, Response } from 'express';
import fs from 'fs';

const app = express ();

app.listen(8000, () => {
    console.log("Foi!");
})

app.get('/', (req: Request, res: Response) => {
    return res.json({
        "mensagem": "Primeira rota"

    })
})

app.get('/:Pokemon', (req: Request, res: Response) => {
    try {
        const Pokemon = fs.readFileSync('./pokemon/'+req.params.Pokemon+'.json','utf8' );
        const objpokemon = JSON.parse(Pokemon);

        return res.json(objpokemon)
    } catch (e) {
        return res.json({
            "mensagem": req.params.Pokemon
        })
    }
})

    app.post('/', (req: Request, res: Response) => {
        return res.json({
            "mensagem": "Brasil"
        })
})

app.post ('/pokemons', (req:Request, res:Response) => {
    try{
        const nome = req.body.nome;
        const tipo = req.body.tipo;
        const poder = req.body.poder;

        return res.json({nome, tipo, poder});
    } catch (e) {
        return res.json({
            "mensagem": e
        })
    }
})