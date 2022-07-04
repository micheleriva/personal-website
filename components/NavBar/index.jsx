import { DesktopNavBar } from "./desktop";
import { MobileNavBar } from "./mobile";

export function NavBar({ show, onChangeVisibility }) {
  return (
    <>
      <div className="hidden md:block">
        <DesktopNavBar />
      </div>
      <div className="block sm:hidden">
        <MobileNavBar show={show} onChangeVisibility={onChangeVisibility} />
      </div>
    </>
  );
}
