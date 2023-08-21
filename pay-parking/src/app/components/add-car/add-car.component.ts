import { Component } from '@angular/core';
import { Car } from 'src/app/models/car';
import { CarService } from 'src/app/services/cars-in-parking/car.service';

@Component({
  selector: 'app-add-car',
  templateUrl: './add-car.component.html',
  styleUrls: ['./add-car.component.scss'],
})
export class AddCarComponent {
  public newCarLicensePlate: string = '';

  constructor(private carService: CarService) {}

  public addCar(): void {
    if (this.newCarLicensePlate.trim() !== '') {
      const newCar: Car = {
        licensePlate: this.newCarLicensePlate,
        entryDate: new Date(),
      };

      this.carService.addCarInParking(newCar);
      this.newCarLicensePlate = '';
    }
  }
}
