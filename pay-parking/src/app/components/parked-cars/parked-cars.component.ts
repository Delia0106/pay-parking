import { Component } from '@angular/core';
import { Car } from 'src/app/models/car';

import { CarService } from 'src/app/services/cars-in-parking/car.service';

@Component({
  selector: 'app-parked-cars',
  templateUrl: './parked-cars.component.html',
  styleUrls: ['./parked-cars.component.scss'],
})
export class ParkedCarsComponent {
  public parkedCars: Car[] = [];

  constructor(private carService: CarService) {}

  ngOnInit(): void {
    this.carService.cars$.subscribe((cars: Car[]) => {
      this.parkedCars = this.calculateParkingFees(cars);
    });
  }

  private calculateParkingFees(cars: Car[]): Car[] {
    return cars.map((car: Car) => ({
      ...car,
      parkingFee: this.carService.calculateParkingFee(car.entryDate),
    }));
  }
}
