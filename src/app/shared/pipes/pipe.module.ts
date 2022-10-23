import { NgModule } from '@angular/core';
import { ImageSrcPipe } from './img-src.pipe';

@NgModule({
    exports: [ ImageSrcPipe ],
    declarations: [ ImageSrcPipe],
})

export class PipeModule { }
