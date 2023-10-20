import Image from "next/image";
import Link from "next/link";
import {
  FaYoutube,
  FaFacebook,
  FaInstagram,
  FaPinterest,
} from "react-icons/fa";
const socialMedia = [
  { id: 1, icon: <FaYoutube /> },
  { id: 2, icon: <FaFacebook /> },
  { id: 3, icon: <FaInstagram /> },
  { id: 4, icon: <FaPinterest /> },
];
const Footer = () => {
  return (
    <footer className="bg-primary bg-pattern py-16">
      <div className="container mx-auto">
        <div className="flex flex-col items-center gap-y-6 justify-center">
          <Link href={"#"}>
            <Image src={"/logo.svg"} width={180} height={180} alt="" />
          </Link>
          <div className="flex gap-x-6 text-xl text-white">
            {socialMedia.map(({ id, icon }) => (
              <Link key={id} href={"#"}>
                {icon}
              </Link>
            ))}
          </div>
          <div className="text-white font-medium">
            Copyright &copy; Pizzaland 2023. All right reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
