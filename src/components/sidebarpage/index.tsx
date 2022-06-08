import { Container } from "./style";
import { FiChrome } from "react-icons/fi";
import { IconSideBar } from "./iconSideBar";

export function SideBar() {
    return (<Container>
        <IconSideBar icon={FiChrome} />
            <div className="gc-icons">
                <IconSideBar icon={FiChrome} />
                <IconSideBar icon={FiChrome} />
                <IconSideBar icon={FiChrome} />
                <IconSideBar icon={FiChrome} />
            </div>
        <IconSideBar icon={FiChrome} />
    </Container>)
}