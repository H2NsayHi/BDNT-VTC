import { Component, ViewChild, AfterViewInit } from '@angular/core'; 
import { RowComponent, ColComponent, TextColorDirective, CardComponent, CardHeaderComponent, CardBodyComponent, TableDirective, TableColorDirective, TableActiveDirective, BorderDirective, AlignDirective } from '@coreui/angular';
import { FormsModule } from '@angular/forms'; 
import { RouterModule, Router } from '@angular/router'; 
import { CommonModule } from '@angular/common'; 
import { LayoutComponent } from '../../forms/layout/layout.component';
import { DataService } from '../../../data.service';

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.scss'],
  standalone: true,
  imports: [
    RowComponent,
    ColComponent,
    TextColorDirective,
    CardComponent,
    CardHeaderComponent,
    CardBodyComponent,
    TableDirective,
    TableColorDirective,
    TableActiveDirective,
    BorderDirective,
    AlignDirective,
    FormsModule,
    RouterModule,
    CommonModule    
  ]
})
export class TablesComponent implements AfterViewInit {
  inputField1: string = '';
  inputField2: string = '';
  inputField3: string = '';
  inputField4: string = '';
  inputField5: string = '';

  @ViewChild(LayoutComponent, { static: false }) layoutComponent!: LayoutComponent; 

  dataset: { [key: string]: any[] } = {}; // Object type for dataset
  transformedData: any[] = []; // To hold the transformed data

  constructor(private router: Router, private dataService: DataService) { }

  ngAfterViewInit() {
    this.dataset = this.dataService.getData();
    console.log("Original dataset:", this.dataset);

    // Use setTimeout to avoid ExpressionChangedAfterItHasBeenCheckedError
    setTimeout(() => {
      this.transformDataset(); // Call the transform function on initialization
    });
  }

  transformDataset(): void {
    if (this.dataset['html_type'] && Array.isArray(this.dataset['html_type'])) {
      this.transformedData = this.dataset['html_type'].map((type, index) => ({
        loaiHTML: type,
        doiTuongHTML: this.dataset['html_object'][index],
        doiTuongAnh: this.dataset['object_station'][index] || '',
        dauViec: this.dataset['task_code'][index],
        maTram: this.dataset['station_code'][index],
        khoangThoiGian: '', // You can fill this if you have data
        ketQua: this.dataset['result'][index].toString(),
        doChinhXac: this.dataset['confidence_score'][index].toString(),
        anh: this.parseJsonArray(this.dataset['urls'][index]), // Parsing URLs
      }));
    }
    console.log("Transformed data:", this.transformedData);
  }
  
  private parseJsonArray(urlString: string): any[] {
    try {
      return urlString ? JSON.parse(urlString) : [];
    } catch (e) {
      console.error("Failed to parse JSON:", e, "Input:", urlString);
      return [];
    }
  }

  onImageClick(row: any): void {
    const queryParams = {
      loaiHTML: row.loaiHTML,
      doiTuongHTML: row.doiTuongHTML,
      doiTuongAnh: row.doiTuongAnh,
      dauViec: row.dauViec,
      ketQua: row.ketQua,
      doChinhXac: row.doChinhXac,
      khoangThoiGian: row.khoangThoiGian,
      imagePaths: row.anh.join(','),
    };

    // Navigate to the CardsComponent with the query parameters
    this.router.navigate(['/cards'], { queryParams });
  }

  exportReport() {
    console.log("Export report button clicked!");
    console.log("Dataset to export:", this.transformedData);
    // Implement export functionality here
  }
}
