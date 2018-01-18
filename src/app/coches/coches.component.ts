import { Component } from '@angular/core';
import { Coche } from './coche';
import { PeticionesService } from '../services/peticiones.service';
import { NgModuleCompileResult } from '@angular/compiler/src/ng_module_compiler';

@Component({
    selector: 'coches',
    templateUrl: './coches.component.html',
    providers: [PeticionesService]
})
export class CochesComponent{
    public coche: Coche;
    public coches:Array<Coche>;
    public articulos;

    constructor(private _peticionesService: PeticionesService){
        this.coche = new Coche("","","");
        this.coches = [
            new Coche("Seat Panda","120","Blanco"),
            new Coche("Renault Clio","110","Azul")
        ]
    }

    ngOnInit(){
        //console.log(this._peticionesService.getPrueba());
        this._peticionesService.getArticulos().subscribe(
            result => {//funcion callback de flecha
                this.articulos = result;
                if (!this.articulos){
                    console.log("Error en el servidor");
                }
            },
            error => {//funcion callback de flecha
                var errorMessage = <any>error;
                console.log(errorMessage);
            }
        );
    }

    onSubmit(){
        //console.log(this.coche);
        this.coches.push(this.coche);//adiciona un objeto coche al listado
        this.coche = new Coche("","","");//limpiar los campos
    }
}