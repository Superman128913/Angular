import { __decorate } from "tslib";
import { Directive, EventEmitter, HostBinding, HostListener, Output } from '@angular/core';
let DragAndDropDirective = class DragAndDropDirective {
    constructor() {
        this.fileDropped = new EventEmitter();
    }
    // Dragover listener
    onDragOver(event) {
        event.preventDefault();
        event.stopPropagation();
        this.fileOver = true;
    }
    // Dragleave listener
    onDragLeave(event) {
        event.preventDefault();
        event.stopPropagation();
        this.fileOver = false;
    }
    // Drop listener
    ondrop(event) {
        event.preventDefault();
        event.stopPropagation();
        this.fileOver = false;
        const files = event.dataTransfer.files;
        if (files.length > 0) {
            this.fileDropped.emit(files);
        }
    }
};
__decorate([
    Output()
], DragAndDropDirective.prototype, "fileDropped", void 0);
__decorate([
    HostBinding('class.fileover')
], DragAndDropDirective.prototype, "fileOver", void 0);
__decorate([
    HostListener('dragover', ['$event'])
], DragAndDropDirective.prototype, "onDragOver", null);
__decorate([
    HostListener('dragleave', ['$event'])
], DragAndDropDirective.prototype, "onDragLeave", null);
__decorate([
    HostListener('drop', ['$event'])
], DragAndDropDirective.prototype, "ondrop", null);
DragAndDropDirective = __decorate([
    Directive({
        selector: '[appDragAndDrop]'
    })
], DragAndDropDirective);
export { DragAndDropDirective };
//# sourceMappingURL=drag-and-drop.directive.js.map