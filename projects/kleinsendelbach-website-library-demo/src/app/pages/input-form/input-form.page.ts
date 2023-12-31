import { Component } from '@angular/core';
import { CheckboxInputComponent, DateTimeInputComponent, InlineSelectInputComponent, InputError, InputField, InputForm, InputFormComponent, SelectInputComponent, SelectOptions, StepperInputComponent, TextAreaInputComponent, TextInputComponent, UtcDate, Validator } from 'kleinsendelbach-website-library';

@Component({
    selector: 'input-form-page',
    standalone: true,
    imports: [InputFormComponent, CheckboxInputComponent, DateTimeInputComponent, InlineSelectInputComponent, SelectInputComponent, StepperInputComponent, TextInputComponent, TextAreaInputComponent],
    templateUrl: './input-form.page.html',
    styleUrls: ['./input-form.page.sass']
})
export class InputFormPage {

    public inputForm = new InputForm({
        checkbox1: new InputField<boolean>(true, [Validator.checked('Fehler')]),
        checkbox2: new InputField<boolean>(false, [Validator.checked('Fehler')]),
        date1: new InputField<UtcDate>(UtcDate.now, [Validator.futureDate('Fehler')]),
        date2: new InputField<UtcDate>(UtcDate.now.advanced({ day: -1 }), [Validator.futureDate('Fehler')]),
        date3: new InputField<UtcDate>(UtcDate.now, [Validator.futureDate('Fehler')]),
        select1: new InputField<'o1' | 'o2' | 'o3'>('o1'),
        select2: new InputField<'o1'>('o1'),
        select3: new InputField<'o1' | 'o2' | 'o3' | 'o4' | 'o5' | 'o6'>('o1'),
        stepper1: new InputField<number>(5),
        text1: new InputField<string>(''),
        text2: new InputField<string>('')
    }, {});

    public inputForm1 = new InputForm({}, {});

    public inputForm2 = new InputForm({}, {});

    public inputForm3 = new InputForm({}, {});

    constructor() {
        this.inputForm1.setState('loading');
        this.inputForm2.setState('success');
        this.inputForm3.setState('failed');
    }

    public submit() {
        this.inputForm.evaluate();
    }

    public get selectOptions1(): SelectOptions.Ungrouped<'o1' | 'o2' | 'o3'> {
        return SelectOptions.ungrouped([
            { id: 'o1', text: 'Option 1' },
            { id: 'o2', text: 'Option 2' },
            { id: 'o3', text: 'Option 3' }
        ]);
    }

    public get selectOptions2(): SelectOptions.Ungrouped<'o1'> {
        return SelectOptions.ungrouped([
            { id: 'o1', text: 'Option 1' }
        ]);
    }

    public get selectOptions3(): SelectOptions.Ungrouped<'o1' | 'o2' | 'o3' | 'o4' | 'o5' | 'o6'> {
        return SelectOptions.ungrouped([
            { id: 'o1', text: 'Option 1' },
            { id: 'o2', text: 'Option 2' },
            { id: 'o3', text: 'Option 3' },
            { id: 'o4', text: 'Option 4' },
            { id: 'o5', text: 'Option 5' },
            { id: 'o6', text: 'Option 6' }
        ]);
    }

    public get selectOptions4(): SelectOptions<'o1' | 'o2' | 'o3' | 'o4' | 'o5' | 'o6'> {
        return SelectOptions.grouped([
            {
                title: 'Option set 1',
                options: [
                    { id: 'o1', text: 'Option 1' },
                    { id: 'o2', text: 'Option 2' },
                    { id: 'o3', text: 'Option 3' }
                ]
            },
            {
                title: 'Option set 2',
                options: [
                    { id: 'o4', text: 'Option 4' },
                    { id: 'o5', text: 'Option 5' },
                    { id: 'o6', text: 'Option 6' }
                ]
            }
        ])
    }
}
