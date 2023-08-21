import { Component, OnInit } from '@angular/core';
import { Car } from 'src/app/models/car';
import { CarService } from 'src/app/services/cars-in-parking/car.service';

@Component({
  selector: 'app-available-spots',
  templateUrl: './available-spots.component.html',
  styleUrls: ['./available-spots.component.scss'],
})
export class AvailableSpotsComponent implements OnInit {
  public numberOfAvailableSpots: number = 0;

  constructor(private carService: CarService) {}

  ngOnInit(): void {
    this.carService.cars$.subscribe((cars: Car[]) => {
      this.numberOfAvailableSpots = 10 - cars.length;
    });
  }
}
