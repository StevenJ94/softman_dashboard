import { Component } from '@angular/core';
//@ts-ignore
import { reports } from '../../../assets/procedimientos'; // Ajusta la ruta según la ubicación de tu archivo
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-diagnostico',
  standalone: true,
  imports: [],
  templateUrl: './diagnostico.component.html',
  styleUrl: './diagnostico.component.css'
})
export class DiagnosticoComponent {
  data: any

  constructor(private _router: Router, private _aRouter: ActivatedRoute) {
    this._aRouter.params.subscribe((res: any) => {
      this.data = reports.filter((filter: any) => {
        return filter.idPaciente == res.id
      })[0]
      console.log(this.data);

    })

  }

}
