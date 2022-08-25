"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DragAndDropDirective = void 0;
var core_1 = require("@angular/core");
var DragAndDropDirective = /** @class */ (function () {
    function DragAndDropDirective() {
        this.fileDropped = new core_1.EventEmitter();
    }
    // Dragover listener
    DragAndDropDirective.prototype.onDragOver = function (event) {
        event.preventDefault();
        event.stopPropagation();
        this.fileOver = true;
    };
    // Dragleave listener
    DragAndDropDirective.prototype.onDragLeave = function (event) {
        event.preventDefault();
        event.stopPropagation();
        this.fileOver = false;
    };
    // Drop listener
    DragAndDropDirective.prototype.ondrop = function (event) {
        event.preventDefault();
        event.stopPropagation();
        this.fileOver = false;
        var files = event.dataTransfer.files;
        if (files.length > 0) {
            this.fileDropped.emit(files);
        }
    };
    __decorate([
        (0, core_1.Output)()
    ], DragAndDropDirective.prototype, "fileDropped", void 0);
    __decorate([
        (0, core_1.HostBinding)('class.fileover')
    ], DragAndDropDirective.prototype, "fileOver", void 0);
    __decorate([
        (0, core_1.HostListener)('dragover', ['$event'])
    ], DragAndDropDirective.prototype, "onDragOver", null);
    __decorate([
        (0, core_1.HostListener)('dragleave', ['$event'])
    ], DragAndDropDirective.prototype, "onDragLeave", null);
    __decorate([
        (0, core_1.HostListener)('drop', ['$event'])
    ], DragAndDropDirective.prototype, "ondrop", null);
    DragAndDropDirective = __decorate([
        (0, core_1.Directive)({
            selector: '[appDragAndDrop]'
        })
    ], DragAndDropDirective);
    return DragAndDropDirective;
}());
exports.DragAndDropDirective = DragAndDropDirective;
