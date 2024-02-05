type HeaderProps = {
  link: string | undefined;
  title: string | undefined;
  lastBuildDate: string | undefined;
};
const Header = ({ title, link, lastBuildDate }: HeaderProps) => {
  return (
    <header id="header">
      <h1 id="page_title">
        <a href={link}>{title}</a>
        <h2 id="last_build_date">{lastBuildDate}</h2>
      </h1>
    </header>
  );
};
export default Header;
