import { Injectable } from '@angular/core';

import { Storage } from '@ionic/storage-angular';
import { PointsByDate } from './tab1/entity';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  private _storage: Storage | null = null;

  constructor(private storage: Storage) {
    this.init();
  }

  async init() {
    // If using, define drivers here: await this.storage.defineDriver(/*...*/);
    const storage = await this.storage.create();
    this._storage = storage;
  }

  // Create and expose methods that users of this service can
  // call, for example:
  public set(key: string, value: any) {
    this._storage?.set(key, value);
  }

  public get(key: string) {
    return this._storage?.get(key);
  }

  async savePoints(points: PointsByDate) {
    // Get the existing points from the storage
    let existingPoints = await  this.get('points');
    
    // If no points exist yet, initialize an empty array
    if (!existingPoints) {
      existingPoints = [];
    }
    
    // Add the new point to the array
    existingPoints.push(points);
    
    // Save the updated array back to the storage
    this.set('points', existingPoints);
  }
}