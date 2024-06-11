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
              In an effort to address Libya's pressing need for water and energy, a transformative initiative has been launched to establish a corridor of nuclear power plants (NPP) and desalination plants (DP) spanning from Sabha to Sirte in the Sahara Desert. The NPPs will harness the region's abundant uranium reserves, sourced from neighbouring Niger, to generate clean energy for both plant operations and the wider grid. The DP, powered by the NPPs, will utilize advanced pumping systems to extract seawater and groundwater, providing a sustainable water supply for cities and agricultural development. Integral to this vision is the creation of a vast green area using the 'circle of life' technology, circular plots of land irrigated by desalinated water, transforming a significant portion of the arid landscape into a productive agricultural hub, with the potential to bolster Libya's food security and unlock economic opportunities in the region.
              </p>
              <p className="mb-9">
              As the project progresses, cities along the corridor, such as Sabha and Sirte, are anticipated to experience significant economic growth and urban development. However, challenges remain, particularly in waste management from desalination operations. 
              </p>
              <p>
              The project aims to address this problem by selling the waste to a different company for refining, ensuring the responsible management of by-products and reducing environmental harm. Nonetheless, this initiative represents a bold step towards a greener and more prosperous future for Libya.
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
