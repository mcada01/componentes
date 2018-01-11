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

    constructor(){
        this.empleado= new Empleado('Melissa',33,'Desarrolladora',true);
        this.trabajadores = [
            new Empleado('Melissa',33,'Desarrolladora',true),
            new Empleado('Manolo',40,'Administrativo',true),
            new Empleado('Ana',30,'Cocinera',false)
        ];
    }

    ngOnInit(){
        console.log(this.empleado);
        console.log(this.trabajadores);
    }
}