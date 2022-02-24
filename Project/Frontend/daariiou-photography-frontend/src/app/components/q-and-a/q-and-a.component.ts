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

  constructor(private readonly qandAService: QandAService, private readonly kosService: KindOfShootingService) { }

  ngOnInit(): void {
    this.getQandAs();
  }

  public getQandAs() {
    this.kosService.apiV1KindOfShootingGetGet$Json().subscribe(
      (result) => {
        console.log(result)
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
