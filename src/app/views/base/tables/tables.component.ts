import { Component, ViewChild, AfterViewInit } from '@angular/core'; 
import { DocsExampleComponent } from '@docs-components/public-api';
import { RowComponent, ColComponent, TextColorDirective, CardComponent, CardHeaderComponent, CardBodyComponent, TableDirective, TableColorDirective, TableActiveDirective, BorderDirective, AlignDirective } from '@coreui/angular';
import { FormsModule } from '@angular/forms'; 
import { RouterModule } from '@angular/router'; 
import { CommonModule } from '@angular/common'; 
import { Router } from '@angular/router'; 
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
    DocsExampleComponent,
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

  dataset: { [key: string]: any[] } = {}; // Change to an object type
  transformedData: any[] = []; // To hold the transformed data
  displayedData: any;

  constructor(private router: Router, private dataService: DataService) { }

  ngAfterViewInit() {
    this.displayedData = this.dataService.getData();
    console.log(this.displayedData);

    // Use setTimeout to avoid ExpressionChangedAfterItHasBeenCheckedError
    setTimeout(() => {
      this.transformDataset(); // Call the transform function on initialization
    });
  }

  transformDataset(): void {
    console.log("Original dataset:", this.displayedData); // Debug log
    if (this.displayedData['html_type'] && Array.isArray(this.displayedData['html_type'])) {
      this.transformedData = this.displayedData['html_type'].map((type, index) => ({
        loaiHTML: type,
        doiTuongHTML: this.displayedData['html_object'][index],
        doiTuongAnh: this.displayedData['object_station'][index] || '',
        dauViec: this.displayedData['task_code'][index],
        maTram: this.displayedData['station_code'][index],
        khoangThoiGian: '',
        ketQua: this.displayedData['result'][index].toString(),
        doChinhXac: this.displayedData['confidence_score'][index].toString(),
        anh: this.parseJsonArray(this.displayedData['urls'][index]),
      }));
    }
    console.log("Transformed data:", this.transformedData); // Debug log
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
    const queryParams = { ...row };
    delete queryParams.anh; // Optional

    this.router.navigate(['/cards'], { queryParams });
  }

  exportReport() {
    console.log("Export report button clicked!");
    console.log("Dataset to export:", this.transformedData); // Updated to reflect the current dataset

    // Implement export functionality here
  }
}
