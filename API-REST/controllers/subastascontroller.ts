import { articles_data } from '../repositories/data_articles'
import { Logger } from '../common'


export class SubastasController {
    private static instance: SubastasController;
    private log: Logger;

    private constructor()
    {
        this.log = new Logger();
        try
        {
        } catch (e)
        {
            this.log.error(e);
        }
    }

    public static getInstance() : SubastasController
    {
        if (!this.instance)
        {
            this.instance = new SubastasController();
        }
        return this.instance;
    }

    public listArticles() : Promise<any> 
    {
        const dynamo = new articles_data();
        return dynamo.getAllArticles();
    }
}