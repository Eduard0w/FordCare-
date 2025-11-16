import { Component } from '@angular/core';
import { Header } from "../../component/header/header";
import { Footer } from "../../component/footer/footer";

@Component({
  selector: 'app-home',
  imports: [Header, Footer],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

}
