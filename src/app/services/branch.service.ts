import { Injectable } from '@angular/core';
import { Branch } from '../Branch';
import { BRANCHES } from '../mock-branches';

@Injectable({
  providedIn: 'root',
})
export class BranchService {
  constructor() {}

  getBranches(): Branch[] {
    return BRANCHES;
  }
  // filterBranches(): Branch[] {
  //   let filtered = BRANCHES.filter((branch) => branch.group === 1);
  //   return filtered;
  // }

}
