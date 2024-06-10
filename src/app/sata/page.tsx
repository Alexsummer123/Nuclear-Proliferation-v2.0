import Link from "next/link";

export default function Home() {
  const images = [
    { src: "https://i.imgur.com/zwPJx6s.png", title: "Active Nuclear Power Plant and Uranium reserve", description: "This diagram shows the location of current active nuclear power plants and the countries that have uranium reserves. " },
    { src: "https://i.imgur.com/VpVlOC0.png", title: "Nuclear Technology and Suppliers ", description: "This diagram shows countries with industries leading nuclear power technology and the main suppliers of both resources and technology. " },
    { src: "https://i.imgur.com/drhJVT3.png", title: "Uranium kings and Petrol-Sheiks", description: "This diagram shows the main global resources suppliers, uranium and petrol." },
    { src: "https://i.imgur.com/BMPhEr1.png", title: "Geopolitical tension ", description: "This diagram shows the mapping of geopolitical tension with the economic superpower in relation to uranium suppliers in the context of worldwide nuclear adoption. " },
    { src: "https://i.imgur.com/TxwtjCQ.png", title: "Climate condition " },
    { src: "https://i.imgur.com/zLL7yQ0.png", title: "Earthquake Prone areas" },
    { src: "https://i.imgur.com/kB2mwV2.png", title: "Underground water reserves " },
    { src: "https://i.imgur.com/3JuFu8R.png", title: "Global economic map "},
    { src: "https://i.imgur.com/ANeaA4c.png", title: "Population density "},
    { src: "https://i.imgur.com/F0lICJc.png", title: "Africa and Europe relationship ", description: "This diagram shows the relationship of political and military between the Northern Africa and European superpower in context with nuclear power and technology. " },
    { src: "https://i.imgur.com/WujpE51.png", title: "Energy demands Timeline "},
    { src: "https://i.imgur.com/i0taHOH.png", title: "Energy demand growth "},
    { src: "https://i.imgur.com/03r1bO2.jpg", title: "Nuclear Proliferation project " },
    { src: "https://i.imgur.com/LkSESot.jpg", title: "Expansion overtime", description: "The project has its pilot program starting in the year 1990 in the city called Sabha. This pilot program is using the underground water to supply water for the project. The project corridor is the expansion moving closer to the Mediterranean Sea to water supply. " },
    { src: "https://i.imgur.com/bflATAh.jpg", title: "1990 Masterplan", description: "The pilot program started in the city of Sabha with a single desalination plant and nuclear power plant located within 100km radius of the city to supply energy and water. " },
    { src: "https://i.imgur.com/fzHuZNe.jpg", title: "2000 Masterplan ", description: "5 years later, the desalination plant supplies enough water to support agriculture to the city and growth the circle of life to provide crops and vegetation along with energy to the city of Sabha. " },
    { src: "https://i.imgur.com/G4ZrOWJ.jpg", title: "2020 Masterplan ", description: "In 2020, the city expands and so does the land area of agriculture. This project grows and builds another set of desalination and nuclear power plants to supply the growing demand of the city and the agriculture." },
    { src: "https://i.imgur.com/3fqaKA3.jpg", title: "2050 Masterplan ", description: "The city of Sabha population growth and the land of agriculture is expanding over time. The demand of more water supply and energy is increasing, leading to the project expansion. As the technological advancement of nuclear security system, it has become safer for the city to grow within the closer range to the nuclear reactor. " },
    { src: "https://i.imgur.com/k3bTxah.jpg", title: "The project and the city ", description: "In 2050, the city expand significantly and the project supply both energy and water to the city while have a large road connection between the powerplant and Sabha. " },

    
  ];

  return (
    <main 
      className="relative w-full min-h-screen flex items-center justify-center bg-cover bg-center" 
      style={{ backgroundColor: "#2E2E2E" }}
    >
      <div className="bg-white bg-opacity-50 p-10 rounded-lg shadow-lg max-w-7xl w-full flex items-center">
        <div className="flex-1">
          <div className="text-center mb-8"> 
            <h1 className="text-4xl font-bold mb-4 font-custom">NUCLEAR PROLIFERATION</h1>
                {images.map((image, index) => (
                <div key={index} className="mt-4 mx-auto rounded-lg shadow-lg">
                  <img src={image.src} alt={`Image ${index + 1}`} className="rounded-lg" />
                  <div className="bg-white bg-opacity-75 p-4 rounded-b-lg shadow-md text-center">
                    <h2 className="text-xl font-semibold">{image.title}</h2>
                    <p className="text-sm mt-4">{image.description}</p>
                  </div>
                </div>
              ))}
            <div className="flex justify-center mt-8">
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
