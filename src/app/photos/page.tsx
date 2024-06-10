import Link from "next/link";

export default function Home() {
  const images = [
    {
      src: "https://i.imgur.com/7o08Sdd.jpg",
      title: "Pilot program",
      description: "This is the early stage of this project in the 1990s in Sabha. The first start of the agriculture farmland along with the nuclear and desalination plant."
    },
    {
      src: "https://i.imgur.com/DSGwohz.jpg",
      title: "Early 1990s",
      description: "The green farmland with desalination plants and the city in distance. "
    },
    {
      src: "https://i.imgur.com/cifOVco.png",
      title: "The desalination plant ",
      description: "Closer look at the desalination plant site. "
    },
    {
      src: "https://i.imgur.com/vPBblsT.jpg",
      title: "Large context",
      description: "The panoramic view of the city of Sabha with the agriculture farmland, desalination plant and the supply of electricity from the nuclear power plant. "
    },
    {
      src: "https://i.imgur.com/6dFQx3m.jpg",
      title: "",
      description: ""
    },
    {
      src: "https://i.imgur.com/UcegqXs.jpg",
      title: "",
      description: ""
    },
    {
      src: "https://i.imgur.com/97LpVsh.jpg",
      title: "",
      description: ""
    },
    {
      src: "https://i.imgur.com/uwzwGId.jpeg",
      title: "",
      description: ""
    },
    {
      src: "https://i.imgur.com/CWfvyKo.jpg",
      title: "The city grows",
      description: "The city of Sabha developing significantly over time and alongside the farmland. "
    },
    {
      src: "https://i.imgur.com/cV0QlRj.png",
      title: "Nuclear power plant ",
      description: "Inside look of the Nuclear power plant facility. "
    },
    {
      src: "https://i.imgur.com/lFlyVjl.jpeg",
      title: "Sabha first desalination plant ",
      description: "Closer look at the pilot project in the 1990s. "
    },
    {
      src: "https://i.imgur.com/QE68ze7.jpeg",
      title: "",
      description: ""
    },
    {
      src: "https://i.imgur.com/hVG9Xgg.jpeg",
      title: "Sabha first desalination plant ",
      description: "Desalination facility in Sabha "
    },
    {
      src: "https://i.imgur.com/0bu5Tfk.jpeg",
      title: "",
      description: ""
    },
    {
      src: "https://i.imgur.com/oQChnQp.jpeg",
      title: "Project corridor, City of Sirte ",
      description: " This project corridor start in 2020s in the city of Sirte located next to the Mediterranean  sea. "
    },
    {
      src: "https://i.imgur.com/GKNa3hF.jpg",
      title: "",
      description: ""
    },
    {
      src: "https://i.imgur.com/5kb4Tfc.jpeg",
      title: "",
      description: ""
    },
    {
      src: "https://i.imgur.com/wO0Tn5n.jpeg",
      title: "",
      description: ""
    },
    {
      src: "https://i.imgur.com/L9hsoDY.jpeg",
      title: "",
      description: ""
    },
    {
      src: "https://i.imgur.com/WLE9D3G.jpeg",
      title: "",
      description: ""
    },
    {
      src: "https://i.imgur.com/TZ34oRr.jpeg",
      title: "",
      description: ""
    },
    {
      src: "https://i.imgur.com/3LEdD1m.jpeg",
      title: "",
      description: ""
    },
  ];

  return (
    <main
      className="relative w-full min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{ backgroundColor: "#2E2E2E" }}
    >
      <div className="bg-white bg-opacity-50 p-10 rounded-lg shadow-lg max-w-7xl w-full flex flex-col items-center">
        <div className="flex-1 w-full">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold font-custom">NUCLEAR PROLIFERATION</h1>
            <h2 className="text-2xl mt-4">Photograph Collection</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                {images.map((image, index) => (
                  <div key={index} className="rounded-lg shadow-lg overflow-hidden">
                    <div className="relative h-72">
                      <img
                        src={image.src}
                        alt={`Image ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="bg-white bg-opacity-70 p-2"> {/* Adjust the padding here */}
                      <h2 className="text-lg font-bold mb-1">{image.title}</h2> {/* Adjust the font size here */}
                      <p className="text-sm">{image.description}</p> {/* Adjust the font size here */}
                    </div>
                  </div>
                ))}
              </div>
            
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
    </main>
  );
}
