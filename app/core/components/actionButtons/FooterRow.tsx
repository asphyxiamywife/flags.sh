import { Group } from "@mantine/core";
import ThemeToggle from "./ThemeToggle";
import { GitHubLink } from "./GitHubLink";
import { AboutLink } from "./AboutLink";
import ActionButtonOptions from "./interfaces/ActionButtonOptions";

/**
 * A pre-made group of the site's common locations.
 *
 * Includes theme toggle, GitHub link, and about link.
 *
 * @param filled Whether the button should be filled
 */
export default function FooterRow({ filled = false }: ActionButtonOptions) {
    return (
        <Group noWrap>
            <ThemeToggle filled={filled} />
            <GitHubLink filled={filled} />
            <AboutLink filled={filled} />
        </Group>
    );
}