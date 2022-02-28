import { Component, OnInit } from '@angular/core';
import { KindOfShootingService, QandAService } from "src/api/lib/services";
import { Qandum } from 'src/api/lib/models/qandum';

@Component({
  selector: 'app-q-and-a',
  templateUrl: './q-and-a.component.html',
  styleUrls: ['./q-and-a.component.scss']
})
export class QAndAComponent implements OnInit {
  public qanda1: Qandum[];
  public qanda: Qandum[];

  constructor(private readonly qandAService: QandAService) { }

  ngOnInit(): void {
    this.getQandAs();
  }

  public getQandAs() {
    this.qandAService.apiV1QandAGetAllGet$Json().subscribe(
      (result) => {
        this.qanda1 = result.slice(0, result.length/2);
        this.qanda = result.slice(result.length/2, result.length);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
