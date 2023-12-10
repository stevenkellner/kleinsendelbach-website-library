import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { Link } from "../link";

export type SocialMediaData<InternalPath extends string> = SocialMediaItem<InternalPath>[];

export type SocialMediaItem<InternalPath extends string> = {
    title: string;
    name: string;
    link: Link | InternalPath;
    image: IconProp | {
        lightModeSource: string;
        darkModeSource: string;
    };
}
