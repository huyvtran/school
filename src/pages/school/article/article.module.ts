import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ArticlePage } from './article';
import { DirectiveModule } from '../../../directives';
import { PipeModule } from '../../../pipes';

@NgModule({
    declarations: [
        ArticlePage
    ],
    imports: [
        DirectiveModule,
        PipeModule,
        IonicPageModule.forChild(ArticlePage),
    ],
    exports: [
        ArticlePage
    ]
})
export class ArticlePageModule { }
