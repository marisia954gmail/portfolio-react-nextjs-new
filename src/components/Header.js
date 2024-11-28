const Header = () => {
  return (
    <>
      <nav className="md:max-w-6xl mx-auto sticky top-0 z-50" >
        <div className="bg-white flex flex-wrap items-center justify-center px-10 md:py-4 py-2 overflow-hidden border-b border-gray-200 font-2xl sm:px-4 md:overflow-visible md:px-2" >
        <span className="bg-grey-darkest flex items-center relative" ></span>
        <ul className="flex justify-center list-reset m-0 w-full md:w-auto" ><li ><a aria-current="page" href="http://localhost:3000/" className="router-link-active router-link-exact-active block md:inline-block px-4 py-3 no-underline text-grey-darkest hover:text-grey-darker font-bold text-lg md:text-2xl">Home</a></li><li ><a href="/projects" className="block md:inline-block px-4 py-3 no-underline text-grey-darkest hover:text-grey-darker font-bold text-lg md:text-2xl">Projects</a></li><li ><a href="/blog" className="block md:inline-block px-4 py-3 no-underline text-grey-darkest hover:text-grey-darker font-bold text-lg md:text-2xl">Blog</a></li>
        </ul></div></nav>
    </>
  );
}

export default Header;