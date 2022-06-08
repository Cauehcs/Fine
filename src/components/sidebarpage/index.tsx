import { Container } from "./style";
import { FiChrome } from "react-icons/fi";
import { IconSideBar } from "./iconSideBar";
import { COLORS } from "../../constants";

export function SideBar() {
  return (
    <>
      <Container>
        <IconSideBar icon={FiChrome} color={COLORS.white} />
        <div className="gc-icons">
          <IconSideBar icon={FiChrome} color={COLORS.black} text="Texto 1" />
          <IconSideBar icon={FiChrome} color={COLORS.black} text="Texto 2" />
          <IconSideBar icon={FiChrome} color={COLORS.black} text="Texto 3" />
          <IconSideBar icon={FiChrome} color={COLORS.black} text="Texto 4" />
        </div>
        <IconSideBar icon={FiChrome} color={COLORS.black} text="Logout" />
      </Container>
    </>
  );
}
