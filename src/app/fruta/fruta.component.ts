import {Component} from '@angular/core';

@Component({
    selector: 'fruta',
    templateUrl: './fruta.component.html'
    
    //template: `
    //    <h2>{{nombre_componente}}</h2>
    //    <p>{{listado_componente}}</p>
    //   `
})
export class FrutaComponent{
    //definir propiedades
    public nombre_componente = 'Componente de fruta'; //valor predefinido
    public listado_componente = 'Naranja, Manzana, Pera y Sandia';
    public nombre:string = "Melissa Cadavid";
    public edad:number = 30;
    public mayorDeEdad: boolean = true;
    public trabajos:Array<string> = ['Pintor','Desarrollador'];
    comodin:any = 'Cualquier cosa';
    ejemplo:string;


    constructor(){
        //para darle valor a las propiedades
        console.log(this.comodin);
        console.log(this.trabajos);
        this.ejemplo = 'ejemplooooo'; //asignar valor dinamico en el constructor (buenas practicas)

        //this.holaMundo(this.nombre);
        //this.cambiarNombre();
        //alert(this.nombre);
    }

    ngOnInit(){
        //las funciones se deben llamar en este método (buenas practicas) no en el constructor
        this.holaMundo(this.nombre);
        this.cambiarNombre();
        console.log(this.nombre);

        //variables y alcance
        var uno = 8;
        var dos = 15;

        if (uno === 8){
            let uno = 3;//funciona a nivel del bloque
            var dos = 88;//el valor va a ser global, dentro y fuera siempre sera el mismo valor

            console.log('DENTRO DEL IF' + uno + " " + dos);
        }
        console.log('FUERA DEL IF' + uno + " " + dos);
    }

    holaMundo(nombre){
        //alert('Hola mundo!!' + nombre);
    }

    cambiarNombre(){
        this.nombre = 'Juan Lopez';
    }
}