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


    public agregarSubasta(propietario: [any], nombreArticulo: String, descripcion: String,
                          tags: [String], precioInicial: Number,precioActual:Number, fechaPublicacion: Date,fechaExpiracion: Date,
                          activo:Boolean, imagen: String, annoArticulo: Number, pujas:[any]) : Promise<any>
    {
        return SubastasData.getInstance().agregarSubasta(propietario, nombreArticulo, descripcion,
            tags, precioInicial, precioActual, fechaPublicacion, fechaExpiracion,
            activo, imagen, annoArticulo, pujas);

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

    public async getSubastasFecha(fecha: Date){
        
        return await SubastasData.getInstance().getSubastasFecha(fecha);
    }
    public async getSubastasPrecios(min:number, max:number){
        
        return await SubastasData.getInstance().getSubastasPrecios(min, max);
    }
    public async getSubastasAnno(anno:number){
        
        return await SubastasData.getInstance().getSubastasAnnos(anno);
    }
}
