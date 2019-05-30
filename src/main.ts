import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { MspaLoaderModule } from './mspa-loader/mspa-loader.module';
import { environment } from './environments/environment';

if (environment.production) {
    enableProdMode();
}

platformBrowserDynamic().bootstrapModule(MspaLoaderModule, {ngZone: 'noop'})
    .catch(err => console.error(err));
