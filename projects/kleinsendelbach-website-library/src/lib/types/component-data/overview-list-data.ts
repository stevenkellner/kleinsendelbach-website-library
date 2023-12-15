import { Link } from "../link";

export type OverviewListData<InternalPathKey extends string> = OverviewListElement<InternalPathKey>[];

export type OverviewListElement<InternalPathKey extends string> = {
    title: string;
    subtitle: string | null;
    buttons: {
        title: string;
        action: (() => void) | null;
        link: Link | InternalPathKey | null;
        options: 'selected' | 'prominent' | null;
    }[] | null;
}
