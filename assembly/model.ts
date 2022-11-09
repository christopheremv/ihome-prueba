import {  u128, context, PersistentVector } from "near-sdk-as";
/*Model*/
export class Usuario{
    id_usuario : String;
    Nombre : String;    
    constructor( id_usuario : String,  Nombre: String){
        this.id_usuario = id_usuario;
        this.Nombre = Nombre;
     }
    
    } 

export class Publicacion{
    id_publicacion : String;
    detalle_publicacion : String;
    imagen : String;
    direccion : String;
    user_vendedor : String;
       constructor(id_publicacion: String, detalle_publicacion : String,  imagen :String, direccion : String, user_vendedor: String ){
        this.id_publicacion = id_publicacion;
        this.detalle_publicacion = detalle_publicacion;
        this.imagen = imagen;
        this.direccion = direccion;
        this.user_vendedor = user_vendedor;
    }    
}
export class Venta{
    id_venta : String;
    detalle_venta : String;
        constructor(id_venta : String, detalle_venta : String){
            this.id_venta = id_venta;
            this.detalle_venta = detalle_venta;
        }
}

export class Cita{
    id_cita : String;
    detalle_cita : String;
        constructor(id_cita : String, detalle_cita : String){
            this.id_cita = id_cita;
            this.detalle_cita = detalle_cita;
        }
}

export const Usuarios_tabla = new PersistentVector<Usuario>("v");
export const Todas_Publicaciones= new PersistentVector<Publicacion>("v");
export const Todas_Ventas= new PersistentVector<Venta>("v");
export const Todas_Citas= new PersistentVector<Cita>("v");
