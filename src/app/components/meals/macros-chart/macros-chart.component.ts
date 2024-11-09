import { Component, Input, SimpleChanges } from '@angular/core';
import { GoogleChartsModule } from 'angular-google-charts';
import { ChartType } from 'angular-google-charts';  // Correct import

@Component({
  selector: 'app-macros-chart',
  standalone: true,
  imports: [GoogleChartsModule],
  templateUrl: './macros-chart.component.html',
  styleUrls: ['./macros-chart.component.css']
})
export class MacrosChartComponent {
  title = 'Macronutrients Distribution';
  @Input() proteins?:number;
  @Input() carbs?:number;
  @Input() fats?:number;

  type: ChartType = ChartType.PieChart;
  data: any[] = [];

  ngOnChanges(changes: SimpleChanges): void {
    if (this.proteins !== undefined && this.carbs !== undefined && this.fats !== undefined) {
      this.data = [
        ['Proteins', this.proteins],
        ['Carbohydrates', this.carbs],
        ['Fats', this.fats]
      ];
    }
  }

  // Chart options
  options = {
    is3D: false,  // Diseño plano y minimalista
    pieSliceText: 'percentage',
    backgroundColor: 'transparent',  // Fondo transparente para aprovechar el color del div
    slices: {
      0: { color: '#FFFFFF' },       // Blanco para un contraste nítido
      1: { color: '#81C784' },       // Verde claro para armonizar con el fondo
      2: { color: '#A5D6A7' }        // Verde suave y complementario
    },
    legend: {
        position: 'top',
        textStyle: { color: '#FFFFFF', fontSize: 14 }  // Texto de leyenda en blanco para destacar sobre el fondo verde
    },
    title: 'Macronutrients Distribution',
    titleTextStyle: {
        fontSize: 30,
        color: '#FFFFFF'  // Título en blanco para contrastar bien con el fondo
    },
    chartArea: { width: '90%', height: '80%' }, // Espacio adicional para una visualización limpia
    pieHole: 0.4  // Efecto de dona para un diseño moderno
};


  width = 490;
  height = 650;
}
