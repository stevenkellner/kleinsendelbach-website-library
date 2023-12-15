import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { Link } from "../link";

export type SocialMediaData<InternalPathKey extends string> = SocialMediaItem<InternalPathKey>[];

export type SocialMediaItem<InternalPathKey extends string> = {
    title: string;
    name: string;
    link: Link | InternalPathKey;
    image: IconProp | {
        lightModeSource: string;
        darkModeSource: string;
    };
}
