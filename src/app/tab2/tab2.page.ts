import { StorageService } from 'src/app/storage-service';
import { Component, OnChanges, OnInit } from '@angular/core';
import { PointsByDate } from '../tab1/entity';
import { MedalsService } from '../services/medals.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
})
export class Tab2Page  {
  points: PointsByDate [] = []

  constructor(private storageService: StorageService, private medalsService: MedalsService) {}
 

  async ionViewDidEnter(): Promise<void> {
    this.points = await this.storageService.get('points')?.then((points) => points.reverse());
  
  }
 
}
