import { Link } from "./link";

export type BannerData = BannerItem[];

export type BannerItem = {
    imageSource: string;
    title: string;
    subTitle: string | null;
    link: Link;
    isCurrent: boolean;
}
