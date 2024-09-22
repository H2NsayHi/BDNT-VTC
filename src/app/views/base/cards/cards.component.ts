import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RowComponent, ColComponent, CardComponent, CardBodyComponent } from '@coreui/angular';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss'],
  standalone: true,
  imports: [CommonModule, RowComponent, ColComponent, CardComponent, CardBodyComponent]
})
export class CardsComponent {
  loaiHTML: string = '';
  doiTuongHTML: string = '';
  doiTuongAnh: string = '';
  dauViec: string = '';
  ketQua: string = '';
  doChinhXac: string = '';
  khoangThoiGian: string = '';
  imagePaths: string[] = [];

  constructor(private route: ActivatedRoute) {
    this.route.queryParams.subscribe(params => {
      this.loaiHTML = params['loaiHTML'] || '';
      this.doiTuongHTML = params['doiTuongHTML'] || '';
      this.doiTuongAnh = params['doiTuongAnh'] || '';
      this.dauViec = params['dauViec'] || '';
      this.ketQua = params['ketQua'] || '';
      this.doChinhXac = params['doChinhXac'] || '';
      this.khoangThoiGian = params['khoangThoiGian'] || '';
      this.imagePaths = params['imagePaths'] ? params['imagePaths'].split(',') : [];
    });
  }
}
