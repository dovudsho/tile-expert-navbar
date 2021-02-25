import {
  Component,
  ElementRef,
  EventEmitter,
  HostListener,
  Output,
  ViewChild,
} from "@angular/core";

@Component({
  selector: "app-navbar-search",
  templateUrl: "./navbar-search.component.html",
  styleUrls: [
    "./navbar-search.component.scss",
    "./navbar-search.media.component.scss",
  ],
})
export class NavbarSearchComponent {
  public inputValue = "";

  @ViewChild("searchInputContainer")
  searchInputContainerRef!: ElementRef;

  @ViewChild("filterFormContainer")
  filterFormContainerRef!: ElementRef;

  @Output() clickedOutside = new EventEmitter();
  @Output() clickedSearch = new EventEmitter();

  showFilterState = false;
  navbarContainer!: Element;

  show() {
    this.navbarContainer.classList.remove("ox-hidden");
    this.showFilterState = true;
  }

  constructor() {
    this.navbarContainer = document.querySelector(".navbar");
  }

  @HostListener("document:click", ["$event"])
  handleClickedOutside(event: Event) {
    if (
      !this.searchInputContainerRef?.nativeElement.contains(event.target) &&
      !this.filterFormContainerRef?.nativeElement.contains(event.target)
    ) {
      this.showFilterState = false;
      this.navbarContainer.classList.add("ox-hidden");
      this.clickedOutside.emit(true);
    }
  }

  handleClickedSearch() {
    this.showFilterState = false;
    this.navbarContainer.classList.add("ox-hidden");
    this.clickedSearch.emit(true);
  }

  handleClickedClear() {
    this.inputValue = "";
  }
}
