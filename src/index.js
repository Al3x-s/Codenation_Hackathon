import "./styles.css";

let neighborhoods = [
  {
    name: "Pilsen",
    image_url:
      "https://www.visitpilsen.eu/wp-content/uploads/2019/11/plzen_panorama_detail.jpg",
    res: [
      {
        name: "La Esperanza",
        price: "$$",
        eth: "Mex",
        rating: "4.5",
        desc: "Breakfast and Brunch family dining",
        tags: "breakfast, BYOB"
      },
      {
        name: "5 Rabanitos",
        price: "$$$",
        eth: "Mex",
        rating: "4.7",
        desc: "Mexican cuisine by Chef Alfonso Sotelo",
        tags: "Dinner, Hip"
      },
      {
        name: "S.K.Y",
        price: "$$$",
        eth: "Mex",
        rating: "4.2",
        desc:
          "A wide range of cuisines - with an incorparation of asian elements",
        tags: "Dinner, Fancy"
      }
    ],
    thingsToDo: [
      {
        name: "National Museum Of Mexican Art",
        Fee: "5$",
        Hours: "10:00am to 5:00pm Daily",
        desc:
          "Exhbitions with a range of mexican cultural expressions from ancient to modern works of art"
      },
      {
        name: "16th Steet Murals",
        fee: "Free",
        Hours: "All day everyday",
        desc:
          "Bold muruals on every corner on the fronts of homes, along railway overpasses, and wrapped around train platforms with chicago's most celebrated street artist"
      }
    ]
  },
  //////////////////west loop//////////////////////
  {
    name: "China-Town",
    image_url:
      "data:image/jpeg;base64,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",
    res: [
      {
        name: "Joy Ye",
        price: "$$",
        eth: "Chinese",
        rating: "4.4",
        desc: " ",
        tags: "Big Groups, Dinner"
      },
      {
        name: "Ahjoomah's Apron Korean Restaurant",
        price: "$$",
        eth: "Korean",
        rating: "4.3",
        desc: "",
        tags: "Big Groups, Drinking soju"
      },
      {
        name: "Hing Kee",
        price: "$",
        eth: "Chinese",
        rating: "4.1",
        desc: "",
        tags: "Date Night, Fancy"
      }
    ],
    ThingsToDo: [
      {
        name: "Chicago Chinese Cultural Institute",
        Fee: "Free",
        Hours: "9am-5pm Monday-Friday Closed Saturday-Sunday",
        desc:
          "Founded to bring Chinese language and culture programs to local libraries and schools, this organization is best known for offering tours of Chinatown's attractions and restaurants. Head to the Cultural Institute's website to learn more about it's offerings, including public and private tours, as well as dumpling-making dinners and Tai Chi classes."
      },
      {
        name: "Heritage Museum of Asian Art",
        Fee: "Free",
        Hours: "11am-4pm",
        desc:
          "The nonprofit Heritage Museum of Asian Art showcases a variety of different Asian artforms, with a collection assembled by art dealer Jeffrey Moy. Inside the Chinatown institution, visitors will find jade and pottery that dates back to the Neolithic period, porcelain, snuff bottles, textiles and more. There are also exhibitions devoted to ojime beads (part of a small toggled cord that was attached to kimonos) and Chinese puzzle balls, which date back to the 1700s."
      },
      {
        name: "Pui Tak Center", //pui tak center
        Fee: "Free",
        desc:
          "As the first piece of traditional Chinese architecture to be built in the area, the Pui Tak Center is a cornerstone of Chinatown's community and one of the most visually striking structures in the area. A Western interpretation of traditional Chinese architecture, the Pui Tak Center features gabled towers and decorative terra cotta accents. The building was restored in 2010 after being purchased by the Chinese Christian Union Church, which offers ESL classes and immigration services to area residents."
      }
    ]
  }
];

let pilsres = neighborhoods[0].res;

//let pilsenResInfo = document.querySelector("res--info")
const displayPilsenRes = pilsres.map((info) => {
  return `
  <div>${info.name}</div>
  <div>${info.rating}</div>
  `;
});
//pilsenResInfo.innerHTML = displayPilsenRes

const data = document.querySelector(".rectangle--list");
const displayData = pilsres.map((info) => {
  console.log(info);
  return `<li>${info.name}</li>`;
});
//rsinf.innerHTML = displayData
let neighborhoodName = document.querySelector(".neighborhood--wrapper");

const displayNeighborhoodCards = neighborhoods.map((hoods) => {
  return `
    <div class="neighborhood "> 
      <h1 class="neighborhood__name ${hoods.name}" onclick="displ${hoods.name}()">${hoods.name}</h1>
    </div> 

    <style> 
      .neighborhood {
        background-image: url("${hoods.image_url}")
      }
    </style>
   `;
});

neighborhoodName.innerHTML = displayNeighborhoodCards;

//pilsen.addEventListener("click", function)
