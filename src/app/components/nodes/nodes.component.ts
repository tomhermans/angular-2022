import { Component, OnInit } from '@angular/core';
import { UtilsService } from '../../services/utils.service';
import { Action } from '../../Action';
import { BranchService } from '../../services/branch.service';

@Component({
  selector: 'app-nodes',
  templateUrl: './nodes.component.html',
  styleUrls: ['./nodes.component.scss']
})
export class NodesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
