import {Component, OnInit} from '@angular/core';
import {GithubService} from '../../services/github.service';
import {debounceTime, map, switchMap, tap} from 'rxjs/operators';
import {FormControl, FormGroup} from '@angular/forms';

export interface IGitHubRepo {
  position: number;
  full_name: string;
  stargazers_count: number;
  favorite: false;
}

@Component({
  selector: 'app-top-repos',
  templateUrl: './top-repos.component.html',
  styleUrls: ['./top-repos.component.scss']
})
export class TopReposComponent implements OnInit {
  displayedColumns: string[] = ['position', 'full_name', 'stargazers_count', 'favorite'];
  dataSource: Array<any> = [];
  gitHubRepos: any = null;
  searchFromGroup: FormGroup;
  currentRepo: any = null;

  constructor(private gitHubService: GithubService) {
    this.searchFromGroup = new FormGroup({
      search: new FormControl(null)
    });
  }

  ngOnInit(): void {
    this.gitHubService.getRepositories()
      .pipe(
        tap(resp => this.gitHubRepos = resp.items),
        map(resp => resp.items.map(this.tableHandler)))
      .subscribe(dataSource => this.dataSource = dataSource);

    this.searchFromGroup.valueChanges
      .pipe(
        debounceTime(1000),
        switchMap((value) => this.gitHubService.getRepositories(value.search.trim())),
        tap(resp => this.gitHubRepos = resp.items),
        map(resp => resp.items.map(this.tableHandler))
      )
      .subscribe(dataSource => this.dataSource = dataSource);
  }

  chooseCurrentRepo(repo: any): any {
    this.currentRepo = this.gitHubRepos.find(((gitHubRepo: any) => gitHubRepo.full_name === repo.full_name));
  }

  tableHandler = (value: IGitHubRepo, idx: number) => ({
    position: idx,
    full_name: value.full_name,
    stargazers_count: value.stargazers_count,
    favorite: false
  })
}
