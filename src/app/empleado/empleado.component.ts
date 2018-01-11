import {Component} from '@angular/core';
import {Empleado} from './empleado';

@Component({
    selector: 'empleado-tag',
    templateUrl: './empleado.component.html'
})
export class EmpleadoComponent{
    public titulo = 'Componente empleados';
    public empleado:Empleado;
    public trabajadores:Array<Empleado>;
    public trabajador_externo:boolean;
    public color:string;
    public color_seleccionado:string;

    constructor(){
        this.empleado= new Empleado('Melissa',33,'Desarrolladora',true);
        this.trabajadores = [
            new Empleado('Javier',34,'Ingeniero',false),
            new Empleado('Manolo',40,'Administrativo',true),
            new Empleado('Ana',30,'Cocinera',false)
        ];

        this.trabajador_externo = false;
        this.color = 'green';
        this.color_seleccionado = '#ccc';
    }

    ngOnInit(){
        console.log(this.empleado);
        console.log(this.trabajadores);
    }

    cambiarExterno(valor){
        this.trabajador_externo = valor;
    }

    logColorSeleccionado(){
        console.log(this.color_seleccionado);
    }
}