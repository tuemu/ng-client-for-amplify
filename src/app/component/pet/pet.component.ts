import { Component, OnInit } from '@angular/core';
import { PetService } from './../../pet/pet.service';
import { AuthService } from './../../auth/auth.service';
import { Pet } from './../pet';
 
@Component({
  selector: 'app-pet',
  templateUrl: './pet.component.html',
  styleUrls: ['./pet.component.css']
})
export class PetComponent implements OnInit {
  private token: string;
  petsData: Pet[];
  constructor(private petService: PetService, private auth: AuthService) {}
 
  ngOnInit() {
    this.token = this.auth.getIdToken();
  }
 
  Pet(): void {
    this.petService.getPets(this.token).subscribe(result => {
      this.petsData = result;
      console.log(result);
    });
  }
}