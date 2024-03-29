import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-nice-select',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './nice-select.component.html',
  styleUrl: './nice-select.component.scss'
})
export class NiceSelectComponent {

  @Input() options!: { value: string; text: string }[];
  @Input() defaultCurrent: number = 0;
  @Input() placeholder: string = '';
  @Input() className: string = '';
  @Input() name: string = '';

  open = false;
  current: { value: string; text: string } | undefined;

  @Output() onChange: EventEmitter<{ value: string; text: string }> =
    new EventEmitter();

  constructor() {}

  toggleOpen() {
    this.open = !this.open;
  }

  stopPropagation(event: Event) {
    event.stopPropagation();
  }

  ngOnInit() {
    this.current = this.options[this.defaultCurrent];
  }

  currentHandler(item: { value: string; text: string }, index: number) {
    this.current = this.options[index];
    this.onChange.emit(item); // Emitting the event
    this.onClose();
  }

  onClose() {
    this.open = false;
  }

}
