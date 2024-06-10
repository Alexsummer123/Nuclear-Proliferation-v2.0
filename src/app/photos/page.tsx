import Link from "next/link";

export default function Home() {
  const images = [
    {
      src: "https://i.imgur.com/CiYH8Nr.png",
      title: "Image Title 1",
      description: "Short description for Image 1"
    },
    {
      src: "https://i.imgur.com/CiYH8Nr.png",
      title: "Image Title 2",
      description: "Short description for Image 2"
    },
    {
      src: "https://i.imgur.com/CiYH8Nr.png",
      title: "Image Title 3",
      description: "Short description for Image 3"
    },
    {
      src: "https://i.imgur.com/CiYH8Nr.png",
      title: "Image Title 4",
      description: "Short description for Image 4"
    },
    {
      src: "https://i.imgur.com/CiYH8Nr.png",
      title: "Image Title 5",
      description: "Short description for Image 5"
    },
    {
        src: "https://i.imgur.com/CiYH8Nr.png",
        title: "Image Title 5",
        description: "Short description for Image 5"
      },
      {
        src: "https://i.imgur.com/CiYH8Nr.png",
        title: "Image Title 5",
        description: "Short description for Image 5"
      },
      {
        src: "https://i.imgur.com/CiYH8Nr.png",
        title: "Image Title 5",
        description: "Short description for Image 5"
      },
      {
        src: "https://i.imgur.com/CiYH8Nr.png",
        title: "Image Title 5",
        description: "Short description for Image 5"
      },
      {
        src: "https://i.imgur.com/CiYH8Nr.png",
        title: "Image Title 5",
        description: "Short description for Image 5"
      },{
        src: "https://i.imgur.com/CiYH8Nr.png",
        title: "Image Title 5",
        description: "Short description for Image 5"
      },
    {
      src: "https://i.imgur.com/CiYH8Nr.png",
      title: "Image Title 6",
      description: "Short description for Image 6"
    }
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

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                {images.map((image, index) => (
                  <div key={index} className="rounded-lg shadow-lg overflow-hidden">
                    <img
                      src={image.src}
                      alt={`Image ${index + 1}`}
                      className="w-full h-auto"
                    />
                    <div className="bg-white bg-opacity-30 p-4">
                      <h2 className="text-xl font-bold mb-2">{image.title}</h2>
                      <p>{image.description}</p>
                    </div>
                  </div>
                ))}
              </div>
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
