export const Header = () => {
  return (
      <header
          className={"fixed top-0 z-50 w-full h-16 bg-white/75 backdrop-blur-sm border-gray-200 border-b-0"}>
        <div className={"mx-auto w-full h-full max-w-screen-xl px-6"}>
          <div className={"flex items-center justify-between h-full"}>
            <div className={"flex items-center space-x-8"}>
              <a className={"flex items-center space-x-2"}>
                <span className={"text-2xl"}>🌈</span>
                <span className={"font-medium text-black"}>MCP Registry</span>
              </a>
            </div>
            <div className={"flex items-center"}>
              <nav className={"hidden lg:flex items-center space-x-6"}>
                {/*<a href="/docs"*/}
                {/*   className={"text-gray-800 hover:text-gray-600 hover:underline"}>Docs</a>*/}
                {/*<a href="/login"*/}
                {/*   className={"text-gray-800 hover:text-gray-600 over:underline"}>Login</a>*/}

              </nav>
            </div>
          </div>
        </div>
      </header>
  );
}