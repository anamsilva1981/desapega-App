import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatIconModule, MatFormFieldModule ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'desapega-App';
}
