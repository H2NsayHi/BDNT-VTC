import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  CardBodyComponent,
  CardComponent,
  CardHeaderComponent,
  ColComponent,
  RowComponent
} from '@coreui/angular';

interface TableData {
  loaiHTML: string;
  doiTuongHTML: string;
  doiTuongAnhChup: string;
  dauViec: string;
}

interface FilterOptions {
  loaiHTML: string[];
  doiTuongHTML: string[];
  doiTuongAnhChup: string[];
  dauViec: string[];
}

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    CardBodyComponent,
    CardComponent,
    CardHeaderComponent,
    ColComponent,
    RowComponent
  ]
})
export class AppTabsComponent {
  public tableData: TableData[] = [
    { loaiHTML: 'AC V5 1P Mặt trước', doiTuongHTML: 'Phát hiện Tủ nguồn AC V5 1P', doiTuongAnhChup: 'Kiểm tra MOV Tủ nguồn AC V5 1P', dauViec: 'Kiểm tra khóa liên động Tủ nguồn AC V5 1P' },
    { loaiHTML: 'AC V5 1P Bên trong', doiTuongHTML: 'Kiểm tra bộ lọc cắt sét Tủ nguồn AC V5 1P', doiTuongAnhChup: '', dauViec: '' },
    { loaiHTML: 'AC V5 3P Mặt trước', doiTuongHTML: 'Phát hiện Tủ nguồn AC V5 3P', doiTuongAnhChup: 'Kiểm tra MOV Tủ nguồn AC V5 3P', dauViec: 'Kiểm tra khóa liên động Tủ nguồn AC V5 3P' },
    { loaiHTML: 'AC V5 3P Bên trong', doiTuongHTML: 'Kiểm tra bộ lọc cắt sét Tủ nguồn AC V5 3P', doiTuongAnhChup: '', dauViec: '' },
    { loaiHTML: 'AC V2 Mặt trước', doiTuongHTML: 'Phát hiện Tủ nguồn AC V2', doiTuongAnhChup: '', dauViec: '' },
    { loaiHTML: 'AC V2 Bên trong', doiTuongHTML: 'Kiểm tra bộ lọc cắt sét Tủ nguồn AC V2', doiTuongAnhChup: '', dauViec: '' },
    { loaiHTML: 'TBNT Rack 19', doiTuongHTML: 'Phát hiện Rack 19', doiTuongAnhChup: '', dauViec: '' },
    { loaiHTML: 'BTS Móng co 1', doiTuongHTML: 'Phát hiện Hành lang Móng co 1', doiTuongAnhChup: 'Kiểm tra nứt Hành lang Móng co 1', dauViec: 'Kiểm tra vỡ Hành lang Móng co 1' },
    { loaiHTML: 'BTS Móng co 1', doiTuongHTML: 'Kiểm tra sụt lún Hành lang Móng co 1', doiTuongAnhChup: 'Kiểm tra nổi cánh móng Hành lang Móng co 1', dauViec: 'Kiểm tra ngập nước Hành lang Móng co 1' },
    { loaiHTML: 'BTS Móng co 1', doiTuongHTML: 'Kiểm tra dây tiếp địa han gỉ Móng co 1', doiTuongAnhChup: 'Kiểm tra han gỉ Móng co 1', dauViec: 'Kiểm tra nứt Móng co 1' },
    { loaiHTML: 'BTS Móng co 1', doiTuongHTML: 'Phát hiện Móng co 1', doiTuongAnhChup: '', dauViec: '' },
    { loaiHTML: 'BTS Móng co 2', doiTuongHTML: 'Phát hiện Hành lang Móng co 2', doiTuongAnhChup: 'Kiểm tra nứt Hành lang Móng co 2', dauViec: 'Kiểm tra vỡ Hành lang Móng co 2' },
    { loaiHTML: 'BTS Móng co 2', doiTuongHTML: 'Kiểm tra sụt lún Hành lang Móng co 2', doiTuongAnhChup: 'Kiểm tra nổi cánh móng Hành lang Móng co 2', dauViec: 'Kiểm tra ngập nước Hành lang Móng co 2' },
    { loaiHTML: 'BTS Móng co 2', doiTuongHTML: 'Kiểm tra dây tiếp địa han gỉ Móng co 2', doiTuongAnhChup: 'Kiểm tra han gỉ Móng co 2', dauViec: 'Kiểm tra nứt Móng co 2' },
    { loaiHTML: 'BTS Móng co 2', doiTuongHTML: 'Phát hiện Móng co 2', doiTuongAnhChup: '', dauViec: '' },
    { loaiHTML: 'BTS Móng co 3', doiTuongHTML: 'Phát hiện Hành lang Móng co 3', doiTuongAnhChup: 'Kiểm tra nứt Hành lang Móng co 3', dauViec: 'Kiểm tra vỡ Hành lang Móng co 3' },
    { loaiHTML: 'BTS Móng co 3', doiTuongHTML: 'Kiểm tra sụt lún Hành lang Móng co 3', doiTuongAnhChup: 'Kiểm tra nổi cánh móng Hành lang Móng co 3', dauViec: 'Kiểm tra ngập nước Hành lang Móng co 3' },
    { loaiHTML: 'BTS Móng co 3', doiTuongHTML: 'Kiểm tra dây tiếp địa han gỉ Móng co 3', doiTuongAnhChup: 'Kiểm tra han gỉ Móng co 3', dauViec: 'Kiểm tra nứt Móng co 3' },
    { loaiHTML: 'BTS Móng co 3', doiTuongHTML: 'Phát hiện Móng co 3', doiTuongAnhChup: '', dauViec: '' },
    { loaiHTML: 'BTS Móng co 4', doiTuongHTML: 'Phát hiện Hành lang Móng co 4', doiTuongAnhChup: 'Kiểm tra nứt Hành lang Móng co 4', dauViec: 'Kiểm tra vỡ Hành lang Móng co 4' },
    { loaiHTML: 'BTS Móng co 4', doiTuongHTML: 'Kiểm tra sụt lún Hành lang Móng co 4', doiTuongAnhChup: 'Kiểm tra nổi cánh móng Hành lang Móng co 4', dauViec: 'Kiểm tra ngập nước Hành lang Móng co 4' },
    { loaiHTML: 'BTS Móng co 4', doiTuongHTML: 'Kiểm tra dây tiếp địa han gỉ Móng co 4', doiTuongAnhChup: 'Kiểm tra han gỉ Móng co 4', dauViec: 'Kiểm tra nứt Móng co 4' },
    { loaiHTML: 'BTS Móng co 4', doiTuongHTML: 'Phát hiện Móng co 4', doiTuongAnhChup: '', dauViec: '' },
    { loaiHTML: 'BTS Móng co N', doiTuongHTML: 'Phát hiện Hành lang Móng co N', doiTuongAnhChup: 'Kiểm tra nứt Hành lang Móng co N', dauViec: 'Kiểm tra vỡ Hành lang Móng co N' },
    { loaiHTML: 'BTS Móng co N', doiTuongHTML: 'Kiểm tra sụt lún Hành lang Móng co N', doiTuongAnhChup: 'Kiểm tra nổi cánh móng Hành lang Móng co N', dauViec: 'Kiểm tra ngập nước Hành lang Móng co N' },
    { loaiHTML: 'BTS Móng co N', doiTuongHTML: 'Kiểm tra dây tiếp địa han gỉ Móng co N', doiTuongAnhChup: 'Kiểm tra han gỉ Móng co N', dauViec: 'Kiểm tra nứt Móng co N' },
    { loaiHTML: 'BTS Móng co N', doiTuongHTML: 'Phát hiện Móng co N', doiTuongAnhChup: '', dauViec: '' }
  ];
  

