import { Component, Input } from '@angular/core';
import { Element, NewsletterData, Sponsor, SponsorsType, StyleColor, compactMap, entries, group } from '../../types';
import { CommonModule } from '@angular/common';
import { StyleConfigService } from '../../services';

type TextAlignStyle = 'left' | 'center' | 'right' | 'block';
type TextFontFamilyStyle = 'header' | 'text';
type TextFontSizeStyle = 'small' | 'normal' | 'medium' | 'x-large' | 'xx-large' | 'xxx-large';
type TextFontWeightStyle = 'light' | 'normal' | 'semi-bold' | 'bold';

@Component({
    selector: 'newsletter',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './newsletter.component.html',
    styleUrl: './newsletter.component.sass'
})
export class NewsletterComponent {

    @Input({ required: true }) public newsletterData!: NewsletterData;

    @Input() public scaling: 'newsletter' | 'website' = 'newsletter';

    constructor(
        public readonly styleConfig: StyleConfigService
    ) {}

    public get socialMediaList(): Element<NewsletterData['socialMedia']>[][] {
        return group(this.newsletterData.socialMedia, 2);
    }

    public get sponsorsList(): { title: string; sponsors: Sponsor[][] }[] {
        return compactMap(entries(this.newsletterData.sponsors), ({ key, value }) => {
            if (value === null)
                return null;
            return {
                title: SponsorsType.title[key],
                sponsors: group(value, 2)
            };
        });
    }

    public scaled(value: number): number {
        return (this.scaling === 'newsletter' ? 1 : 1.25) * value;
    }

    private textAlignStyle(align?: TextAlignStyle): string {
        switch (align) {
            case undefined:
            case 'left':
                return 'left';
            case 'center':
                return 'center';
            case 'right':
                return 'right';
            case 'block':
                return 'justify'
        }
    }

    private textFontFamilyStyle(family?: TextFontFamilyStyle): string {
        switch (family) {
            case 'header':
                return 'Trebuchet MS, sans-serif';
            case undefined:
            case 'text':
                return 'Arial, sans-serif';
        }
    }

    private textFontSizeStyle(size?: TextFontSizeStyle): string {
        switch (size) {
            case 'small':
                return `${this.scaled(16)}px`;
            case undefined:
            case 'normal':
                return `${this.scaled(20)}px`;
            case 'medium':
                return `${this.scaled(24)}px`;
            case 'x-large':
                return `${this.scaled(30)}px`;
            case 'xx-large':
                return `${this.scaled(40)}px`;
            case 'xxx-large':
                return `${this.scaled(48)}px`;
        }
    }

    private textLineHeightStyle(size?: TextFontSizeStyle): string {
        switch (size) {
            case 'small':
                return `${this.scaled(20)}px`;
            case undefined:
            case 'normal':
                return `${this.scaled(25)}px`;
            case 'medium':
                return `${this.scaled(30)}px`;
            case 'x-large':
                return `${this.scaled(37.5)}px`;
            case 'xx-large':
                return `${this.scaled(50)}px`;
            case 'xxx-large':
                return `${this.scaled(60)}px`;
        }
    }

    private textFontWeightStyle(weight?: TextFontWeightStyle): string {
        switch (weight) {
            case 'light':
                return '300';
            case undefined:
            case 'normal':
                return '400';
            case 'semi-bold':
                return '550';
            case 'bold':
                return '700'
        }
    }

    public textStyle(textStyle?: { align?: TextAlignStyle, family?: TextFontFamilyStyle, size?: TextFontSizeStyle, weight?: TextFontWeightStyle, color?: StyleColor }): Record<'textAlign' | 'fontFamily' | 'fontSize' | 'lineHeight' | 'fontWeight' | 'color', string> {
        return {
            textAlign: this.textAlignStyle(textStyle?.align),
            fontFamily: this.textFontFamilyStyle(textStyle?.family),
            fontSize: this.textFontSizeStyle(textStyle?.size),
            lineHeight: this.textLineHeightStyle(textStyle?.size),
            fontWeight: this.textFontWeightStyle(textStyle?.weight),
            color: this.styleConfig.css(textStyle?.color ?? 'text')
        };
    }

    public style<Style extends Record<string, string>>(style: Style, textStyle?: { align?: TextAlignStyle, family?: TextFontFamilyStyle, size?: TextFontSizeStyle, weight?: TextFontWeightStyle, color?: StyleColor }): Style & Record<'textAlign' | 'fontFamily' | 'fontSize' | 'lineHeight' | 'fontWeight' | 'color', string> {
        return {
            ...this.textStyle(textStyle),
            ...style
        };
    }
}
