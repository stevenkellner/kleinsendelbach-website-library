import { Link } from "./link";

export type OverviewListData = OverviewListElement[];

export type OverviewListElement = {
    title: string;
    subtitle: string | null;
    buttons: {
        title: string;
        action: (() => void) | null;
        link: Link | null;
        selected: boolean;
    }[] | null;
}
