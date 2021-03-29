import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GithubService {
  private url = environment.gitHubUrl;
  private DEFAULT_PARAM = 'stars:>=100000+language:javascript';

  constructor(private http: HttpClient) {
  }

  getRepositories(search: string = ''): Observable<any> {
    return this.http.get(this.url + '/search/repositories', {params: this.paramsHandler(search)});
  }

  private paramsHandler(search: string): HttpParams {
    const params = new HttpParams();
    return !!search ? params.set('q', search) : params.set('q', this.DEFAULT_PARAM);
  }
}
