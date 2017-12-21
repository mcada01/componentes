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
    public nombre_componente = 'Componente de fruta';
    public listado_componente = 'Naranja, Manzana, Pera y Sandia';
}