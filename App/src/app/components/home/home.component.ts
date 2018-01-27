import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

import { HotelsService } from '../../services/hotels.service';
import { Hotel } from '../../hotel';
import { FilterPipe } from '../../pipes/filter.pipe';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})

export class HomeComponent implements OnInit {
  lista: any;
  filtro: any = [];

  constructor(
    private router: Router,
    private servicio: HotelsService,
  ) { }

  ngOnInit() {
		this.servicio.getHotels()
			.subscribe(
				rs => this.lista = rs,
				er => console.log(er),
				() => {

          for (let it=0; it<this.lista.hotels.length; it++) {

            let star = "estrellas";
            this.lista.hotels[it][star] = [];
            
            for (let i=0; i<this.lista.hotels[it].stars; i++) {
              this.lista.hotels[it].estrellas.push(this.lista.hotels[it].stars);
            }
          }
          console.log(this.lista);
        }  
			)
	}
  verHotel(idx:number) {
      this.router.navigate(['/hotel', idx]);
  }
}
