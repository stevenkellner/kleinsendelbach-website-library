import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KlsbCommonModule } from '../common';
import { LabelComponent } from './components/label/label.component';
import { ErrorMessageComponent } from './components/error-message/error-message.component';
import { InputFormComponent } from './components/input-form/input-form.component';
import { CheckboxComponent } from './components/input-fields/checkbox/checkbox.component';
import { DateTimeComponent } from './components/input-fields/date-time/date-time.component';
import { InlineSelectComponent } from './components/input-fields/inline-select/inline-select.component';
import { SelectComponent } from './components/input-fields/select/select.component';
import { StepperComponent } from './components/input-fields/stepper/stepper.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TextComponent } from './components/input-fields/text/text.component';
import { TextAreaComponent } from './components/input-fields/text-area/text-area.component';

@NgModule({
    declarations: [
        LabelComponent,
        ErrorMessageComponent,
        InputFormComponent,
        CheckboxComponent,
        DateTimeComponent,
        InlineSelectComponent,
        SelectComponent,
        StepperComponent,
        TextComponent,
        TextAreaComponent
    ],
    imports: [
        CommonModule,
        KlsbCommonModule,
        FontAwesomeModule
    ],
    exports: [
        InputFormComponent,
        CheckboxComponent,
        DateTimeComponent,
        InlineSelectComponent,
        SelectComponent,
        StepperComponent,
        TextComponent,
        TextAreaComponent
    ]
})
export class InputFormModule { }
