import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MissionDetailComponent } from './mission-detail/mission-detail.component';
import { Mission } from './models/mission.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, MissionDetailComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Space Mission Tracker';

  selectedMission: Mission | null = null;

  missions: Mission[] = [
    {
      nomeMissione: 'Apollo 11',
      agenzia: 'NASA',
      destinazione: 'Luna',
      anno: 1969,
      successo: true,
      equipaggio: 3
    },
    {
      nomeMissione: 'Vostok 1',
      agenzia: 'Sovietica',
      destinazione: 'Orbita terrestre',
      anno: 1961,
      successo: true,
      equipaggio: 1
    },
    {
      nomeMissione: 'Challenger STS-51-L',
      agenzia: 'NASA',
      destinazione: 'Orbita terrestre',
      anno: 1986,
      successo: false,
      equipaggio: 7
    },
    {
      nomeMissione: 'Dragon CRS-2',
      agenzia: 'SpaceX',
      destinazione: 'Stazione spaziale internazionale',
      anno: 2013,
      successo: true,
      equipaggio: 0
    },
    {
      nomeMissione: 'Artemis I',
      agenzia: 'NASA',
      destinazione: 'Luna',
      anno: 2022,
      successo: true,
      equipaggio: 0
    }
  ];

  selectMission(mission: Mission): void {
    this.selectedMission = mission;
  }
}
