import { Link } from "../link";

export type NavigationBarData<InternalPathKey extends string> = NavigationItem<InternalPathKey>[];

export type NavigationItem<InternalPathKey extends string> = {
    text: string;
    alignment: 'left' | 'center' | 'right';
    link: Link | InternalPathKey | null;
    action: (() => void) | null;
}
