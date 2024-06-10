import Link from "next/link";

export default function Home() {
  return (
    <main 
      className="relative w-full h-screen bg-cover bg-center" 
      style={{ backgroundImage: "url('https://i.imgur.com/CiYH8Nr.png')" }}
    >
      <div className="flex items-center justify-center h-full">
        <div className="bg-white bg-opacity-50 p-10 rounded-lg shadow-lg">
          <h1 className="text-4xl font-bold mb-4 text-center font-custom">What if, <br></br>Chernobyl incident never happen? </h1>
          <div className="flex flex-col items-center space-y-4">
            {
              [
                { href: "/agents", text: "World Engine Simulation" },

                { href: "/start", text: "Start" },

              ].map((link) => (

              <Link href={link.href} key={link.href}>
                <div className="bg-white text-black py-2 px-4 rounded-lg shadow-md transition-transform transform hover:scale-105 cursor-pointer text-center">
                    {link.text}
                  </div>
              </Link>
               ))}
          </div>
        </div>
      </div>
    </main>
  );
}
