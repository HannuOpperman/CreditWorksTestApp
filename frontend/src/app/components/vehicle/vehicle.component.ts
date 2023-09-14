import { Component } from '@angular/core';
import { BaseService } from 'src/app/services/base.service';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-vehicle',
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.css']
})
export class VehicleComponent {

  editing:any = false;

  manufacturers: any = [];
  categories: any = [];
  vehicles: any = [];
  order: any = {
    direction: 'asc',
    field: 'weight'
  };
  vehicleItem: any = {
    name: '',
    manufacturer: '',
    yearModel: '',
    weight: ''
  }

  constructor(
    private baseService: BaseService,
    private httpService: HttpService
  ) {}

  ngOnInit() {
    return this.getItems();
  }

  getItems() {
    this.httpService.getItem('category').subscribe((response) => {
      this.categories = this.baseService.sortArrayByFieldAndOrder(response, 'weight', 'asc');
    });

    this.httpService.getItem('manufacturer').subscribe((response) => {
      this.manufacturers = response;
    });

    this.httpService.getItem('vehicle').subscribe((response) => {
      this.vehicles = this.baseService.sortArrayByFieldAndOrder(response, 'weight', 'asc');
    });
  }

  getVehicleCategoryIcon(vehicle: any) {
    let sortedCategoryList = this.baseService.sortArrayByFieldAndOrder(this.categories, 'weight', 'asc');
    for (let i = 0; i < sortedCategoryList.length; i++) {
      if (Number(sortedCategoryList[i].weight) < Number(vehicle.weight)) {
        if (sortedCategoryList[i + 1] &&
            Number(sortedCategoryList[i + 1].weight) >= Number(vehicle.weight)) {
            return sortedCategoryList[i].icon;
        }
      }
    }
  }

  resetPage = () => {
    this.vehicleItem = {
      name: '',
      manufacturer: '',
      yearModel: '',
      weight: ''
    }
    this.editing = false;
    return this.getItems();
  }

  async saveItem() {
    // Check if adding new or editing
    this.editing === 'Add' ?
    this.httpService.setItem('vehicle', this.vehicleItem, this.resetPage): 
    this.httpService.updateItem('vehicle', this.vehicleItem, this.resetPage);
  }

  deleteItem(item: any) {
    this.httpService.deleteItem('vehicle', item, this.resetPage);
  }

  editItem(item: any, index: number) {
    this.vehicleItem = item;
    this.editing = index;
  }

  sort(field: string) {
    this.order.direction = (this.order.direction === 'asc' ? 'desc' : 'asc');
    this.order.field = field;
    this.vehicles =
      this.baseService.sortArrayByFieldAndOrder(
        this.vehicles,
        field,
        this.order.direction
      );
    
  }

}
