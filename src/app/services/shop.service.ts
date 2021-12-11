import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";


@Injectable({
  providedIn: 'root'
})
export class ShopService {

 
 
  private apiUrl = 'https://my-json-server.typicode.com/aymen-1996/jsonapi/shops';


  constructor(private http: HttpClient) { }

  /**
   * Get all shopes
   * @returns Observable<Shop[]>
   */
  all() {
    return this.http.get(this.apiUrl);
  }


  /**
   * Get a shop with the given id
   * @param id : shop id
   * @returns Observable<Shop>
   */
  get(id: string) {
    return this.http.get(this.apiUrl + '/' + id)
  }

  /**
   * Create a new shop
   * @param shop new shop to create
   */
  create(shop: any) {
    return this.http.post(this.apiUrl, shop);
  }

  /**
   * Update a shop with the given id
   * @param id shop id to update
   * @param shop new shop data
   */
  update(id: string, shop: any) {
    return this.http.put(this.apiUrl + '/' + id, shop);
  }

  /**
   * Delete a shop with the given id
   * @param id shop id to delete
   */
  delete(id: string) {
    return this.http.delete(this.apiUrl + '/' + id)
  }
}
