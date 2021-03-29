import {Component, OnInit} from '@angular/core';
import {GithubService} from '../../services/github.service';

@Component({
  selector: 'app-favorite-repos',
  templateUrl: './favorite-repos.component.html',
  styleUrls: ['./favorite-repos.component.scss']
})
export class FavoriteReposComponent implements OnInit {

  constructor(private githubService: GithubService) {
  }

  ngOnInit(): void {
  }
}
