import { Component } from "@angular/core";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.scss", "./navbar.media.component.scss"],
})
export class NavbarComponent {
  showSearchForm = false;

  openSearchForm($event: Event) {
    const w = window.innerWidth;
    if (w < 1024) {
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
