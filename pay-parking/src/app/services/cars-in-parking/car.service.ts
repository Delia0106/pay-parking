import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Car } from 'src/app/models/car';

@Injectable({
  providedIn: 'root',
})
export class CarService {
  public cars: Car[] = [
    {
      licensePlate: 'B 12 ABC',
      entryDate: new Date('2023-08-21T10:00:00'),
    },
    {
      licensePlate: 'IS 123 DFG',
      entryDate: new Date(),
    },
  ];

  private carsSubject = new BehaviorSubject<Car[]>(this.cars);

  public cars$ = this.carsSubject.asObservable();

  constructor() {}

  public addCarInParking(car: Car): void {
    this.cars.push(car);
    this.carsSubject.next(this.cars);
  }

  public getParkedCarsCount(): number {
    return this.cars.length;
  }

  public removeCarByLicensePlate(licensePlate: string): Car | undefined {
    const index = this.cars.findIndex(
      (car) => car.licensePlate === licensePlate
    );

    if (index !== -1) {
      const removedCar = this.cars.splice(index, 1)[0];
      this.carsSubject.next(this.cars);
      return removedCar;
    }

    return undefined;
  }

  public calculateParkingFee(entryDate: Date): number {
    const exitDate = new Date();

    const elapsedTimeHours = Math.ceil(
      (exitDate.getTime() - entryDate.getTime()) / (1000 * 60 * 60)
    );

    const firstHourFee = 10;
    const additionalHourFee = 5;
    
    return elapsedTimeHours <= 1
      ? firstHourFee
      : firstHourFee + (elapsedTimeHours - 1) * additionalHourFee;
  }
}
