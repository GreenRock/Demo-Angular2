import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, URLSearchParams, Jsonp } from "@angular/http";

import { Kitten, FlickrFeed } from "./flickrModel";
import { Observable }     from 'rxjs/Observable';
import 'rxjs/Rx';
@Injectable()
export class FlickrService {
    private  flickerAPI = "https://api.flickr.com/services/rest/";

    constructor(private http: Http, private jsonp: Jsonp) { }

    loadImage(keyword:string) : Observable<FlickrFeed[]> {
        
        let params = new URLSearchParams();
        params.set('method', 'flickr.photos.search');
        params.set('format', 'json');
        params.set('text',keyword);
        params.set('api_key', 'c31b326ef96f11652c62e3c3da74fff8');
        params.set('nojsoncallback', '1');

        let options = new RequestOptions({ search:  params });

        return this.http.get(this.flickerAPI, options)
                   //.map((response: Response) => response.json());
                    .map(res => res.json())
                    .map(val => {
                        if (val.stat === 'ok') {

                    return val.photos.photo.map((photo: any) => {
                            

                                return {    url : `https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}_m.jpg`,
                                title : photo.title,
                                id : photo.id,
                                owner : photo.owner,
                                secret : photo.secret,
                                server : photo.server,
                                farm : photo.farm,
                                ispublic : photo.ispublic,
                                isfriend : photo.isfriend,
                                isfamily : photo.isfamily};
                            })
                        }
                        else {
                            return [];
                        }
                    })
                    .catch(this.hanldeError);
    }

  
    private hanldeError(error: Response | any){
        let errMsg: string;
  
        if (error instanceof Response) {
        const body = error.json() || '';
        const err = body.error || JSON.stringify(body);
        errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
        } else {
        errMsg = error.message ? error.message : error.toString();
        }
  
        return Observable.throw(errMsg);
    }
}
