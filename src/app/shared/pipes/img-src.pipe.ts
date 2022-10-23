import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'imgsrc'
})

export class ImageSrcPipe implements PipeTransform {
    transform(value: any, assets = false): string {

        if (assets) {
            return `../../../assets/type_icon/${value}.png`;
        } else {
            const concat = value<10 ? `00${value}` :`0${value}`;
            return `https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/${value>99?value:concat}.png`;
        }

       
    }
}