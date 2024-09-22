import { Component } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { DocsExampleComponent } from '@docs-components/public-api';
import { RowComponent, ColComponent, TextColorDirective, CardComponent, CardHeaderComponent, CardBodyComponent, FormControlDirective, FormDirective, FormLabelDirective, FormSelectDirective, FormCheckComponent, FormCheckInputDirective, FormCheckLabelDirective, ButtonDirective, ColDirective, InputGroupComponent, InputGroupTextDirective } from '@coreui/angular';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { forkJoin, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Router } from '@angular/router';
import { DataService } from '../../../data.service';


@Component({
    selector: 'app-layout',
    templateUrl: './layout.component.html',
    styleUrls: ['./layout.component.scss'],
    standalone: true,
    imports: [
        RowComponent, 
        ColComponent, 
        TextColorDirective, 
        CardComponent, 
        CardHeaderComponent, 
        CardBodyComponent, 
        DocsExampleComponent, 
        FormControlDirective, 
        ReactiveFormsModule, 
        FormsModule, 
        FormDirective, 
        FormLabelDirective, 
        FormSelectDirective, 
        FormCheckComponent, 
        FormCheckInputDirective, 
        FormCheckLabelDirective, 
        ButtonDirective, 
        ColDirective, 
        InputGroupComponent, 
        InputGroupTextDirective, 
        CommonModule, 
        HttpClientModule 
    ]
})
export class LayoutComponent {
  
  APIURL = "http://localhost:8000/";
  constructor(private http: HttpClient, private router: Router, private dataService: DataService) {}

  public List_HTML = { 
    html_type: [''], 
    html_object: [''], 
    object_station: [''], 
    task_code: [''],
    station_code: [''],
    result: [''],
    confidence_score: [''],
    urls:['']
  };

  tasks_html_type: any = [];
  tasks_html_object: any = [];
  tasks_object_station: any = [];
  tasks_task_code: any = [];
  tasks_station_code: any = [];
  tasks_query_all: any = [];

  options = {
    'Loại hạ tầng mạng lưới': [''],
    'Đối tượng hạ tầng mạng lưới': [''],
    'Đối tượng ảnh chụp': [''],
    'Đầu việc': [''],
    'Mã trạm': ['']
  };
  
  ngOnInit(): void {
    this.resetListHTML();
    forkJoin([
      this.html_type(),
      this.html_object(),
      this.object_station(),
      this.task_code(),
      this.station_code()
    ]).subscribe(() => {
    });
  }

  html_type(): Observable<any> {
    return this.http.get(this.APIURL + "html_type").pipe(
      tap((res: any) => {
        this.tasks_html_type = res.data;
        this.update_html_type();
      })
    );
  }

  html_object(): Observable<any> {
    return this.http.get(this.APIURL + "html_object").pipe(
      tap((res: any) => {
        this.tasks_html_object = res.data;
        this.update_html_object();
      })
    );
  }

  object_station(): Observable<any> {
    return this.http.get(this.APIURL + "object_station").pipe(
      tap((res: any) => {
        this.tasks_object_station = res.data;
        this.update_object_station();
      })
    );
  }

  task_code(): Observable<any> {
    return this.http.get(this.APIURL + "task_code").pipe(
      tap((res: any) => {
        this.tasks_task_code = res.data;
        this.update_task_code();
      })
    );
  }

  station_code(): Observable<any> {
    return this.http.get(this.APIURL + "station_code").pipe(
      tap((res: any) => {
        this.tasks_station_code = res.data;
        this.update_station_code();
      })
    );
  }

  removeDuplicatesAndEmpty(arr: any[]): any[] {
    return arr.filter((value, index, self) => value && self.indexOf(value) === index);
  }

  update_html_type() {
    this.tasks_html_type.forEach((task: any) => {
      const { html_type } = task;
      this.options['Loại hạ tầng mạng lưới'].push(html_type);
    });
    this.options['Loại hạ tầng mạng lưới'] = this.removeDuplicatesAndEmpty(this.options['Loại hạ tầng mạng lưới']);
  }

  update_html_object() {
    this.tasks_html_object.forEach((task: any) => {
      const { html_object } = task;
      this.options['Đối tượng hạ tầng mạng lưới'].push(html_object);
    });
    this.options['Đối tượng hạ tầng mạng lưới'] = this.removeDuplicatesAndEmpty(this.options['Đối tượng hạ tầng mạng lưới']);
  }

  update_object_station() {
    this.tasks_object_station.forEach((task: any) => {
      const { object_station_name } = task;
      this.options['Đối tượng ảnh chụp'].push(object_station_name);
    });
    this.options['Đối tượng ảnh chụp'] = this.removeDuplicatesAndEmpty(this.options['Đối tượng ảnh chụp']);
  }