  public selectedFilters: { [key: string]: string } = {
    loaiHTML: '',
    doiTuongHTML: '',
    doiTuongAnhChup: '',
    dauViec: ''
  };

  public filterOptions: FilterOptions = {
    loaiHTML: this.getUniqueValues('loaiHTML'),
    doiTuongHTML: this.getUniqueValues('doiTuongHTML'),
    doiTuongAnhChup: this.getUniqueValues('doiTuongAnhChup'),
    dauViec: this.getUniqueValues('dauViec')
  };

  public selectedHeader: string = '';

  private getUniqueValues(key: keyof TableData): string[] {
    const values = this.tableData.map(item => item[key]);
    return Array.from(new Set(values));
  }

  public updateFilterOptions() {
    // Reset the selected filter when changing the header
    this.selectedFilters[this.selectedHeader] = '';
  }

  public get filteredData(): TableData[] {
    return this.tableData.filter(item => {
      return (
        (!this.selectedFilters['loaiHTML'] || item['loaiHTML'] === this.selectedFilters['loaiHTML']) &&
        (!this.selectedFilters['doiTuongHTML'] || item['doiTuongHTML'] === this.selectedFilters['doiTuongHTML']) &&
        (!this.selectedFilters['doiTuongAnhChup'] || item['doiTuongAnhChup'] === this.selectedFilters['doiTuongAnhChup']) &&
        (!this.selectedFilters['dauViec'] || item['dauViec'] === this.selectedFilters['dauViec'])
      );
    });
  }
}
