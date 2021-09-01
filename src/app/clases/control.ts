import { Injectable } from '@angular/core';
@Injectable({
    providedIn: 'root'
  })
export class miFuncion{
    fechaInput(fechaStr: string | Date){
        
        const campoFecha = new Date(fechaStr);
        const anio = campoFecha.getUTCFullYear(); //año
        const mes = campoFecha.getUTCMonth() + 1; //mes
        const dia = campoFecha.getUTCDate(); //dia
        const hora = campoFecha.getUTCHours() - 5; //hora
        const minuto = campoFecha.getUTCMinutes(); //minuto
        const fecha = anio + "-" + ("0"+mes).slice(-2) + "-" + ("0"+dia).slice(-2) + "T" + ("0"+hora).slice(-2) + ":" + ("0"+minuto).slice(-2);
        return fecha;
    }
}