import { Component, OnInit, enableProdMode } from '@angular/core';
import { FlickrService } from "../services/flickr.Service";
import { FlickrFeed } from "../services/flickrModel";
import { Observable }  from 'rxjs/Observable';

enableProdMode();
@Component({
    moduleId: module.id,
    selector: 'flickr-component',
    templateUrl: 'flickr-template.html',
    providers: [FlickrService]
})
export class FlickrComponent implements OnInit {
    constructor(private flickrService: FlickrService) {

     }

    ngOnInit() {
        this.keyword = "aodai"; 
     }

     loadImage(search:String){
        this.flickrService.loadImage(this.keyword).subscribe(res => this.flickrFeeds = res,
            error => this.errorMessage = <any>error);   
     }

     seach(){
         this.loadImage(this.keyword);
     }

     keyword:string;
    flickrFeeds: FlickrFeed[];
    errorMessage: any;
}