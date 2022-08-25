// Angular
import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
// Libraries
import {NgbModal, NgbModalRef} from '@ng-bootstrap/ng-bootstrap';
import {FileSaverService} from 'ngx-filesaver';
// Application
import {GlobalConstants} from '../../../../shared/global-constants';
import {LoggerService} from '../../../../services/logger.service';
import {TraceabilityApiService} from '../../../../services/api/traceability-api.service';
import {TraceabilityStorageService} from '../../../../services/storage/traceability-storage.service';
import {NotificationService} from '../../../../services/notification.service';
import {
    TraceabilityDocumentRenameModalComponent
} from '../../../../shared/modals/traceability-document-rename-modal/traceability-document-rename-modal.component';
import {PdfViewerModalComponent} from "../../../../shared/modals/pdf-viewer-modal/pdf-viewer-modal.component";

@Component({
    selector: 'app-traceability-upload-document',
    templateUrl: './traceability-upload-document.component.html',
    styleUrls: ['./traceability-upload-document.component.scss']
})
export class TraceabilityUploadDocumentComponent implements OnInit {

    // files
    @ViewChild('fileDrop') fileDropElement: ElementRef | undefined;
    public disable = true;
    public divisionId: bigint;
    // traceability
    public documents = [];
    // drag and drop
    public dragAndDropTitle = GlobalConstants.dragAndDropTitle;
    // logger
    private fileName = 'TraceabilityUploadDocumentComponent';

    // private indexes = [];

    constructor(private loggerService: LoggerService,
                private traceabilityApiService: TraceabilityApiService,
                private traceabilityStorageService: TraceabilityStorageService,
                private activatedRoute: ActivatedRoute,
                private modalService: NgbModal,
                private fileSaverService: FileSaverService,
                private notificationService: NotificationService) {
        // set division id
        this.divisionId = this.traceabilityStorageService.getSelectedTraceabilityId();

        // set documents from resolver
        this.documents = this.activatedRoute.snapshot.data['documents'];

        // log documents
        this.loggerService.debug(this.fileName, 'constructor', 'documents', this.documents);
    }

    /** Public **/

    ngOnInit(): void {
    }

    /**
     * Handle file(s) from browsing or dropping
     *
     * @param files (selected or dropped file(s))
     */
    public fileBrowseOrDroppedHandler(files: FileList) {
        const functionName = 'fileBrowseOrDroppedHandler';

        const filesArray = Array.from(files);

        // check that file is pdf and add to the documents array, if file is not pdf remove from files array
        for (const [index, file] of filesArray.entries()) {
            if (file.type === 'application/pdf') {
                const empty = [];
                this.documents.push(empty);
            } else {
                // notification
                this.notificationService.error('Only .pdf files are allowed.');

                filesArray.splice(index, 1);
            }
        }

        // log files
        this.loggerService.debug(this.fileName, functionName, 'documents', this.documents);
        // log files
        this.loggerService.debug(this.fileName, functionName, 'filesArray', filesArray);

        // check if file array is empty and avoid api call
        if (filesArray.length === 0) {
            return;
        }

        // upload traceability files
        this.traceabilityApiService.uploadTraceabilityFiles(this.divisionId, filesArray).subscribe({
            next: (next: any) => {
                // log documents
                this.loggerService.debug(this.fileName, functionName, 'documents', this.documents);
                // log next
                this.loggerService.debug(this.fileName, functionName, 'next', next);

                for (const serverDocument of next) {
                    const inArray = this.documents.some(document => document.data?.id === serverDocument.data?.id);
                    if (!inArray) {
                        const index = this.documents.findIndex(document => document.length === 0);
                        if (typeof index === 'number') {
                            this.documents.splice(index, 1, serverDocument);
                        } else {
                            this.documents.push(serverDocument);
                        }
                    }
                }
            },
            error: (error: any) => {
                // log error
                this.loggerService.error(this.fileName, functionName, 'error', error);
            },
            complete: () => {
                // log message
                this.loggerService.info(this.fileName, functionName, 'complete', '');
            }
        });
    }

