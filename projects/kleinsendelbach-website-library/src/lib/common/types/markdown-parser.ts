import { RegexIterable } from "./regex-iterator";

class Elements implements Iterable<HTMLElement | string> {
    public constructor(
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

export class MarkdownParser {
    private static parseImages(elements: Elements): Elements {
        return elements.flatMap(value => {
            const result: (HTMLElement | string)[] = [];
            let lastIndex = 0;
            const regexIt = new RegexIterable(/!\[(?<title>[\S\s]+?)\]\((?<link>[\S\s]+?)(?:\s*,\s*(?<width>\d*%)\s*)?\)/gu, value);
            for (const match of regexIt) {
                result.push(value.slice(lastIndex, match.startIndex));
                if (!match.groups)
                    continue;
                const image = document.createElement('img');
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

    private static parseLinks(elements: Elements): Elements {
        return elements.flatMap(value => {
            const result: (HTMLElement | string)[] = [];
            let lastIndex = 0;
            const regexIt = new RegexIterable(/\[(?<content>[\S\s]+?)\]\((?<link>[\S\s]+?)\)/gu, value);
            for (const match of regexIt) {
                result.push(value.slice(lastIndex, match.startIndex));
                if (!match.groups)
                    continue;
                const link = document.createElement('a');
                link.href = match.groups['link'];
                link.target = '_blank';
                link.append(...MarkdownParser.parse(match.groups['content']));
                link.title = link.innerText;
                result.push(link);
                lastIndex = match.endIndex + 1;
            }
            result.push(value.slice(lastIndex));
            return result;
        });
    }

    private static parseNewLines(elements: Elements): Elements {
        return elements.flatMap(value => {
            const result: (HTMLElement | string)[] = [];
            const regexIt = new RegexIterable(/\n/gu, value);
            let lastIndex = 0;
            for (const match of regexIt) {
                result.push(value.slice(lastIndex, match.startIndex));
                result.push(document.createElement('br'));
                lastIndex = match.endIndex + 1;
            }
            result.push(value.slice(lastIndex));
            return result;
        });
    }

    private static parseHorizonalLine(elements: Elements): Elements {
        return elements.flatMap(value => {
            const result: (HTMLElement | string)[] = [];
            const match = (/^\s*---\s*$/gu).exec(value);
            if (match) {
                const line = document.createElement('div');
                line.classList.add('horizontal-line');
                line.append(document.createElement('div'));
                result.push(line);
            } else
                result.push(value);
            return result;
        });
    }

    private static parseFormatting(elements: Elements): Elements {
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
                    result.push(MarkdownParser.createElement('italic', [...components[0][1], currentValue]));
                    components = [];
                    break;
                case '*|**':
                    components[0][1].push(currentValue);
                    components.push(['**', []]);
                    break;
                case '*|***':
                    result.push(MarkdownParser.createElement('italic', [...components[0][1], currentValue]));
                    components = [['**', []]];
                    break;
                case '**|*':
                    components[0][1].push(currentValue);
                    components.push(['*', []]);
                    break;
                case '**|**':
                    result.push(MarkdownParser.createElement('strong', [...components[0][1], currentValue]));
                    components = [];
                    break;
                case '**|***':
                    result.push(MarkdownParser.createElement('strong', [...components[0][1], currentValue]));
                    components = [['*', []]];
                    break;
                case '***|*':
                    components = [['**', [MarkdownParser.createElement('italic', [...components[0][1], currentValue])]]];
                    break;
                case '***|**':
                    components = [['*', [MarkdownParser.createElement('strong', [...components[0][1], currentValue])]]];
                    break;
                case '***|***':
                    result.push(MarkdownParser.createElement('italic', MarkdownParser.createElement('strong', [...components[0][1], currentValue])));
                    components = [];
                    break;
                case '*|**|**':
                    components = [['*', [...components[0][1], MarkdownParser.createElement('strong', [...components[1][1], currentValue])]]];
                    break;
                case '*|**|***':
                    result.push(MarkdownParser.createElement('italic', [...components[0][1], MarkdownParser.createElement('strong', [...components[1][1], currentValue])]));
                    components = [];
                    break;
                case '**|*|*':
                    components = [['**', [...components[0][1], MarkdownParser.createElement('italic', [...components[1][1], currentValue])]]];
                    break;
                case '**|*|***':
                    result.push(MarkdownParser.createElement('strong', [...components[0][1], MarkdownParser.createElement('italic', [...components[1][1], currentValue])]));
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

    private static createElement(type: 'italic' | 'strong', elements: (HTMLElement | string)[] | HTMLElement | string): HTMLElement {
        const element = document.createElement('div');
        element.classList.add(type);
        if (Array.isArray(elements)) {
            for (const child of elements)
                element.append(child);
        } else
            element.append(elements);

        return element;
    }

    public static parse(message: string): Elements {
        const parsers: ((elements: Elements) => Elements)[] = [
            MarkdownParser.parseImages,
            MarkdownParser.parseLinks,
            MarkdownParser.parseFormatting,
            MarkdownParser.parseNewLines,
            MarkdownParser.parseHorizonalLine
        ];
        let elements: Elements = Elements.fromContent(message);
        for (const parser of parsers) {
            elements = parser(elements);
        }
        return elements;
    }
}
