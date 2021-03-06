import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventsService {

  constructor(private http: HttpClient) { }
  async getEvents() {
    return await this.http.get<Observable<Object>>('https://bandori.party/api/events/').toPromise();
  }
  async getEventsByPage(pagelink: string) {
    return await this.http.get<Observable<Object>>(pagelink).toPromise();
  }
  async getCardIds() {
    return await this.http.get<Array<number>>('https://bandori.party/api/cardids/').toPromise();
  }
  async getCard(page: number) {
    return await this.http.get<Observable<Object>>('https://bandori.party/api/cards/?page=' + page).toPromise();
  }
}