    /**
     * Update local documents array by removing the uploaded file
     *
     * @param serverDocument
     */
    public updateDocuments(serverDocument: any) {
        const index = this.documents.findIndex(document => document.data?.id === serverDocument.data?.id);
        if (typeof index === 'number') {
            this.documents.splice(index, 1);
        }
    };

    /**
     * Rename existing file at current index
     *
     * @param index (index of existing file)
     */
    public renameFile(index: number) {
        // set document
        const document = this.documents[index];
        // open modal
        this.openModal(
            TraceabilityDocumentRenameModalComponent,
            document,
            'md'
        );
    }

    /**
     * Replace existing file at current index with new file
     *
     * @param index (index of existing file)
     * @param traceabilityDocumentId (traceability document id)
     * @param files (single file in file list)
     */
    public replaceFile(index: number,
                       traceabilityDocumentId: bigint,
                       files: FileList) {
        const functionName = 'replaceFile';

        // log files
        this.loggerService.debug(this.fileName, functionName, 'files', files);

        // set current document data to null
        const document = this.documents[index];
        document.data = null;

        // create array from file list
        const filesArray = Array.from(files);
        for (const file of filesArray) {

            // upload traceability files
            this.traceabilityApiService.replaceTraceabilityFile(traceabilityDocumentId, file).subscribe({
                next: (next: any) => {
                    // log next
                    this.loggerService.debug(this.fileName, functionName, 'next', next);

                    // replace old file with new file
                    this.documents.splice(index, 1, next);
                },
                error: (error: any) => {
                    // log error
                    this.loggerService.error(this.fileName, functionName, 'error', error);
                },
                complete: () => {
                    // log message
                    this.loggerService.info(this.fileName, functionName, 'complete', '');
                }
            });
        }
    }

    /**
     * Download file to disk
     *
     * @param document (document object)
     */
    public downloadFile(document: any) {
        const functionName = 'downloadFile';

        this.traceabilityApiService.downloadTraceabilityFile(document.data?.attributes.filePath).subscribe({
            next: (next: any) => {
                // log data
                this.loggerService.debug(this.fileName, functionName, 'next', next);

                // save file to disk
                this.fileSaverService.save(next, document.data?.attributes.name);
            },
            error: (error: any) => {
                // log error
                this.loggerService.error(this.fileName, functionName, 'error', error);
            },
            complete: () => {
                // log message
                this.loggerService.info(this.fileName, functionName, 'complete', '');
            }
        });
    }

    /**
     * Delete file from files list
     *
     * @param traceabilityDocumentId (document id)
     * @param index (document index)
     */
    public deleteFile(traceabilityDocumentId: bigint,
                      index: number) {
        const functionName = 'deleteFile';

        // set current document data to null
        const document = this.documents[index];
        document.data = null;

        // delete traceability document via the API
        this.traceabilityApiService.deleteTraceabilityDocument(traceabilityDocumentId).subscribe({
            next: (next: any) => {
                // log data
                this.loggerService.debug(this.fileName, functionName, 'next', next);

                // remove object at index
                this.documents.splice(index, 1);
            },
            error: (error: any) => {
                // log error
                this.loggerService.error(this.fileName, functionName, 'error', error);
            },
            complete: () => {
                // log message
                this.loggerService.info(this.fileName, functionName, 'complete', '');
            }
        });
    }

    /**
     * View file in new tab
     *
     * @param index (file index)
     */
    public viewFile(index: number) {
        const file = this.documents[index];
        window.open(file.data?.attributes.filePath);
    }

    /**
     * Helper function to display file name without file extension
     *
     * @param filename
     */
    public displayWithoutFileExtension(filename: string) {
        const name = filename.split('.');
        return name[0];
    }

    /**
     * Helper function to open pdf viewer modal
     *
     * @param document
     */
    public openPdfViewerModal(document: any) {
        // open modal
        this.openModal(
            PdfViewerModalComponent,
            document,
            'xl'
        );
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
                     document: any,
                     modalSize: string) {
        const modalRef: NgbModalRef = this.modalService.open(content, {
            size: modalSize,
            centered: true,
            backdrop: 'static',
            keyboard: false
        });
        modalRef.componentInstance.document = document;
    }
}
