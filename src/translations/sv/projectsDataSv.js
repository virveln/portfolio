// src/data/projectsData.js
import projectDataStatic from '../../data/projectDataStatic.json';

const importImages = (requireContext) => requireContext.keys().map(requireContext);
const graphicProfileImages = importImages(require.context('../../images/graphicprofile', false, /\.(png|jpe?g|svg)$/));
const hammaroadventureImages = importImages(require.context('../../images/hammaroadventure', false, /\.(png|jpe?g|svg)$/));
const brunchncrunchImages = importImages(require.context('../../images/brunchncrunch', false, /\.(png|jpe?g|svg)$/));
const cocktailsanddreamsImages = importImages(require.context('../../images/cocktailsanddreams', false, /\.(png|jpe?g|svg)$/));
const hangmanImages = importImages(require.context('../../images/hangman', false, /\.(png|jpe?g|svg)$/));
const magasindesignImages = importImages(require.context('../../images/magasindesign', false, /\.(png|jpe?g|svg)$/));
const affarssystemImages = importImages(require.context('../../images/affarssystem', false, /\.(png|jpe?g|svg)$/));
const showcaseImages = importImages(require.context('../../images/showcase', false, /\.(png|jpe?g|svg)$/));
const nollningsmarkenImages = importImages(require.context('../../images/nollningsmarken', false, /\.(png|jpe?g|svg)$/));
const nollningsbiblarImages = importImages(require.context('../../images/nollningsbiblar', false, /\.(png|jpe?g|svg)$/));
const jeopardyImages = importImages(require.context('../../images/jeopardy', false, /\.(png|jpe?g|svg)$/));

