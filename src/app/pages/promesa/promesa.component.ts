import { Component, OnInit } from '@angular/core';
import { rejects } from 'assert';
import { resolve } from 'dns';

@Component({
  selector: 'app-promesa',
  templateUrl: './promesa.component.html',
  styles: [],
})
export class PromesaComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    this.getUsuarios().then((usuarios) => {
      console.log(usuarios);
    });

    // const promesa = new Promise( ( resolve, rejects ) => {
    //   if ( false ){
    //     resolve('Hola Mundo');
    //   } else {
    //     rejects('algo salio mal')
    //   }

    // });

    // promesa
    // .then( (mensaje) => {
    //   console.log(mensaje)
    // })
    // .catch( error => console.log('Error en mi promesa', error))

    // console.log('Fin del Init');
  }

  getUsuarios() {
    return new Promise((resolve) => {
      fetch('https://reqres.in/api/users')
        .then((resp) => resp.json())
        .then((body) => resolve(body.data));
    });
  }
}
