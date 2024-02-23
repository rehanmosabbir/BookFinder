import Logo from "./Logo";
import Notification from "./Notification";

export default function Navbar() {
  return (
    <nav className="py-6 ">
      <div className="container mx-auto flex items-center justify-between gap-x-6 max-w-7xl">
        <Logo />
        <Notification />
      </div>
    </nav>
  );
}
