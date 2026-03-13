import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import * as signalR from '@microsoft/signalr';

interface CarRegistrationStatus {
  id: number;
  make: string;
  model: string;
  registrationExpiry: string;
  status: string;
}

@Component({
  selector: 'app-registration',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './registration.html',
  styleUrl: './registration.css',
})
export class RegistrationComponent implements OnInit, OnDestroy{
  cars: CarRegistrationStatus[] = []
  connectionStatus: string = 'Connecting...';
  private hubConnection!: signalR.HubConnection;

  //angular change detection not picking up the SignalR data updates so we inject ChangeDetectorRef
  constructor(private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.startConnection();
  }

  ngOnDestroy(): void {
    this.hubConnection.stop();
  }

  startConnection(): void {
    this.hubConnection = new signalR.HubConnectionBuilder()
      .withUrl('/hubs/registration', {
        transport: signalR.HttpTransportType.LongPolling
      })
      .withAutomaticReconnect()
      .build();
    
      this.hubConnection.on('ReceiveRegistrationStatus', (data: CarRegistrationStatus[]) => {
        console.log('Received data: ', data);
        this.cars = data;
        this.cdr.detectChanges();
      });

      this.hubConnection.start().then(() => {
        this.connectionStatus = 'Connected';
        this.cdr.detectChanges();
        console.log('SignalR Connected');
      })
      .catch((err) => {
        this.connectionStatus = 'Connection failed';
        console.error(err);
      })
  }
}
