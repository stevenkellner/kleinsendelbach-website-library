import { Injectable } from "@angular/core";
import { RegexIterable } from "../types/regex-iterator";
import { WindowService } from "./window.service";

class Elements implements Iterable<HTMLElement | string> {
    constructor(
        private readonly elements: (HTMLElement | string)[] = []
    ) {}

    public static fromContent(content: string): Elements {
        return new Elements([content]);
    }

    public [Symbol.iterator](): IterableIterator<HTMLElement | string> {
        return this.elements[Symbol.iterator]();
    }

    public push(element: HTMLElement | string) {
        this.elements.push(element);
    }

    public flatMap(callbackFn: (value: string, index: number, array: (HTMLElement | string)[]) => (HTMLElement | string)[]): Elements {
        return new Elements(this.elements.flatMap((value, index, array) => {
            if (typeof value === 'string')
                return callbackFn(value, index, array);
            return value;
        }));
    }
}

@Injectable({
    providedIn: 'root'
})
export class MarkdownParserService {

    constructor(
        private readonly windowService: WindowService
    ) {}

    public parse(message: string): Elements {
        const parsers: ((elements: Elements) => Elements)[] = [
            elements => this.parseImages(elements),
            elements => this.parseLinks(elements),
            elements => this.parseFormatting(elements),
            elements => this.parseNewLines(elements),
            elements => this.parseHorizonalLine(elements)
        ];
        let elements: Elements = Elements.fromContent(message);
        try {
            for (const parser of parsers) {
                elements = parser(elements);
            }
            return elements;
        } catch {
            return new Elements();
        }
    }

    private parseImages(elements: Elements): Elements {
        return elements.flatMap(value => {
            const result: (HTMLElement | string)[] = [];
            let lastIndex = 0;
            const regexIt = new RegexIterable(/!\[(?<title>[\S\s]+?)\]\((?<link>[\S\s]+?)(?:\s*,\s*(?<width>\d*%)\s*)?\)/gu, value);
            for (const match of regexIt) {
                result.push(value.slice(lastIndex, match.startIndex));
                if (!match.groups)
                    continue;
                const image = this.createElement('img');
                image.src = match.groups['link'];
                image.title = match.groups['title'];
                image.alt = match.groups['title'];
                if ('width' in match.groups)
                    image.style.width = match.groups['width'];
                result.push(image);
                lastIndex = match.endIndex + 1;
            }
            result.push(value.slice(lastIndex));
            return result;
        });
    }

    private parseLinks(elements: Elements): Elements {
        return elements.flatMap(value => {
            const result: (HTMLElement | string)[] = [];
            let lastIndex = 0;
            const regexIt = new RegexIterable(/\[(?<content>[\S\s]+?)\]\((?<link>[\S\s]+?)\)/gu, value);
            for (const match of regexIt) {
                result.push(value.slice(lastIndex, match.startIndex));
                if (!match.groups)
                    continue;
                const link = this.createElement('a');
                link.href = match.groups['link'];
                link.target = '_blank';
                link.append(...this.parse(match.groups['content']));
                link.title = link.innerText;
                result.push(link);
                lastIndex = match.endIndex + 1;
            }
            result.push(value.slice(lastIndex));
            return result;
        });
    }

    private parseNewLines(elements: Elements): Elements {
        return elements.flatMap(value => {
            const result: (HTMLElement | string)[] = [];
            const regexIt = new RegexIterable(/\n/gu, value);
            let lastIndex = 0;
            for (const match of regexIt) {
                result.push(value.slice(lastIndex, match.startIndex));
                result.push(this.createElement('br'));
                lastIndex = match.endIndex + 1;
            }
            result.push(value.slice(lastIndex));
            return result;
        });
    }

    private parseHorizonalLine(elements: Elements): Elements {
        return elements.flatMap(value => {
            const result: (HTMLElement | string)[] = [];
            const match = (/^\s*---\s*$/gu).exec(value);
            if (match) {
                const line = this.createElement('div');
                line.classList.add('horizontal-line');
                line.append(this.createElement('div'));
                result.push(line);
            } else
                result.push(value);
            return result;
        });
    }

