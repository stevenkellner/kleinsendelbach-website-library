import { Link } from "../link";

export type BannerData<InternalPathKey extends string> = BannerItem<InternalPathKey>[];

export type BannerItem<InternalPathKey extends string> = {
    imageSource: string;
    title: string;
    subTitle: string | null;
    link: Link | InternalPathKey;
    isCurrent: boolean;
}