  update_task_code() {
    this.tasks_task_code.forEach((task: any) => {
      const { task_code } = task;
      this.options['Đầu việc'].push(task_code);
    });
    this.options['Đầu việc'] = this.removeDuplicatesAndEmpty(this.options['Đầu việc']);
  }

  update_station_code() {
    this.tasks_station_code.forEach((task: any) => {
      const { station_code } = task;
      this.options['Mã trạm'].push(station_code);
    });
    this.options['Mã trạm'] = this.removeDuplicatesAndEmpty(this.options['Mã trạm']);
  }

  formatDate(date: Date): string {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Tháng bắt đầu từ 0
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`; // Định dạng yyyy-mm-dd
  }
  resetListHTML() {
    this.List_HTML = { 
      html_type: [], 
      html_object: [], 
      object_station: [], 
      task_code: [],
      station_code: [],
      result: [],
      confidence_score: [],
      urls: []
    };
  }
  onSubmit(event: Event) {
    event.preventDefault(); // Ngăn chặn gửi biểu mẫu mặc định
    this.resetListHTML();
    
    const inputField1 = (document.getElementById('inputField1') as HTMLSelectElement).value;
    const inputField2 = (document.getElementById('inputField2') as HTMLSelectElement).value;
    const inputField3 = (document.getElementById('inputField3') as HTMLSelectElement).value;
    const inputField4 = (document.getElementById('inputField4') as HTMLSelectElement).value;
    const inputField5 = (document.getElementById('inputField5') as HTMLSelectElement).value;
    const inputField6 = (document.getElementById('inputField6') as HTMLSelectElement).value;
    const inputField7 = (document.getElementById('inputField7') as HTMLSelectElement).value;
    const inputField8 = (document.getElementById('inputField8') as HTMLInputElement).value;

    let dateRange: Date;
    const currentDate = new Date();
    
    switch (inputField6) {
      case '1 tháng - nay':
          dateRange = new Date(currentDate.setMonth(currentDate.getMonth() - 1));
          break;
      case '3 tháng - nay':
          dateRange = new Date(currentDate.setMonth(currentDate.getMonth() - 3));
          break;
      case '6 tháng - nay':
          dateRange = new Date(currentDate.setMonth(currentDate.getMonth() - 6));
          break;
      case '1 năm - nay':
          dateRange = new Date(currentDate.setFullYear(currentDate.getFullYear() - 1));
          break;
      default:
          dateRange = new Date();
          break;
    }

    let body = new FormData();
    body.append("html_type", inputField1 === '' ? 'isempty' : inputField1);
    body.append("html_object", inputField2 === '' ? 'isempty' : inputField2);
    body.append("object_station", inputField3 === '' ? 'isempty' : inputField3);
    body.append("task_code", inputField4 === '' ? 'isempty' : inputField4);
    body.append("station_code", inputField5 === '' ? 'isempty' : inputField5);
    body.append("time", inputField6 === '' ? 'isempty' : this.formatDate(dateRange)); // Định dạng ngày
    body.append("result", inputField7 === '' ? 'isempty' : (inputField7 === 'Tốt' ? '1' : '0'));
    body.append("acc", inputField8 === '' ? 'isempty' : inputField8);

    this.query_all(body).subscribe((res: any) => {
      this.tasks_query_all = res.data;
      this.refreshHTMLList(); // Update List_HTML
      this.dataService.setData(this.List_HTML); // Set data in the service
      console.log(this.List_HTML); // Log the List_HTML
    });

    this.router.navigate(['/base/tables']);
  }
  refreshHTMLList() {
    this.resetListHTML(); // Reset before populating
    this.tasks_query_all.forEach((task: any) => {
        const { html_type, html_object, object_station, task_code, result, station_code, urls, confidence_score } = task;
        this.List_HTML.html_type.push(html_type);
        this.List_HTML.html_object.push(html_object);
        this.List_HTML.object_station.push(object_station);
        this.List_HTML.task_code.push(task_code);
        this.List_HTML.result.push(result);
        this.List_HTML.station_code.push(station_code);
        this.List_HTML.confidence_score.push(confidence_score);
        this.List_HTML.urls.push(urls);
    });
}


  query_all(body: FormData): Observable<any> {
    return this.http.post(this.APIURL + "query_all", body).pipe(
      tap((res: any) => {
        this.tasks_query_all = res.data;
        this.refreshHTMLList(); // Cập nhật List_HTML
        console.log(this.List_HTML)
      })
    );
  }
}
