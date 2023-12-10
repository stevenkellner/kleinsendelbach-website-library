import { Link } from "../link";

export type BannerData<InternalPath extends string> = BannerItem<InternalPath>[];

export type BannerItem<InternalPath extends string> = {
    imageSource: string;
    title: string;
    subTitle: string | null;
    link: Link | InternalPath;
    isCurrent: boolean;
}
