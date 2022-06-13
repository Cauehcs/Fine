import { FiChrome } from "react-icons/fi";
import { COLORS } from "../../constants";
import { ProfileSideBar } from "./profileSideBar";
import { IconSideBar } from "./iconSideBar";
import { Container } from "./style";

export function SideBar() {
  return (
    <Container>
      <IconSideBar icon={FiChrome} color={COLORS.white} />
      <div className="gc-icons">
        <IconSideBar icon={FiChrome} color={COLORS.black} text="Texto 1" />
        <IconSideBar icon={FiChrome} color={COLORS.black} text="Texto 2" />
        <IconSideBar icon={FiChrome} color={COLORS.black} text="Texto 3" />
        <IconSideBar icon={FiChrome} color={COLORS.black} text="Texto 4" />
      </div>
      <ProfileSideBar />
    </Container>
  );
}
