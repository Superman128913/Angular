// Angular
import {Component, Input, OnInit} from '@angular/core';
import {NgbModal, NgbModalRef} from "@ng-bootstrap/ng-bootstrap";
import {PdfViewerComponent} from "../pdf-viewer/pdf-viewer.component";
import {
    TraceabilityShareModalComponent
} from '../../modals/traceability-share-modal/traceability-share-modal.component';
import {
    TraceabilityExportModalComponent
} from '../../modals/traceability-export-modal/traceability-export-modal.component';

// Application

@Component({
  selector: 'app-apps-table',
  templateUrl: './apps-table.component.html',
  styleUrls: ['./apps-table.component.scss']
})
export class AppsTableComponent implements OnInit {

  @Input() columns: Array<any> = [];
  @Input() documents: Array<any> = [];
  // Must be declared as "any", not as "DataTables.Settings"
  public dtOptions: any = {};

  constructor(private modalService: NgbModal) {
    let self = this;
    this.dtOptions = {
      colReorder: true,
      scrollResize: true, // https://datatables.net/blog/2017-12-31
      deferRender: true,
      scrollX: true,
      scrollCollapse: false,
      scroller: {
        loadingIndicator: true
      },
      stateSave: true,
      select: {
        style: 'multi+shift',
        items: 'row',
        info: false
      },
     
      // Declare the use of the extension in the dom parameter
      // https://datatables.net/reference/option/dom
      dom: '<\'row\'<\'col-8\'B><\'col-4\'form>>' +
          '<\'row\'<\'col-12\'t>>' +
          '<\'row\'<\'col-12\'>>',
      columnDefs: [
          {
              targets: 0,
              className: 'noVis'
          }
      ],
      // Configure the buttons
      buttons: [
        {
          text: '<i class="bi bi-printer"></i>Print',
          extend: 'print',
          extension: '.print'
        }, {
          text: '<i class="bi bi-filetype-pdf"></i>PDF',
          extend: 'pdf',
          extension: '.pdf'
        }, {
          text: '<i class="bi bi-file-earmark-excel"></i>Excel',
          extend: 'excel',
          extension: '.xls'
        }, {
          text: '<i class="bi bi-filetype-csv"></i>CSV',
          extend: 'csv',
          extension: '.csv'
        }, {
          text: '<i class="bi bi-filetype-csv"></i>ColVis',
          extend: 'colvis',
          columns: ':not(.noVis)'
        },
      ],
      language: {
        search: '',
        searchPlaceholder: 'Search'
      },
      columns: [],
      data: [],
      drawCallback(settings) {
        const dataTable: any = $('#dataTable').DataTable();
        dataTable.contextualActions({
          // classes: [
          // ],
          buttonList: {
            containerSelector: '',
            iconOnly: false
          },
          contextMenu: {
            isMulti: true
          },
          deselectAfterAction: false,
          items: [
            {
              title: 'Open',
              iconClass: 'bi bi-folder2-open',
              multi: false,
              type: 'option',
              action: (rows) => {
                const file = rows[0];
                window.open(file?.filePath);
              }
            },
            {
              title: 'Send',
              iconClass: 'bi bi-send',
              multi: true,
              type: 'option',
              action: (rows) => {
                // open modal
                self.openModal(
                    TraceabilityShareModalComponent,
                    rows,
                    'md'
                );
              }
            },
            {
              title: 'Details',
              iconClass: 'bi bi-list',
              multi: true,
              type: 'option',
              action: (rows) => {
                // open modal
                self.openModal(
                    TraceabilityShareModalComponent,
                    rows,
                    'md'
                );
              }
            },
            {
              title: 'Export',
              iconClass: 'bi bi-reply',
              multi: true,
              type: 'option',
              action: (rows) => {
                self.openModal(
                    TraceabilityExportModalComponent,
                    rows,
                    'md'
                ).result.then((result) => {
                  let selectorStr: string = `#dataTable_wrapper .btn.buttons-${result}`
                  $(selectorStr).click();
                });
              }
            },
          ],
        });
      }
    };
  }

  /** Public **/

  ngOnInit(): void {
  }

  ngOnChanges(changes) {
    this.dtOptions.columns = changes.columns.currentValue;
    this.dtOptions.data = changes.documents.currentValue;
  }

  /**
   * Helper function to display file name without file extension
   *
   * @param filename
   */
  public displayWithoutFileExtension(filename: string) {
    let value = '';
    if (filename) {
      const name = filename.split('.');
      value = name[0];
    }
    return value;
  }

  /** Private **/

  /**
   * Open modal
   *
   * @param content
   * @param document
   * @param modalSize
   */
  private openModal(content: any,
                   documents: any,
                   modalSize: string) {
    const modalRef: NgbModalRef = this.modalService.open(content, {
      size: modalSize,
      centered: true,
      backdrop: 'static',
      keyboard: false
    });
    modalRef.componentInstance.documents = documents;
    return modalRef;
  }

}
