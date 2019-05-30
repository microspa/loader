import { Injector, NgModule } from '@angular/core';

import { MspaLoaderComponent } from './mspa-loader.component';
import { createCustomElement } from '@angular/elements';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
    declarations: [
        MspaLoaderComponent
    ],
    imports: [
        BrowserModule
    ],
    entryComponents: [MspaLoaderComponent]
})
export class MspaLoaderModule {
    constructor(private injector: Injector) {
    }

    ngDoBootstrap() {
        const appElement = createCustomElement(MspaLoaderComponent, {injector: this.injector});
        customElements.define('mspa-loader', appElement);
    }
}
