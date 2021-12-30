import { Injectable } from '@angular/core';
import { HttpClient, HttpHandler, HttpParams } from '@angular/common/http';
import { environment } from '../../../environments/environment';



@Injectable({
    providedIn: 'root'
})
export class PlacesApiClient extends HttpClient {

    public baseUrl: string = 'https://api.mapbox.com/geocoding/v5/mapbox.places';

    constructor( handler: HttpHandler ){
        super(handler);
    }

    public override get<T>( url: string, options: {
        params?: HttpParams | {
            [param: string]: string | number | boolean | ReadonlyArray<string | number | boolean>;
        };
    }) {

        url = this.baseUrl + url;

        return super.get<T>( url, {
            params: {
                limit: 5,
                language: 'es',
                access_token: environment.apiKey,
                ...options.params
            }
        });


    }

}


