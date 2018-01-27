import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(hotels: any, term: any, st1: any, st2: any, st3: any, st4: any, st5: any): any {
    
    if( term && term.length) {
      return hotels.filter(function(hotel) {
        return hotel.name.toLowerCase().includes(term.toLowerCase());
      })
    }

    else if ( st5 ) {
      st4 = false;
      st3 = false;
      st2 = false;
      st1 = false;
      return hotels.filter(function(hotel) {
        return hotel.stars == 5;
      })
    }

    else if ( st4 ) {
      st5 = false;
      st3 = false;
      st2 = false;
      st1 = false;
      return hotels.filter(function(hotel) {
        return hotel.stars == 4;
      })
    }
    else if ( st3 ) {
      st4 = false;
      st5 = false;
      st2 = false;
      st1 = false;
      return hotels.filter(function(hotel) {
        return hotel.stars == 3;
      })
    }

    else if ( st2 ) {
      st4 = false;
      st3 = false;
      st5 = false;
      st1 = false;
      return hotels.filter(function(hotel) {
        return hotel.stars == 2;
      })
    }

     else if ( st1 ) {
      st4 = false;
      st3 = false;
      st2 = false;
      st5 = false;
      return hotels.filter(function(hotel) {
        return hotel.stars == 1;
      })
    }
    
    else  return hotels;
  }

}
