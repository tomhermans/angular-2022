import { Component, OnInit } from '@angular/core';
import { UtilsService } from '../../services/utils.service';
import { Branch } from '../../Branch';
// import { BRANCHES } from '../../mock-branches';
import { BranchService } from '../../services/branch.service';


@Component({
  selector: 'app-branches',
  templateUrl: './branches.component.html',
  styleUrls: ['./branches.component.scss'],
})
export class BranchesComponent implements OnInit {
  branches: Branch[] = [];
 
  // nodes = BRANCHES;
  // branches = BRANCHES;

  constructor(private branchService: BranchService) {}

  ngOnInit(): void {
    console.log(this.branches);
    this.branches = this.branchService.getBranches();
  }
}
