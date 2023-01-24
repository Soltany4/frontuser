import { Component } from '@angular/core';
import { Matiere } from '../../matiere';
import { MatiereService } from '../../services/matiere.service';

@Component({
  selector: 'app-matiere',
  templateUrl: './matiere.component.html',
  styleUrls: ['./matiere.component.css']
})
export class MatiereComponent {

  matiere?: Matiere[]

  constructor(private matiereService: MatiereService){}

  ngOnInit(): void{
    this.getAllMatiere();
  }

  getAllMatiere(){
    this.matiereService.getAllMatiere().subscribe(data => {
      this.matiere = data;
    });
  }

}
