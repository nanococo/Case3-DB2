import { Logger } from '../common'
import { SubastasData } from '../repositories';


export class SubastasController {
    private static instance: SubastasController;
    private log: Logger;

    private constructor()
    {
        this.log = new Logger();
        try
        {
        } catch (e: any)
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


    public agregarSubasta(nombreProp: String, emailProp: String, nombreArticulo: String, descripcion: String,
                          tags: [String], precioInicial: Number, fechaActual: Date,fechaExpiracion: Date,
                          imagen: String, annoArticulo: Number) : Promise<any>
    {
        return SubastasData.getInstance().agregarSubasta(nombreProp, emailProp, nombreArticulo, descripcion,
            tags, precioInicial, fechaActual,fechaExpiracion,
            imagen, annoArticulo);

    }

    public async getSubastas(){
        return await SubastasData.getInstance().getSubastas();
    }

    public updatePuja(id: string, name: string, email: string, amount: number) : Promise<any> {
        return SubastasData.getInstance().updatePuja(id, name, email, amount);
    }

    public disable(id: string) : Promise<any> {
        return SubastasData.getInstance().disable(id);
    }
}
