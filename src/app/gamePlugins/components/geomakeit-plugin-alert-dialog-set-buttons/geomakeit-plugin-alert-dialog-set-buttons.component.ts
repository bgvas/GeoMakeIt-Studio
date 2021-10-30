import {Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation} from '@angular/core';
import {NgbModal, NgbModalConfig} from '@ng-bootstrap/ng-bootstrap';
import {AlertDialogModel} from '../../models/alert-dialog-model';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-geomakeit-plugin-alert-dialog-set-buttons',
  templateUrl: './geomakeit-plugin-alert-dialog-set-buttons.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./geomakeit-plugin-alert-dialog-set-buttons.component.css']
})
export class GeomakeitPluginAlertDialogSetButtonsComponent implements OnInit{

  @Input() dialog?: AlertDialogModel;
  @Output() setButtons = new EventEmitter<any>();
  buttonForm: FormGroup;

  constructor(config: NgbModalConfig, private modalService: NgbModal, private fb: FormBuilder) {
    // customize default values of modals used by this component tree
    config.backdrop = 'static';
    config.keyboard = false;
  }

  ngOnInit(): void {
    this.initializeForm();
    this.addValuesToForm();
  }

  open(content) {
    this.modalService.open(content, { size: 'lg', windowClass: 'custom'});
  }

  onExit() {
    this.setButtons.emit(this.buttonForm.value);
    this.modalService.dismissAll()
  }

  addValuesToForm() {
    this.buttonForm?.get('positive_button')?.get('text').setValue(this.dialog?.positive_button?.text || '');
    this.buttonForm?.get('positive_button')?.get('action').setValue(this.dialog?.positive_button?.action || '');
    this.buttonForm?.get('neutral_button')?.get('text').setValue(this.dialog?.neutral_button?.text || '');
    this.buttonForm?.get('neutral_button')?.get('action').setValue(this.dialog?.neutral_button?.action || '');
    this.buttonForm?.get('negative_button')?.get('text').setValue(this.dialog?.negative_button?.text || '');
    this.buttonForm?.get('negative_button')?.get('action').setValue(this.dialog?.negative_button?.action || '');
  }

  initializeForm() {
    this.buttonForm = this.fb.group({
      positive_button: this.fb.group({
        text: this.fb.control(''),
        action: this.fb.control('')
      }),
      neutral_button: this.fb.group({
        text: this.fb.control(''),
        action: this.fb.control('')
      }),
      negative_button: this.fb.group({
        text: this.fb.control(''),
        action: this.fb.control('')
      })
    })
  }
}
