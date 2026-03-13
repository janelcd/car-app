import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CarService, Car } from '../../services/car';

@Component({
  selector: 'app-cars',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './cars.html',
  styleUrl: './cars.css',
})
export class CarsComponent implements OnInit {
  cars: Car[] = [];
  makeFilter: string = '';
  errorMessage: string = '';

  constructor(private carService: CarService){}
  ngOnInit(): void {
    this.loadCars();
  }

  loadCars(): void {
    this.carService.getCars(this.makeFilter).subscribe({
      next: (data) => {
        this.cars = data;
        this.errorMessage = '';
      },
      error: (err) => {
        this.errorMessage = 'Failed to load cars. Please try again.';
        console.error(err);
      }
    });
  }

  onFilterChange(): void {
    this.loadCars();
  }
}
