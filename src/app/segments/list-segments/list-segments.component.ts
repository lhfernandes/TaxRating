import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Segment, SegmentPost, SegmentPut } from 'src/app/share/entities/segment';
import { Table } from 'primeng/table';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { SegmentService } from 'src/app/share/services/segment/segment.service';
import { Subscription } from 'rxjs';
import { MessageService } from 'primeng/api';
import { ConfirmationService, Message } from 'primeng/api';



@Component({
  selector: 'app-list-segments',
  templateUrl: './list-segments.component.html',
  styleUrls: ['./list-segments.component.css'],
  providers: [ConfirmationService, MessageService]
})
export class ListSegmentsComponent implements OnInit, OnDestroy {

  public segments: Segment[] = [];
  displayModal: boolean = false;
  segmentForm: FormGroup;
  numRegex = /^-?\d*[.,]?\d{0,2}$/;
  segmentSelect!: Segment;
  headerDialog: string = 'Novo Segmento';
  subseg!: Subscription;


  constructor(private segmentService: SegmentService,
    private formBuilder: FormBuilder,
    private confirmationService: ConfirmationService,
    private messageService: MessageService) {
    this.segmentForm = this.formBuilder.group({
      name: [null, [Validators.required, Validators.minLength(5), Validators.maxLength(50)]],
      tax: [null, [Validators.required, Validators.pattern(this.numRegex)]],
      isActive: [null],
    });
  }
  ngOnDestroy(): void {
    this.subseg.unsubscribe();
  }

  novoSegmento() {
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
    this.segmentService.get();
    this.subseg = this.segmentService.segmentsObs.subscribe(segs => {
      this.segments = segs
    });
  }
  onSubmit() {
    if (this.segmentForm.valid) {
      if (this.segmentSelect.id) {
        const seg: SegmentPut = {
          name: this.segmentForm.value.name,
          tax: parseFloat(this.segmentForm.value.tax),
          isActive: this.segmentForm.value.isActive == 1
        };
        this.segmentService.put(this.segmentSelect.id, seg).then(segs => {
          this.loadSegments();
          this.messageService.add({ severity: 'success', summary: 'Alteração', detail: 'Segmento alterado com sucesso' });
          this.segmentSelect = {} as Segment;
        }).catch(error => {
          this.messageService.add({ severity: 'error', summary: 'Erro na alteração', detail: 'Consulte adm do sistema' });
        });
      }
      else {
        const seg: SegmentPost = {
          name: this.segmentForm.value.name,
          tax: parseFloat(this.segmentForm.value.tax.replace(',', '.'))
        };

        this.segmentService.post(seg).then(segs => {
          this.loadSegments();
          this.messageService.add({ severity: 'success', summary: 'Inserção', detail: 'Segmento inserido com sucesso' });
        }
        ).catch(error => {
          this.messageService.add({ severity: 'error', summary: 'Erro na inclusão', detail: 'Consulte adm do sistema' });
        });

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
    this.confirmationService.confirm({
      message: 'Deseja realmente excluir esse Segmento?',
      header: 'Confirmação',
      icon: 'pi pi-info-circle',
      accept: () => {
        this.segmentService.delete(event.id).then(segs => {
          this.loadSegments();
          this.messageService.add({ severity: 'success', summary: 'Confirmado', detail: 'Segmento excluido' });
        }
        ).catch(error => {
          this.messageService.add({ severity: 'error', summary: 'Erro na exclusão', detail: 'Consulte adm do sistema' });
        });
      }
    });

  }

}
