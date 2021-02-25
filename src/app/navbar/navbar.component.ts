import {
  animate,
  state,
  style,
  transition,
  trigger,
} from "@angular/animations";
import { Component } from "@angular/core";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.scss", "./navbar.media.component.scss"],
  animations: [
    trigger("slideInOut", [
      state(
        "in",
        style({
          transform: "translate3d(0,0,0)",
        })
      ),
      state(
        "out",
        style({
          transform: "translate3d(200%, 0, 0)",
        })
      ),
      transition("in => out", animate("150ms ease-in-out")),
      transition("out => in", animate("100ms ease-in-out")),
    ]),
  ],
})
export class NavbarComponent {
  showSearchForm = false;

  openSearchForm($event: Event) {
    const w = window.innerWidth;
    if (w <= 1024) {
      const elRef = document.querySelector(
        ".profile-container"
      ) as HTMLDivElement;
      elRef.style.display = "none";
    }

    this.showSearchForm = true;
    $event.stopPropagation();
  }

  closeSearchForm() {
    const elRef = document.querySelector(
      ".profile-container"
    ) as HTMLDivElement;

    elRef.style.display = "flex";
    this.showSearchForm = false;
  }
}
