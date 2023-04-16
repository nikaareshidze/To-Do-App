import Logo from "./Logo";
import Search from "./Search";
import Toolkit from "./Toolkit";

export default function Header() {
  return (
    <div className="flex justify-between items-center mb-8">
      <Logo />
      {/* <div className="max-[750px]:hidden">
        <Search />
      </div> */}
      <Toolkit />
    </div>
  );
}
