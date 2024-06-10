import Link from "next/link";

export default function Home() {
  return (
    <main 
      className="relative w-full min-h-screen flex items-center justify-center bg-cover bg-center" 
      style={{ backgroundImage: "url('https://i.imgur.com/CiYH8Nr.png')" }}
    >
      <div className="bg-white bg-opacity-50 p-10 rounded-lg shadow-lg max-w-7xl w-full flex items-center relative">
        <div className="flex-1 md:w-1/4"> 
          <img src="https://i.imgur.com/KLKmbHx.jpg" alt="Description of the image" className="rounded-lg shadow-lg max-w-xs mx-auto" style={{ transform: 'scale(1.75)' }}/>
        </div>
        <div className="flex-1">
          <div className="text-justify"> 
            <h1 className="text-4xl font-bold mb-4 font-custom">NUCLEAR PROLIFERATION</h1>
            <div className="text-lg mb-9">
              <p className="mb-9">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              <p className="mb-9">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
            <div className="flex justify-center flex-wrap"> 
              {
                [
                  { href: "/photos", text: "Photograph" },
                  { href: "/sata", text: "The Project" },
                  { href: "/recording", text: "Recording" },
                ].map((link) => (
                  <Link href={link.href} key={link.href}>
                    <div className="bg-white text-black py-2 px-4 rounded-lg shadow-md transition-transform transform hover:scale-105 cursor-pointer text-center mr-4 mb-4"> 
                      {link.text}
                    </div>
                  </Link>
                ))
              }
            </div>
          </div>
          <div className="absolute bottom-9 left-20 mb-4 ml-4"> 
            <Link href="/home">
              <div className="bg-white text-black py-2 px-4 rounded-lg shadow-md transition-transform transform hover:scale-105 cursor-pointer text-center">
                Home
              </div>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
