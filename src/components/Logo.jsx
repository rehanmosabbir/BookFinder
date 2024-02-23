import LogoLWS from "../assets/lws-logo-en.svg";
export default function Logo() {
  return (
    <a href="/">
      <img className="max-w-[100px] md:max-w-[165px]" src={LogoLWS} alt="Lws" />
    </a>
  );
}
