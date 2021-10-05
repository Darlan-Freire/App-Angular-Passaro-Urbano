import { Component, OnInit, OnChanges } from '@angular/core';
import { OfertasService } from '../ofertas.service'
import { Oferta } from '../shared/oferta.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [ OfertasService ]
})
export class HomeComponent implements OnInit {

  public ofertas: Array<Oferta>

  constructor(private ofertaService: OfertasService) {}

  ngOnInit(): void {
    //this.ofertas = this.ofertaService.getOfertas()
    //console.log(this.ofertas)

    this.ofertaService.getOfertas_Promise().then(( ofertas: Oferta[]) =>{
      this.ofertas = ofertas
    })

  }

  public clickOfertas(): void {
    //console.log("Clique de ofertas")
    console.log(this.ofertas[0])
  }

}
