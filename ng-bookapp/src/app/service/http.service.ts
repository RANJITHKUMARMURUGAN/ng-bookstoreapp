import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  token: string = localStorage.getItem("access_token");

  private baseUrl: string = "http://localhost:8080/user";
  constructor(private http: HttpClient) { }

  registerUser(user): Observable<any> {
    return this.http.post(this.baseUrl+"/register", user);
  }
  getAllBooks(): Observable<any> {
    return this.http.get("http://localhost:8080/book/get?token")
  }
  addToCart(id: number): Observable<any> {
    console.log(this.token);
    return this.http.post("http://localhost:8080/cart/add/"+id+"?token="+this.token, null)
  }
  getAllCartItems(): Observable<any> {
    return this.http.get("http://localhost:8080/cart/getAll");
  }
  deleteCartItems(id: number): Observable<any> {
    return this.http.delete("http://localhost:8080/cart/delete/"+id+"?token="+this.token)
  }
  placeOrder(order: any): Observable<any> {
    return this.http.post("http://localhost:8080/order/place?token="+this.token, order);
  }
}
