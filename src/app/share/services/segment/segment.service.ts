import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Segment, SegmentPost, SegmentPut } from '../../entities/segment';


@Injectable({
  providedIn: 'root'
})
export class SegmentService {

  API_URL = environment.API_URL;

  constructor(private http: HttpClient) { }
  

  get() {
    return this.http.get<any>(this.API_URL + 'segments').toPromise()
      .then(res => <Segment[]>res.data)
      .then(data => { return data; });
  }
  post(segment: SegmentPost) {
    return this.http.post<any>(this.API_URL + 'segments', segment).toPromise()
      .then(res => <Segment[]>res.data)
      .then(data => { return data; });
  }
  put(idSegment: number, segment: SegmentPut) {
    return this.http.put<any>(this.API_URL + 'segments/' + idSegment, segment).toPromise()
      .then(res => res)
      .then(data => { return data; });
  }
  delete(idSegment: number) {

    return this.http.delete<any>(this.API_URL + 'segments/' + idSegment).toPromise()
      .then(res => res)
      .then(data => { return data; });
  }
}
