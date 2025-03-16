import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import {TuiCheckbox, TuiDataListDropdownManager} from '@taiga-ui/kit';
import {DatePipe} from '@angular/common';
import {
  TuiButton,
  TuiDropdownDirective,
  TuiDropdownManual,
  TuiIcon,
  TuiOption,
} from '@taiga-ui/core';
import {TuiActiveZone, TuiObscured} from '@taiga-ui/cdk';
import {Todo} from '@app/models';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-todo-card',
  standalone: true,
  imports: [
    TuiCheckbox,
    DatePipe,
    TuiIcon,
    TuiDropdownDirective,
    TuiDropdownManual,
    TuiActiveZone,
    TuiObscured,
    TuiButton,
    FormsModule,
    TuiDataListDropdownManager,
    TuiOption,
  ],
  templateUrl: './todo-card.component.html',
  styleUrl: './todo-card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodoCardComponent {
  @Input() todo!: Todo;
  @Input() number?: number;
  @Output() edit = new EventEmitter();
  @Output() remove = new EventEmitter();
  @Output() changeStatus = new EventEmitter<boolean>();

  isOpen = false;

  onActiveZone(active: any) {
    this.isOpen = active;
  }

  onObscured(obscured: any) {
    if (obscured) {
      this.isOpen = false;
    }
  }

  openContextMenu() {
    this.isOpen = true;
  }

  onEdit() {
    this.edit.emit();
  }

  onRemove() {
    this.remove.emit();
  }

  onStatusChange(status: boolean) {
    this.todo.completed = status;
    this.changeStatus.emit(status);
  }
}
