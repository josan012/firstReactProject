import Style from "./styled";
import Image from "next/image";

const Navbar = () => {
  return (
    <Style>
      <nav>
        <Image src="/react-icon-small.png" alt="Logo" width={50} height={50} />
        <h3 className="nav--logo_text">ReactFacts</h3>
        <h4 className="nav--title">React Course - Project 1</h4>
      </nav>
    </Style>
  );
};
export default Navbar;
