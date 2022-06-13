import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class ApixuService {
  constructor(private http: HttpClient) {}

  getWeather(location) {
    return this.http.get(
      "http://api.weatherapi.com/v1/forecast.json?key=d48e8b26467a48e1a0384142221306&q=" +
        location+
      "&days=3&aqi=yes&alerts=no"
    );
  }
}








