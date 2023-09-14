import { Component } from '@angular/core';
import { BaseService } from 'src/app/services/base.service';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-manufacturer',
  templateUrl: './manufacturer.component.html',
  styleUrls: ['./manufacturer.component.css'],
})
export class ManufacturerComponent {

  editing:any = false;
  manufacturers: any = [];
  manufacturerItem: any = {
    name: ''
  };
  order: any = {
    direction: 'asc',
    field: 'weight'
  };

  constructor(
    private baseService: BaseService,
    private httpService: HttpService
  ) {}

  ngOnInit() {
    return this.getItems();
  }

  getItems() {
    return this.httpService.getItem('manufacturer').subscribe((response) => {
      this.manufacturers = response;
    });
  }

  resetPage = () => {
    this.manufacturerItem = {
      name: ''
    }
    this.editing = false;
    return this.getItems();
  }

  saveItem() {
    // Check if adding new or editing
    this.editing === 'Add' ?
    this.httpService.setItem('manufacturer', this.manufacturerItem, this.resetPage): 
    this.httpService.updateItem('manufacturer', this.manufacturerItem, this.resetPage);
  }

  deleteItem(item: any) {
    this.httpService.deleteItem('manufacturer', item, this.resetPage);
  }

  editItem(item: any, index: number) {
    this.manufacturerItem.id = item.id;
    this.manufacturerItem.name = item.name;
    this.editing = index;
  }

  sort(field: string) {
    this.order.direction = (this.order.direction === 'asc' ? 'desc' : 'asc');
    this.order.field = field;
    this.manufacturers =
      this.baseService.sortArrayByFieldAndOrder(
        this.manufacturers,
        field,
        this.order.direction
      );
  }

}
