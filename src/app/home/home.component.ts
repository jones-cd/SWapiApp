import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  films: [];

  //trying here to reorder the films in episode order
  // const reorderedFilms = films.sort(function(a, b) {
  //   if (a.episode_id < b.episode_id) {
  //   return 1;
  //   } else {
  //   return -1;
  //   }
  // });
  // or...
  // const reorderedFilms = films.sort((a,b) => a.episode_id < b.episode_id ? 1 : -1);
  // console.log(reorderedFilms);


  constructor(private dataService: DataService) { }


  ngOnInit() {
  this.getFilms();
  }
  getFilms() {
    this.dataService.getFilms().subscribe(data => {
      this.films = data.results;
      console.log(this.films);
    }, error => {
      console.log('Error');
    }, () => {
      console.log('Got all films');
    });
  }


}