const projectsDataSv = [
  {
    id: 1,
    title: projectDataStatic.find((project) => project.id === 1)?.title || "Unknown Project",
    date: projectDataStatic.find((project) => project.id === 1)?.date || "Unknown",
    language: projectDataStatic.find((project) => project.id === 1)?.language || "Unknown",
    reason: 'grupprojekt på universitet',
    link: '',
    description: '<b>Uppgift:</b> Uppgiften gick ut på att skapa en fiktiv kampanj utifrån klimat och hållbarhet, med tema köttkoncumtion, utsläpp från konsumtion av varor och tjänster, eller utsläpp från inrikes transport. Genom att välja en avsändare och definiera målgrupp skulle vi därmed skapa en idé för en kampanj som hade en chans att påverka den tänkta målgruppen.'
                +'<br><br><b>Resultat:</b> Detta resulterade i en kampanj om att välja menskopp istället för engångsprodukter såsom tampong och binda. Avsändare blec "All Matters" och målgruppen unga kvinnor. Nedan visas kampanjens affisch som jag skapade för syftet.',
    thumbnail: require('../../images/kampanj/kampanj.png'),
    images: [
      { url: require('../../images/kampanj/kampanj.png'), description: "" },

    ]
  },
  {
    id: 2,
    title: projectDataStatic.find((project) => project.id === 2)?.title || "Unknown Project",
    date: projectDataStatic.find((project) => project.id === 2)?.date || "Unknown",
    language: projectDataStatic.find((project) => project.id === 2)?.language || "Unknown",
    reason: 'soloprojekt på universitet',
    link: '',
    description: '<b>Uppgift:</b> Uppdatera Swenströmskas stenugnsbageris grafiska profil genom att utföra en varumärkes- omvärlds-, målgrupps- och konkurrensanalys. Skapa en enklare grafisk manual där man visar riktlinjer för logotyp, färgval, bildmanér, typografi samt exemplifierar hur den nya identiteten appliceras på relevanta profilmaterial.'
      + '<br><br><b>Resultat:</b> Lösningen blev en enkel grafisk manual innehållande illustrationer och beskrivande text om hur det uppdaterade varumärket får användas. Ledorden för varumärket är hantverk, närhet, lugn och erfarenhet. Målgruppen är miljömedvetna kunder som uppskattar naturliga och lokalt producerade råvaror. Aktuella trender att ta vara på är hållbarhet, miljömedvetenhet och lokala förankringar. För att sticka ut bland konkurrenter har en alternativ logotyp valts som speglar företagets affärsidé och kultur genom att förmedla känslan av hantverk, ekologiskt och närhet. Färgerna är varma och naturnära, och typografin är handskriven för att ge en personlig och unik känsla. Grafiska element används för att dekorera och visualisera varumärket, och bilderna som används är varma, hemtrevliga och nära.',
    thumbnail: require('../../images/graphicprofile/thumbnail.png'),
    images: [
      { url: graphicProfileImages[0], description: "" },
      { url: graphicProfileImages[1], description: "" },
      { url: graphicProfileImages[2], description: "" },
      { url: graphicProfileImages[3], description: "" },
    ]
  },
  {
    id: 3,
    title: projectDataStatic.find((project) => project.id === 3)?.title || "Unknown Project",
    date: projectDataStatic.find((project) => project.id === 3)?.date || "Unknown",
    language: projectDataStatic.find((project) => project.id === 3)?.language || "Unknown",
    reason: 'soloprojekt på universitet',
    link: '',
    description: '<b>Uppgift:</b> Skapa en design till en applikation som gör det intressant för människor att besöka Hammarö kommun.'
      + '<br><br><b>Resultat:</b> Lösningen blev en design till en applikation där man kan samla poäng genom att svara rätt på quiz och besöka platser på Hammarö. Dessa poäng resulterar i olika belöningar, såsom rabatter eller gratis inträde på event eller platser på Hammarö, via en belöningstrappa. Målgruppen är barnfamiljer där tanken främst är för barnen, men det ska heller inte kännas för barnsligt för en förälder att använda applikationen. Därav dess designval med lekfulla färger, illustrationer och tydlighet.',
    thumbnail: require('../../images/hammaroadventure/thumbnail.png'),
    images: [
      { url: hammaroadventureImages[0], description: "" },
      { url: hammaroadventureImages[1], description: "" },
      { url: hammaroadventureImages[2], description: "" },
      { url: hammaroadventureImages[3], description: "" },
      { url: hammaroadventureImages[4], description: "" },
      { url: hammaroadventureImages[5], description: "" },

    ]
  },
  {
    id: 4,
    title: projectDataStatic.find((project) => project.id === 4)?.title || "Unknown Project",
    date: projectDataStatic.find((project) => project.id === 4)?.date || "Unknown",
    language: projectDataStatic.find((project) => project.id === 4)?.language || "Unknown",
    reason: 'soloprojekt på universitet',
    link: '',
    description: '<b>Uppgift:</b> Skapa ett magasin inriktad till valfri målgrupp som följer de typografiska regler och designprinciper som finns. Den ska innehålla ett reportage med en intervju och minst 50% av bilderna/illustrationerna ska vara skapta av en själv.'
      + '<br><br><b>Resultat:</b> Lösningen blev ett inredningsmagasin med en målgrupp där personer är intresserade av inredning, tips för att inreda bra eller för att se de nya inredningstrenderna. Det blev ett stilrent, enkelt och elegant magasin som gör det lättillgängligt och lätt för läsaren att ta till sig informationen och applicera den i sitt eget hem. Fokus lades på en välbalanserad layout med tydlig hierarki, varierande typsnitt och färg på enstaka ställen för att knyta ihop designen.',
    thumbnail: require('../../images/magasindesign/thumbnail.png'),
    images: [
      { url: magasindesignImages[0], description: "" },
      { url: magasindesignImages[1], description: "" },
      { url: magasindesignImages[2], description: "" },

    ]
  },
  {
    id: 5,
    title: projectDataStatic.find((project) => project.id === 5)?.title || "Unknown Project",
    date: projectDataStatic.find((project) => project.id === 5)?.date || "Unknown",
    language: projectDataStatic.find((project) => project.id === 5)?.language || "Unknown",
    reason: 'soloprojekt på universitet',
    link: '',
    description: '<b>Uppgift:</b> Skapa ett ritprogram enligt MVC genom att implementera en färdigprogrammerad ritmotor.'
      + '<br><br><b>Resultat:</b> Lösningen blev ett enkelt program där användaren kan skapa cirklar, rektanglar och linjer i valfri linjetjocklek och färg. Vid val av cirkel eller rektangel kan även en ifyllnadsfärg väljas. Vid start av programmet öppnas en fil om den redan finns annars skapas en ny och vid avslut sparas filen med ritningen. Lösningen består av mönstrena MVC, facade och composite.',
    thumbnail: require('../../images/riteditor.png'),
    images: [
      { url: require('../../images/riteditor.png'), description: "" },

    ]
  },
  {
    id: 6,
    title: projectDataStatic.find((project) => project.id === 6)?.title || "Unknown Project",
    date: projectDataStatic.find((project) => project.id === 6)?.date || "Unknown",
    language: projectDataStatic.find((project) => project.id === 6)?.language || "Unknown",
    reason: 'soloprojekt på universitet',
    link: projectDataStatic.find((project) => project.id === 6)?.link || "Unknown",
    website: projectDataStatic.find((project) => project.id === 6)?.website || "Unknown",
    description: '<b>Uppgift:</b> Skapa en interaktiv och responsiv webbsida som presenterar innehåll från ett rest-API via JSON.'
      + '<br><br><b>Resultat:</b> Lösningen blev en webbsida där man kan söka efter cocktailrecept utefter olika sökalternativ och filter. Sidan är interaktiv och man kan på många olika sätt komma åt de olika kategorierna och recepten. Besök webbsidan via länken nedan.',
    thumbnail: require('../../images/cocktailsanddreams/thumbnail.png'),
    images: [
      { url: cocktailsanddreamsImages[0], description: "Startsida med sökfunktion och filtrering" },
      { url: cocktailsanddreamsImages[1], description: "Resultat efter att sökning via ingredient" },
      { url: cocktailsanddreamsImages[2], description: "Resultat av filterering via glastyp" },
      { url: cocktailsanddreamsImages[3], description: "Ett enskilt recept på en cocktail" },

    ]
  },
  {
    id: 7,
    title: projectDataStatic.find((project) => project.id === 7)?.title || "Unknown Project",
    date: projectDataStatic.find((project) => project.id === 7)?.date || "Unknown",
    language: projectDataStatic.find((project) => project.id === 7)?.language || "Unknown",
    reason: 'soloprojekt på universitet',
    link: projectDataStatic.find((project) => project.id === 7)?.link || "Unknown",
    website: projectDataStatic.find((project) => project.id === 7)?.website || "Unknown",
    description: '<b>Uppgift:</b> Skapa en fiktiv webbsida m.h.a. Bootstrap där fokus ligger på designprocessen. Krav är att den ska ha minst fyra sektioner, vara mobile first, responsiv, ha en global meny och animeringar.'
      + '<br><br><b>Resultat:</b> Lösningen blev en single-page webbsida åt en brunch-restaurang med enkel navigering och färger som representerar ekologiskt och energi. På mobilversion animeras texterna i de olika sektionerna fram i en fade underifrån. Vid bredare skärm animeras texterna fram från sidorna. Detta för att skapa ett mer djup i webbsidan.',
    thumbnail: require('../../images/brunchncrunch/thumbnail.png'),
    images: [
      { url: brunchncrunchImages[0], description: "Startsida" },
      { url: brunchncrunchImages[1], description: "Veckans deal och öppettider" },
      { url: brunchncrunchImages[2], description: "Ett automatiskt skiftande galleri av rätter och kategorier som länkar till menyn" },
      { url: brunchncrunchImages[3], description: "Information om möjlighet för event och deals" },
      { url: brunchncrunchImages[4], description: "Information om restaurangen" },
      { url: brunchncrunchImages[5], description: "Kontaktsida" },
      { url: brunchncrunchImages[6], description: "Visar de senast uppladdade bilderna från deras Instagramkonto" },
      { url: brunchncrunchImages[7], description: "Information i footer" },
    ]
  },
  {
    id: 8,
    title: projectDataStatic.find((project) => project.id === 8)?.title || "Unknown Project",
    date: projectDataStatic.find((project) => project.id === 8)?.date || "Unknown",
    language: projectDataStatic.find((project) => project.id === 8)?.language || "Unknown",
    reason: 'grupprojekt på universitet',
    link: projectDataStatic.find((project) => project.id === 8)?.link || "Unknown",
    description: '<b>Uppgift:</b> I team skapa en webbsida där studenter kan skapa ett konto och lägga upp projekt tillsammans med andra studenter som resulterar i ett portfolio. Målgruppen beskrivs som unga och kreativa studenter som är intresserade av att uttrycka sin kreativitet, inspirera och hitta en gemenskap. Detta ska framställas via ett eget skapat tema i WordPress och med hjälp av plugins. Projektets fokus ligger i designprocessen.'
      + '<br><br><b>Roll:</b> Min huvudsakliga roll var att koda CSS och justera plugins för att kunna skapa egna PODS, templates och lämplig funktionalitet i WordPress. Hela teamet var del av designprocessen och konceptet.'
      + '<br><br><b>Resultat:</b> Lösningen blev en webbsida med enkel navigering och kreativa färger för att skapa kontrast mot den vita bakgrunden och hålla fokus på projektbilderna. Ett projekt kan vara kopplat till flera konton och länkas till en kurs som man kan klicka på och komma vidare till alla projekt för det kontot/kursen.'
      + '<br><br><b>Varumärkeslöfte:</b> På ShowCase lovar vi att förse studenter med en plattform där de får visa upp sin kreativitet, dela intresse med likasinnade individer, och bygga en gemenskap som inspirerar till innovation och utveckling.',
    thumbnail: require('../../images/showcase/thumbnail.png'),
    images: [
      { url: showcaseImages[0], description: "Startsida" },
      { url: showcaseImages[1], description: "Galleri som visar alla uppladdade projekt" },
      { url: showcaseImages[2], description: "Ett enskilt projekt av en student" },
      { url: showcaseImages[3], description: "Listar alla kurser" },
      { url: showcaseImages[4], description: "Information om en enskild kurs och uppladdade projekt inom den kursen" },
      { url: showcaseImages[5], description: "Listar alla konton" },
      { url: showcaseImages[6], description: "En användares profil" },
      { url: showcaseImages[7], description: "Sida där man kan skapa konto" },
    ]
  },
  {
    id: 9,
    title: projectDataStatic.find((project) => project.id === 9)?.title || "Unknown Project",
    date: projectDataStatic.find((project) => project.id === 9)?.date || "Unknown",
    language: projectDataStatic.find((project) => project.id === 9)?.language || "Unknown",
    reason: 'soloprojekt på universitet',
    link: projectDataStatic.find((project) => project.id === 9)?.link || "Unknown",
    description: '<b>Uppgift:</b> Skapa en applikation för spelet Hangman (Hänga gubbe). Vid start av spel ska ett ord slumpas och spelaren ska försöka att gissa ordet genom att välja en bokstav åt gången. Om man gissar på en bokstav som inte finns med i ordet tappar man ett liv och illustrationen börjar ritas. Har man valt fel bokstav 7 gånger förlorar man. Lyckas man gissa rätt bokstäver innan 7 felförsök vinner man.'
      + '<br><br><b>Resultat:</b> Lösningen blev en applikation med en startsida som introduserar en till spelet. Där kan man välja att starta spelet eller läsa spelinstruktioner. När man spelar spelet fungerar det som uppgiftsbeskrivningen.',
    thumbnail: require('../../images/hangman/thumbnail.png'),
    images: [
      { url: hangmanImages[0], description: "Startsida på spel" },
      { url: hangmanImages[1], description: "När man klickar på \"?\" på startsida visas spelregler" },
      { url: hangmanImages[2], description: "Spelplan" },
      { url: hangmanImages[3], description: "Spelplan under spelets gång" },
      { url: hangmanImages[4], description: "Popup när spelare har förlorat spelet" },
      { url: hangmanImages[5], description: "Popup när spelare har vunnit spelet" },

    ]
  },
  {
    id: 10,
    title: projectDataStatic.find((project) => project.id === 10)?.title || "Unknown Project",
    date: projectDataStatic.find((project) => project.id === 10)?.date || "Unknown",
    language: projectDataStatic.find((project) => project.id === 10)?.language || "Unknown",
    reason: 'soloprojekt på universitet',
    link: '',
    description: '<b>Uppgift:</b> Skapa en texteditor där man kan skapa ny, öppna och spara fil.'
      + '<br><br><b>Resultat:</b> Lösningen blev ett program enligt uppgiftsbeskrivningen. Användaren blir även tillfrågad om den vill spara en osparad fil innan programmet stängs eller användaren vill öppna en fil. Karakäter, ord och rader räknas och presenteras också.',
    thumbnail: require('../../images/texteditor.png'),
    images: [
      { url: require('../../images/texteditor.png'), description: "" },

    ]
  },
  {
    id: 11,
    title: projectDataStatic.find((project) => project.id === 11)?.title || "Unknown Project",
    date: projectDataStatic.find((project) => project.id === 11)?.date || "Unknown",
    language: projectDataStatic.find((project) => project.id === 11)?.language || "Unknown",
    reason: 'soloprojekt på universitet',
    link: projectDataStatic.find((project) => project.id === 11)?.link || "Unknown",
    description: '<b>Uppgift:</b> Designa och implementera ett affärssystem, som ska kunna användas till en fiktiv fysisk affär som säljer media (t.ex. böcker, filmer, spel). Systemet ska användas av anställda i affären och kunna hantera både kassahantering och lagerhållning. Sedan ska butiken integreras med ett centrallager som exponeras mot webben. Programmet ska synkronisera lagerstatus och pris mot centrallagret.'
      + '<br><br><b>Resultat:</b> Lösningen blev ett program enligt uppgiftsbeskrivningen, där användaren kan välja mellan två olika huvudvyer, en för lagerhantering och en för kassahantering. Via lagerhanteringsvyn kan användaren lägga till nya produkter, ta bort produkter, och öka antalet av varor i systemet. Via kassahanteringsvyn kan användaren lägga produkter i en varukorg och ”sälja” en produkt, alltså minska antal av produkter i systemet. I båda vyerna finns det en produktlista anpassad utefter behov och de arbetar mot samma csv-fil. Denna csv-fil öppnas vid start av programmet och sparas vid avslut. Systemet integreras med ett centrallager som exponeras mot webben via ett API. De attribut som ska integreras och uppdateras är de lokala produkternas pris och lagerstatus, när användaren klickar på en knapp i lagerhanteringsvyn.',
    thumbnail: require('../../images/affarssystem/affarssystem1.png'),
    images: [
      { url: affarssystemImages[0], description: "Vy för lagerhantering" },
      { url: affarssystemImages[1], description: "Vy för att lägga till ny produkt i systemet" },
      { url: affarssystemImages[2], description: "Vy för kassahantering" },
      { url: affarssystemImages[3], description: "Vy för att se vad som finns i varukorgen" },

    ]
  },
  {
    id: 12,
    title: projectDataStatic.find((project) => project.id === 12)?.title || "Unknown Project",
    date: projectDataStatic.find((project) => project.id === 12)?.date || "Unknown",
    language: projectDataStatic.find((project) => project.id === 12)?.language || "Unknown",
    reason: 'grupprojekt',
    link: '',
    description: 'Tillsammans med två andra har jag designat dessa märken för min dåvarande studentförening Linda Carlstad, till Karlstads universitets introduktionsveckor. Dessa är till för att pryda studentoverallerna och visar årets nollningstema för studentförerningen.',
    thumbnail: require('../../images/nollningsmarken/thumbnail.png'),
    images: [
      { url: nollningsmarkenImages[0], description: "2022 tema Super Mario" },
      { url: nollningsmarkenImages[1], description: "2022 tema Super Mario på ovve" },
      { url: nollningsmarkenImages[2], description: "2023 tema Scooby Doo" },
      { url: nollningsmarkenImages[3], description: "2023 tema Scooby Doo på ovve" },
      { url: nollningsmarkenImages[4], description: "2024 tema Pokémon" },
      { url: nollningsmarkenImages[5], description: "2024 tema Pokémon på ovve" },
    ]
  },
  {
    id: 13,
    title: projectDataStatic.find((project) => project.id === 13)?.title || "Unknown Project",
    date: projectDataStatic.find((project) => project.id === 13)?.date || "Unknown",
    language: projectDataStatic.find((project) => project.id === 13)?.language || "Unknown",
    reason: 'grupprojekt',
    link: '',
    description: 'Tillsammans med en annan person har jag designat dessa brochyrer för min dåvarande studentförening Linda Carlstad, till Karlstads universitets introduktionsveckor. Dessa är till för att informera de nya och gamla studenterna om vad introduktionen kommer handla om, ansvariga, schema, sånger och annat. Designen representerar årets nollningstema hos studentföreningen.',
    thumbnail: require('../../images/nollningsbiblar/thumbnail.png'),
    images: [
      { url: nollningsbiblarImages[0], description: "Fram- och baksida av broschyr 2022, tema Super Mario" },
      { url: nollningsbiblarImages[1], description: "Exempel på insida av brochure 2022, tema Super Mario" },
      { url: nollningsbiblarImages[2], description: "Fram- och baksida av broschyr 2023, tema Scooby Doo" },
      { url: nollningsbiblarImages[3], description: "Exempel på insida av brochure 2023, tema Scooby Doo" },
      { url: nollningsbiblarImages[4], description: "Fram- och baksida av broschyr 2024, tema Pokémon" },
      { url: nollningsbiblarImages[5], description: "Exempel på insida av brochure 2024, tema Pokémon" },

    ]
  },
  {
    id: 14,
    title: projectDataStatic.find((project) => project.id === 14)?.title || "Unknown Project",
    date: projectDataStatic.find((project) => project.id === 14)?.date || "Unknown",
    language: projectDataStatic.find((project) => project.id === 14)?.language || "Unknown",
    reason: 'soloprojekt på fritiden',
    link: '',
    website: projectDataStatic.find((project) => project.id === 14)?.website || "Unknown",
    description: 'För att kunna spela Jeopardy med vänner skapade jag en webbapplikation för detta där man kan välja mellan olika teman att spela. Den är fortfarande under bearbetning.',
    thumbnail: require('../../images/jeopardy/gameboard.png'), 
    images: [
      { url: jeopardyImages[0], description: "Spelplan" },
      
    ]
  },

  /*
  {
    id: 11,
    title: '',
    date: '',
    language: [
      ''
    ],
    reason: '',
    link: '',
    description: '',
    thumbnail: require('../images/'), 
    images: [
      { url: affarssystemImages[0], description: "" },
      
    ]
  },
  */
];

export default projectsDataSv;
