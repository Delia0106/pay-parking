import { TestBed, fakeAsync } from '@angular/core/testing';

import { CarService } from './car.service';

describe('CarService', () => {
  let service: CarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should calculate ParkingFee correctly for 10 min', fakeAsync(() => {
    const entryDate = new Date('2023-08-21T10:00:00');
    const fixedExitDate = new Date('2023-08-21T10:10:00');
    spyOn(Date, 'now').and.returnValue(fixedExitDate.getTime());

    const calculatedFee = service.calculateParkingFee(entryDate);
    expect(calculatedFee).toBe(10);
  }));

  it('should calculate parking fee correctly for 1 hour + 1 min', fakeAsync(() => {
    const entryDate = new Date('2023-08-21T08:00:00');
    const fixedExitDate = new Date('2023-08-21T09:00:01');
    spyOn(Date, 'now').and.returnValue(fixedExitDate.getTime());

    const calculatedFee = service.calculateParkingFee(entryDate);
    expect(calculatedFee).toBe(15);
  }));
});
