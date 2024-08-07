import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AppService {

  baseUrl: any= 'https://formspree.io/f/myzgwnrn';

  constructor( private http: HttpClient ) { }

  sendMail(dadosEmail: any = {}): Promise<any> {
    return this.http.post<any>(this.baseUrl, dadosEmail).toPromise();
  }
}
