import { Component } from '@angular/core';
import { DocsExampleComponent } from '@docs-components/public-api';
import { RowComponent, ColComponent, TextColorDirective, CardComponent, CardHeaderComponent, CardBodyComponent, TableDirective, TableColorDirective, TableActiveDirective, BorderDirective, AlignDirective } from '@coreui/angular';
import { FormsModule } from '@angular/forms'; // Import FormsModule
import { RouterModule } from '@angular/router'; // Import RouterModule
import { CommonModule } from '@angular/common'; // Import CommonModule
import { Router } from '@angular/router'; // Import Router

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
    FormsModule,  // Add FormsModule to imports array
    RouterModule,  // Add RouterModule to imports array
    CommonModule    // Add CommonModule to imports array
  ]
})
export class TablesComponent {
  // Declare the variables for the input fields
  inputField1: string = '';
  inputField2: string = '';
  inputField3: string = '';
  inputField4: string = '';
  inputField5: string = '';

  // Sample dataset
  dataset = [
    {
      loaiHTML: 'Loại 1',
      doiTuongHTML: 'Đối tượng 1',
      doiTuongAnh: 'Đối tượng ảnh 1',
      dauViec: 'Đầu việc 1',
      maTram: 'Mã trạm 1',
      khoangThoiGian: 'Khoảng thời gian 1',
      ketQua: 'Kết quả 1',
      doChinhXac: 'Độ chính xác 1',
      anh: ['assets/images/angular.jpg', 'assets/images/react.jpg'] // Example image paths
    },
    {
      loaiHTML: 'Loại 2',
      doiTuongHTML: 'Đối tượng 2',
      doiTuongAnh: 'Đối tượng ảnh 2',
      dauViec: 'Đầu việc 2',
      maTram: 'Mã trạm 2',
      khoangThoiGian: 'Khoảng thời gian 2',
      ketQua: 'Kết quả 2',
      doChinhXac: 'Độ chính xác 2',
      anh: ['assets/images/angular.jpg', 'assets/images/angular.jpg'] // Example image paths
    }
  ];

  constructor(private router: Router) { }

  onImageClick(row: any): void {
    this.router.navigate(['/cards'], { queryParams: row });
  }

  exportReport() {
    // Logic for exporting the report
    console.log("Export report button clicked!");
    // You can implement your export functionality here
  }
}