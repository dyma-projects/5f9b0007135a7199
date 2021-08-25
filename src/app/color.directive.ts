import { Directive, ElementRef, HostListener } from "@angular/core";

@Directive({
  selector: "[appColor]",
})
export class ColorDirective {
  el: ElementRef;

  constructor(el: ElementRef) {
    this.el = el;
    console.log(this.el);
  }

  @HostListener("document:keydown", ["$event"]) windowClick($event) {
    console.log($event);
    if ($event.key == "ArrowLeft") {
      console.log("LEFT !!");
      this.el.nativeElement.style.backgroundColor = "red";
    }

    if ($event.key == "ArrowUp") {
      console.log("UP !!");
      this.el.nativeElement.style.backgroundColor = "green";
    }

    if ($event.key == "ArrowDown") {
      console.log("DOWN !!");
      this.el.nativeElement.style.backgroundColor = "blue";
    }

    if ($event.key == "ArrowRight") {
      console.log("RIGHT !!");
      this.el.nativeElement.style.backgroundColor = "yellow";
    }
  }
}
