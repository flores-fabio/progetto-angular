import { Component, Input } from '@angular/core';

export interface Mission {
  name: string;
  // aggiungi altri campi se servono
}

@Component({
  selector: 'app-mission-detail',
  standalone: true,
  imports: [],
  templateUrl: './mission-detail.component.html',
  styleUrl: './mission-detail.component.css'
})
export class MissionDetailComponent {

  mission!: Mission;

  @Input({ required: true })
  set missionInput(value: Mission) {
    this.mission = value;
  }

}