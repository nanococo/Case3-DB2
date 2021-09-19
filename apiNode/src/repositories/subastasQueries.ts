


export class Subastasqueries {
    private static instance: Subastasqueries;

    private constructor()
    {

    }

    public static getInstance() : Subastasqueries
    {
        if (!this.instance)
        {
            this.instance = new Subastasqueries();
        }
        return this.instance;
    }
    public getQueryCheckin(email: string) {
            return "EXEC dbo.SP_cargarCheckin '"+email+"'"
    }
    public getQueryPosts(email: string) {
        return "EXEC dbo.SP_cargarPosts '"+email+"'"
    }
    public getQuerySharePosts() {
            return "EXEC dbo.SP_cargarSharePosts"
    }
        
}
