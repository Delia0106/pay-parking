import { Component } from '@angular/core';
import { CarService } from 'src/app/services/cars-in-parking/car.service';

@Component({
  selector: 'app-remove-car-summary',
  templateUrl: './remove-car-summary.component.html',
  styleUrls: ['./remove-car-summary.component.scss'],
})
export class RemoveCarSummaryComponent {
  public licensePlateToRemove: string = '';
  public removedCarLicensePlate: string = '';
  public entryTime: Date | null = null;
  public exitTime: Date | null = null;
  public totalPayment: number | null = null;
  public summary: boolean = false;

  constructor(private carService: CarService) {}

  public removeCarAndGenerateSummary(): void {
    const removedCar = this.carService.removeCarByLicensePlate(
      this.licensePlateToRemove
    );

    if (removedCar) {
      this.removedCarLicensePlate = removedCar.licensePlate;
      this.entryTime = removedCar.entryDate;
      this.exitTime = new Date();
      this.totalPayment = this.carService.calculateParkingFee(this.entryTime);
      this.summary = true;
    }
  }
}
