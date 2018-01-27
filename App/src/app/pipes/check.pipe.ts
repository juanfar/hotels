import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'check'
})
export class CheckPipe implements PipeTransform {

  transform(hotels: any): any {

    if (5 + 5 == 10) {
      return hotels.filter(function(hotel) {
        return hotel.star == 2;
      })
    }
    else  return hotels;
  }
    
    /*if( checked && checked.length) {
      return hotels.filter(function(hotel) {
        return hotel.star;
      })
    }
    else  return hotels;
  }*/

}
