import { Appearance } from "./appearance";

export class ColorComponent {

    public readonly value: number;

    constructor(value: number) {
        this.value = Math.max(0, Math.min(Math.round(value), 255));
    }

    public static byte(value: number): ColorComponent {
        return new ColorComponent(value);
    }

    public static percent(value: number): ColorComponent {
        return new ColorComponent(value * 255);
    }

    public static hex(value: string): ColorComponent {
        if (value.length === 0)
            return new ColorComponent(0);
        else if (value.length === 1)
            return new ColorComponent(16 * Number.parseInt(value, 16));
        else if (value.length === 2)
            return new ColorComponent(Number.parseInt(value, 16));
        throw new Error(`Invalid hex color component: ${value}`);
    }

    public get hex(): string {
        let value = this.value.toString(16).toUpperCase();
        while (value.length < 2)
            value = '0' + value;
        return value;
    }
}

export class Color {
    constructor(
        private readonly red: ColorComponent,
        private readonly green: ColorComponent,
        private readonly blue: ColorComponent,
        private readonly alpha: ColorComponent
    ) {}

    public get css(): string {
        return `#${this.red.hex}${this.green.hex}${this.blue.hex}${this.alpha.value === 255 ? '' : this.alpha.hex}`;
    }

    public static hex(value: string): Color {
        if (!value.startsWith('#'))
            throw new Error('Hex color have to start with #');

        if (value.length === 4)
            return new Color(ColorComponent.hex(value[1]), ColorComponent.hex(value[2]), ColorComponent.hex(value[3]), ColorComponent.hex('FF'));
        else if (value.length === 5)
            return new Color(ColorComponent.hex(value[1]), ColorComponent.hex(value[2]), ColorComponent.hex(value[3]), ColorComponent.hex(value[4]));
        else if (value.length === 7)
            return new Color(ColorComponent.hex(value.substring(1, 3)), ColorComponent.hex(value.substring(3, 5)), ColorComponent.hex(value.substring(5, 7)), ColorComponent.hex('FF'));
        else if (value.length === 9)
            return new Color(ColorComponent.hex(value.substring(1, 3)), ColorComponent.hex(value.substring(3, 5)), ColorComponent.hex(value.substring(5, 7)), ColorComponent.hex(value.substring(7, 9)));

        throw new Error(`Invalid hex color: ${value}`);
    }

    public withAlpha(alpha: number): Color {
        return new Color(this.red, this.green, this.blue, ColorComponent.percent(alpha));
    }
}

export class AppearanceColor {
    constructor(
        private readonly lightColor: Color,
        private readonly darkColor: Color | null = null
    ) {}

    public get light(): Color {
        return this.lightColor;
    }

    public get dark(): Color {
        return this.darkColor ?? this.lightColor;
    }

    public color(appearance: Appearance): Color {
        switch (appearance) {
        case 'light':
            return this.light;
        case 'dark':
            return this.dark;
        default:
            return this.light;
        }
    }

    public css(appearance: Appearance): string {
        return this.color(appearance).css;
    }

    public withAlpha(alpha: number): AppearanceColor {
        return new AppearanceColor(this.lightColor.withAlpha(alpha), this.darkColor ? this.darkColor.withAlpha(alpha) : null);
    }
}
