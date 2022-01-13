import { Component, OnInit, ViewChild } from '@angular/core';
import { Segment, SegmentPost, SegmentPut } from 'src/app/share/entities/segment';
import { Table } from 'primeng/table';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { SegmentService } from 'src/app/share/services/segment/segment.service';


@Component({
  selector: 'app-list-segments',
  templateUrl: './list-segments.component.html',
  styleUrls: ['./list-segments.component.css']
})
export class ListSegmentsComponent implements OnInit {

  public segments: Segment[] = [];
  displayModal: boolean = false;
  segmentForm: FormGroup;
  numRegex = /^-?\d*[.,]?\d{0,2}$/;
  segmentSelect!: Segment;
  headerDialog: string = 'Novo Segmento';

  constructor(private segmentService: SegmentService,
    private formBuilder: FormBuilder) {
    this.segmentForm = this.formBuilder.group({
      name: [null, [Validators.required, Validators.minLength(5), Validators.maxLength(50)]],
      tax: [null, [Validators.required, Validators.pattern(this.numRegex)]],
      isActive: [null],
    });    
  }

  novoSegmento(){
    this.segmentSelect = {} as Segment;
    this.segmentForm.reset();
    this.headerDialog = 'Novo Segmento';
    this.showDialog();
  }
  showDialog() {
    this.displayModal = true;
    if (this.segmentSelect.id) {
      this.headerDialog = 'Alterar o Segmento';
    }
  }

  ngOnInit(): void {
    this.loadSegments();
  }

  loadSegments() {
    this.segmentService.get().then(segs => this.segments = segs);   
  }
  onSubmit() {
    if (this.segmentForm.valid) {
      if (this.segmentSelect.id) {
        const seg: SegmentPut = {         
          name: this.segmentForm.value.name,
          tax: parseFloat(this.segmentForm.value.tax),
          isActive: this.segmentForm.value.isActive == 1
        };
        this.segmentService.put(this.segmentSelect.id,seg).then(segs => {
         this.loadSegments();
         this.segmentSelect = {} as Segment;
        });
      }
      else {
        const seg: SegmentPost = {
          name: this.segmentForm.value.name,
          tax: parseFloat(this.segmentForm.value.tax.replace(',', '.'))
        };

        this.segmentService.post(seg).then(segs =>
          this.loadSegments());
      }
      this.displayModal = false;
      this.segmentForm.reset();
    }
  }

  onRowSelect(event: any) {
    this.segmentForm.patchValue(this.segmentSelect);
    this.showDialog();
  }

  onRowRemove(event: any) {
   this.segmentService.delete(event.id).then(segs =>
    this.loadSegments());
  }

}
