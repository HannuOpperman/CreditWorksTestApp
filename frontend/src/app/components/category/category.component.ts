import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { BaseService } from 'src/app/services/base.service';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent {

  editing:any = false;
  order: any = {
    direction: 'asc',
    field: 'weight'
  };
  categories: any = [];
  categoryItem: any = {
    name: '',
    weight: 0
  };

  icons: string[] = [
    '3d_rotation',
    'accessibility',
    'accessible',
    'accessible_forward',
    'account_balance',
    'account_balance_wallet',
    'account_box',
    'account_circle',
    'add_shopping_cart',
    'alarm',
    'alarm_add',
    'alarm_off',
    'alarm_on',
    'all_out',
    'android',
    'announcement',
    'arrow_right_alt',
    'aspect_ratio',
    'assessment',
    'assignment',
    'assignment_ind',
    'assignment_late',
    'assignment_return',
    'assignment_returned'
  ];

  constructor(
    private baseService: BaseService,
    private httpService: HttpService
  ) {}

  ngOnInit() {
    return this.getItems();
  }

  getItems() {
    return this.httpService.getItem('category').subscribe((response) => {
      this.categories = this.baseService.sortArrayByFieldAndOrder(response, 'weight', 'asc');
    });
  }

  resetPage = () => {
    this.categoryItem = {
      name: '',
      weight: '',
      icon: ''
    }
    this.editing = false;
    return this.getItems();
  }

  saveItem() {
    // Check if adding new or editing
    this.editing === 'Add' ?
    this.httpService.setItem('category', this.categoryItem, this.resetPage): 
    this.httpService.updateItem('category', this.categoryItem, this.resetPage);
  }

  deleteItem(item: any) {
    this.httpService.deleteItem('category', item, this.resetPage);
  }

  editItem(item: any, index: number) {
    this.categoryItem = item;
    this.editing = index;
  }

  sort(field: string) {
    this.order.direction = (this.order.direction === 'asc' ? 'desc' : 'asc');
    this.order.field = field;
    this.categories =
      this.baseService.sortArrayByFieldAndOrder(
        this.categories,
        field,
        this.order.direction
      );
  }

}
