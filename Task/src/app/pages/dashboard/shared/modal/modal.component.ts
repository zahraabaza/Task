import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  @Input() dialogClass: string;
  @Input() hideHeader = false;
  @Input() conditionalDialogClass: string;
  @Input() hideFooter = false;
  @Input() containerClick = true;
  public visible = false;
  public visibleAnimate = false;
  constructor() { }

  ngOnInit(): void {
  }

  public show(): void {
    this.visible = true;
    setTimeout(() => (this.visibleAnimate = true), 100);
    document.querySelector('body').classList.add('modal-open');
}

public hide(): void {
    this.visibleAnimate = false;
    setTimeout(() => (this.visible = false), 300);
    document.querySelector('body').classList.remove('modal-open');
}

public onContainerClicked(event: MouseEvent): void {
    if ((event.target as HTMLElement).classList.contains('modal') && this.containerClick === true) {
        this.hide();
    }
}

}
