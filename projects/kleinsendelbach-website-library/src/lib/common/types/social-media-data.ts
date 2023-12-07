import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { Link } from "./link";

export type SocialMediaData = SocialMediaItem[];

export type SocialMediaItem = {
    title: string;
    name: string;
    link: Link;
    image: IconProp | {
        lightModeSource: string;
        darkModeSource: string;
    };
}
