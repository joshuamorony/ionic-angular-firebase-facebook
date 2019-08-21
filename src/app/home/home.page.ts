import { Component, OnInit } from "@angular/core";
import { NavController } from "@ionic/angular";
import { AuthService } from "../services/auth.service";

@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"]
})
export class HomePage implements OnInit {
  constructor(public authService: AuthService, private navCtrl: NavController) {}

  ngOnInit() {
    this.authService.loggedIn.subscribe(status => {
      if (!status) {
        this.navCtrl.navigateBack("/login");
      }
    });
  }
}
