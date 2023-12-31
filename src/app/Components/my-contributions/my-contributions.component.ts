/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-inferrable-types */
import { Component, OnInit } from '@angular/core';
import { dataExport, dataExportWithProgramNames } from 'src/app/common.func';
import { ParticipantService } from 'src/app/services/participant.service';

@Component({
  selector: 'app-my-contributions',
  templateUrl: './my-contributions.component.html',
  styleUrls: ['./my-contributions.component.css'],
})
export class MyContributionsComponent implements OnInit {
  email: string;
  currentYear: number;
  points = 0;
  zeroContribution = false;
  participantDetails: any[];
  isAdmin: string | null = sessionStorage.getItem('admin');
  page = 1;
  itemsPerPageOptions = [
    5, 10, 15, 20, 25, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100,
  ];

  itemPerPage: number = 10;

  constructor(private participantService: ParticipantService) {
    this.ngOnInit();
    this.currentYear = new Date().getFullYear();
  }

  handleProfileExport() {
    dataExportWithProgramNames(this.participantDetails, 'contribution-data');
  }

  async ngOnInit() {
    this.email = sessionStorage.getItem('email') as string;
    await this.participantService
      .getParticipantByEmail(this.email, this.currentYear)
      .then((e) => {
        if (e.length == 0) {
          this.zeroContribution = true;
        } else {
          this.participantDetails = e;
          this.participantDetails.forEach((x) => {
            this.points += x['points'];
          });
        }
      });
  }
}
