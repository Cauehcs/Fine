import { Container } from "./style";
import { FiChrome } from "react-icons/fi";
import { IconSideBar } from "./iconSideBar";
import { ExpandSidebar } from "./expandSideBar";

export function SideBar() {
  return (
    <>
      <ExpandSidebar />
      <Container>
        <IconSideBar icon={FiChrome} />
        <div className="gc-icons">
          <IconSideBar icon={FiChrome} />
          <IconSideBar icon={FiChrome} />
          <IconSideBar icon={FiChrome} />
          <IconSideBar icon={FiChrome} />
        </div>
        <IconSideBar icon={FiChrome} />
      </Container>
    </>
  );
}