    private parseFormatting(elements: Elements): Elements {
        return elements.flatMap(value => {
            const result: (HTMLElement | string)[] = [];
            let components: ['*' | '**' | '***', (HTMLElement | string)[]][] = [];
            let lastIndex = 0;
            const regexIt = new RegexIterable(/(?<three>\*\*\*)|(?<two>\*\*)|(?<one>\*)/gu, value);
            for (const match of regexIt) {
                if (!match.groups)
                    continue;
                const format = match.groups['three'] ? '***' : match.groups['two'] ? '**' : match.groups['one'] ? '*' : null;
                if (format === null)
                    continue;
                const currentValue = value.slice(lastIndex, match.startIndex);
                let formats = components.reduce((_result, value) => _result === '' ? value[0] : `${_result}|${value[0]}`, '');
                formats += (formats === '' ? '' : '|') + format;
                switch (formats) {
                case '*':
                    result.push(currentValue);
                    components = [['*', []]];
                    break;
                case '**':
                    result.push(currentValue);
                    components = [['**', []]];
                    break;
                case '***':
                    result.push(currentValue);
                    components = [['***', []]];
                    break;
                case '*|*':
                    result.push(this.createElement('italic', [...components[0][1], currentValue]));
                    components = [];
                    break;
                case '*|**':
                    components[0][1].push(currentValue);
                    components.push(['**', []]);
                    break;
                case '*|***':
                    result.push(this.createElement('italic', [...components[0][1], currentValue]));
                    components = [['**', []]];
                    break;
                case '**|*':
                    components[0][1].push(currentValue);
                    components.push(['*', []]);
                    break;
                case '**|**':
                    result.push(this.createElement('strong', [...components[0][1], currentValue]));
                    components = [];
                    break;
                case '**|***':
                    result.push(this.createElement('strong', [...components[0][1], currentValue]));
                    components = [['*', []]];
                    break;
                case '***|*':
                    components = [['**', [this.createElement('italic', [...components[0][1], currentValue])]]];
                    break;
                case '***|**':
                    components = [['*', [this.createElement('strong', [...components[0][1], currentValue])]]];
                    break;
                case '***|***':
                    result.push(this.createElement('italic', this.createElement('strong', [...components[0][1], currentValue])));
                    components = [];
                    break;
                case '*|**|**':
                    components = [['*', [...components[0][1], this.createElement('strong', [...components[1][1], currentValue])]]];
                    break;
                case '*|**|***':
                    result.push(this.createElement('italic', [...components[0][1], this.createElement('strong', [...components[1][1], currentValue])]));
                    components = [];
                    break;
                case '**|*|*':
                    components = [['**', [...components[0][1], this.createElement('italic', [...components[1][1], currentValue])]]];
                    break;
                case '**|*|***':
                    result.push(this.createElement('strong', [...components[0][1], this.createElement('italic', [...components[1][1], currentValue])]));
                    components = [];
                    break;
                default:
                    throw new Error('Formatting failed');
                }
                lastIndex = match.endIndex + 1;
            }
            if (components.length === 0)
                result.push(value.slice(lastIndex));
            else
                components[components.length - 1][1].push(value.slice(lastIndex));
            return result;
        });
    }

    private createElement(type: 'a'): HTMLAnchorElement;
    private createElement(type: 'img'): HTMLImageElement;
    private createElement(type: 'br'): HTMLBRElement;
    private createElement(type: 'div'): HTMLDivElement;
    private createElement(type: 'italic' | 'strong', elements: (HTMLElement | string)[] | HTMLElement | string): HTMLDivElement;
    private createElement(type: 'a' | 'img' | 'br' | 'div' | 'italic' | 'strong', elements?: (HTMLElement | string)[] | HTMLElement | string): HTMLElement {
        const element = this.windowService.createElement(type === 'italic' || type === 'strong' ? 'div' : type);
        if (!element)
            throw new Error('Could\'t create element.')
        if (type === 'italic' || type === 'strong')
            element.classList.add(type);
        if (Array.isArray(elements)) {
            for (const child of elements)
                element.append(child);
        } else if (elements !== undefined)
            element.append(elements);
        return element;
    }
}
