import { OnInit, AfterContentInit, AfterViewInit, OnDestroy, OnChanges, Injectable } from '@angular/core';

import { environment } from '@env/environment';
import { TranslateService } from '@ngx-translate/core';

@Injectable({providedIn: "root"})
export class ControllerBase implements OnInit, AfterContentInit, AfterViewInit, OnDestroy, OnChanges {

    constructor(private translate: TranslateService) {}

    ngOnInit() {
    }

    ngOnChanges(){

    }

    ngAfterContentInit() {
    }

    ngAfterViewInit() {

    }

    ngOnDestroy() {
    }

    getExtensionFileName(img: any): string {
        const parts: string[] = img.split(/[\.]/g);
        return parts[parts.length -1];
    }

    getMessage(): string {
        const hour: number = new Date().getHours();

        if (hour < 5) {
          return this.translate.instant('GREETINGS.EARLY_MORNING');
        } else if (hour < 12) {
          return this.translate.instant('GREETINGS.MORNING');
        } else if (hour < 18) {
          return this.translate.instant('GREETINGS.AFTERNOON');
        } else {
          return this.translate.instant('GREETINGS.EVENING');
        }
    }

    downloadPDF(file: string, data: string, type: string) {

        let fileName = data +'_'+ type + '.pdf';
        const bytes: Uint8Array = this.base64ToArrayBuffer(file);
        const filePdf: Blob = new Blob([bytes], {type: 'application/pdf'});
        let fileURL = URL.createObjectURL(filePdf);

        let link = document.createElement("a");
        link.href = fileURL;
        link.download = fileName;
        document.body.append(link);

        link.click();
        link.remove();
        // in case the Blob uses a lot of memory
        window.addEventListener('focus', e=>URL.revokeObjectURL(fileURL), {once:true});
    }

    base64ToArrayBuffer(base64: string): Uint8Array {
        var binaryString = window.atob(base64);
        var binaryLen = binaryString.length;
        var bytes = new Uint8Array(binaryLen);
        for (var i = 0; i < binaryLen; i++) {
          var ascii = binaryString.charCodeAt(i);
          bytes[i] = ascii;
        }
        return bytes;
    }
}
