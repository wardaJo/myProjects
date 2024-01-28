import { Component, Input } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {
   @Input() searchKey: string='';
   
  constructor(private router:Router){}

  onSearch(event:any) {
    // If the input search is empty by the user, we should show all the users
      this.searchKey=event;
      if(this.searchKey==null || this.searchKey== undefined||this.searchKey.trim()==''){
        this.router.navigate(['/']) // show all the users
      }else{
        this.router.navigate(['searchKey/'+this.searchKey]); // shoe just result of the searching
      }
   }
}
