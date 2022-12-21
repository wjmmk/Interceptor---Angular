import { Component } from '@angular/core';
import { LoaderService } from './services/loader.service';
import { NbaService } from './services/nba.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Interceptor-Concept';

  players: any[] = [];
  teams: any[] = [];

  loading$ = this.loader.isLoading$;

  constructor(
    private nbaApi: NbaService,
    private loader: LoaderService
  ){}

  loadPlayers() {

    this.players = []

    this.nbaApi.getPlayers().subscribe( (data) => {
      this.players = data
    })
   
  }

  loadTeams() {

    this.teams = []

    this.nbaApi.getTeams().subscribe( (data) => {
      this.teams = data
    })
  }
}
