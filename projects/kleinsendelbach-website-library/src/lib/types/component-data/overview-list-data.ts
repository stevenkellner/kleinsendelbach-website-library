import { Link } from "../link";

export type OverviewListData<InternalPath extends string> = OverviewListElement<InternalPath>[];

export type OverviewListElement<InternalPath extends string> = {
    title: string;
    subtitle: string | null;
    buttons: {
        title: string;
        action: (() => void) | null;
        link: Link | InternalPath | null;
        selected: boolean;
    }[] | null;
}
