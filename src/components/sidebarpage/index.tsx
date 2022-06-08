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
          <IconSideBar icon={FiChrome} color={COLORS.black} />
          <IconSideBar icon={FiChrome} color={COLORS.black} />
          <IconSideBar icon={FiChrome} color={COLORS.black} />
          <IconSideBar icon={FiChrome} color={COLORS.black} />
        </div>
        <IconSideBar icon={FiChrome} color={COLORS.black} />
      </Container>
    </>
  );
}
