import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {DataService} from '../data.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {
  movieId: number;
  movie: any;
  constructor(private route: ActivatedRoute, private dataService: DataService) { }

  ngOnInit() {
   // @ts-ignore
    this.movieId = this.route.snapshot.paramMap.get('id');
    this.getDetails(this.movieId);
  }
  getDetails(movieNumber: number) {
    this.dataService.getFilmDetails(movieNumber).subscribe(data => {
      this.movie = data;
      console.log(this.movie);
    });
  }
}


