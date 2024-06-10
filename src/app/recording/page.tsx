import Link from "next/link";

export default function Home() {
  return (
    <main 
      className="relative w-full h-screen bg-cover bg-center" 
      style={{ backgroundImage: "url('https://i.imgur.com/CiYH8Nr.png')" }}
    >
      <div className="flex items-center justify-center h-full">
        <div className="bg-white bg-opacity-50 p-20 rounded-lg shadow-lg w-3/4 max-w-8xl flex flex-col">
          <div className="flex-grow">
            <h1 className="text-4xl font-bold mb-4 text-center font-custom">
              What if, Chernobyl incident never happen?
            </h1>
            <div className="flex justify-center items-center mb-8">
              <iframe 
                width="1636" 
                height="921" 
                src="https://www.youtube.com/embed/Gw1XoF9jpMk?si=i--QOinkXUUyT-7k" 
                title="YouTube video player" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
              ></iframe>
            </div>
          </div>
          <div className="flex justify-center space-x-4">
            {
              [

                { href: "/start", text: "Back" },
                
              ].map((link) => (
                <Link href={link.href} key={link.href}>
                  <div className="bg-white text-black py-2 px-4 rounded-lg shadow-md transition-transform transform hover:scale-105 cursor-pointer text-center">
                    {link.text}
                  </div>
                </Link>
              ))
            }
          </div>
        </div>
      </div>
    </main>
  );
}
