import {
  FaFacebook,
  FaTwitter,
  FaPinterest,
  FaInstagram,
} from "react-icons/fa";
const Footer = () => {
  return (
    <div className="flex bg-black text-white px-40 justify-between py-20 mt-20">
      <div className="w-4/12 text-6xl font-bold">Shortly</div>
      <div className="w-5/12 flex justify-between">
        <div>
          <div className="text-2xl mb-10">features</div>
          <div>
            <div>Link Shortening</div>
            <div>Branded Links</div>
            <div>Analytics</div>
          </div>
        </div>
        <div>
          <div className="text-2xl mb-10">Resources</div>
          <div>
            <div>Blog</div>
            <div>Developers</div>
            <div>Support</div>
          </div>
        </div>
        <div>
          <div className="text-2xl mb-10">Company</div>
          <div>
            <div>About</div>
            <div>Our team</div>
            <div>Careers</div>
            <div>Contact</div>
          </div>
        </div>
      </div>
      <div className="flex text-xl gap-3">
        <FaFacebook />
        <FaTwitter />
        <FaPinterest />
        <FaInstagram />
      </div>
    </div>
  );
};

export default Footer;
