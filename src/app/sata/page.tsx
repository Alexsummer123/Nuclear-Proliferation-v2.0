import Link from "next/link";

export default function Home() {
  const images = [
    { src: "https://i.imgur.com/CiYH8Nr.png", title: "Title 1", description: "Description for image 1" },
    { src: "https://i.imgur.com/CiYH8Nr.png", title: "Title 2", description: "Description for image 2" },
    { src: "https://i.imgur.com/CiYH8Nr.png", title: "Title 3", description: "Description for image 3" },
    { src: "https://i.imgur.com/CiYH8Nr.png", title: "Title 4", description: "Description for image 4" },
    { src: "https://i.imgur.com/CiYH8Nr.png", title: "Title 5", description: "Description for image 5" },
    { src: "https://i.imgur.com/CiYH8Nr.png", title: "Title 6", description: "Description for image 6" },
    { src: "https://i.imgur.com/CiYH8Nr.png", title: "Title 6", description: "Description for image 6" },
    { src: "https://i.imgur.com/CiYH8Nr.png", title: "Title 6", description: "Description for image 6" },
    
  ];

  return (
    <main 
      className="relative w-full min-h-screen flex items-center justify-center bg-cover bg-center" 
      style={{ backgroundColor: "#2E2E2E" }}
    >
      <div className="bg-white bg-opacity-50 p-10 rounded-lg shadow-lg max-w-7xl w-full flex items-center">
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
              {images.map((image, index) => (
                <div key={index} className="mt-4 mx-auto rounded-lg shadow-lg">
                  <img src={image.src} alt={`Image ${index + 1}`} className="rounded-lg" />
                  <div className="bg-white bg-opacity-75 p-4 rounded-b-lg shadow-md text-center">
                    <h2 className="text-xl font-semibold">{image.title}</h2>
                    <p className="text-sm mt-4">{image.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex justify-center">
              {[
                { href: "/start", text: "Back" },
              ].map((link) => (
                <Link href={link.href} key={link.href}>
                  <div className="bg-white text-black py-2 px-4 rounded-lg shadow-md transition-transform transform hover:scale-105 cursor-pointer text-center mr-4">
                    {link.text}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
