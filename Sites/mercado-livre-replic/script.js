function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  var cursor = document.getElementsByClassName('mouse-pointer')[0];
  document.addEventListener('mousemove', function(){
    cursor.style.left = event.clientX + 'px';
    cursor.style.top = event.clientY + 'px';
  })
  var names = [    "Nuno",    "Black",    "Ezequias",    "Anony",    "Leia",    "JV",    "Mestre",    "Prefeito",    "Kjae",    "Klein",    "Klevis",    "Kobe",    "Kobi",    "Koby",    "Koddi",    "Koden",    "Kodi",    "Kodie",    "Kody",    "Kofi",    "Kogan",    "Kohen",    "Kole",    "Konan",    "Konar",    "Konnor",    "Konrad",    "Koray",    "Korben",    "Korbyn",    "Korey",    "Kori",    "Korrin",    "Kory",    "Koushik",    "Kris",    "Krish",    "Krishan",    "Kriss",    "Kristian",    "Kristin",    "Kristofer",    "Kristoffer",    "Kristopher",    "Kruz",    "Krzysiek",    "Krzysztof",    "Ksawery",    "Ksawier",    "Kuba",    "Kurt",    "Kurtis",    "Kurtis-Jae",    "Kyaan",    "Kyan",    "Kyde",    "Kyden",    "Kye",    "Kyel",    "Kyhran",    "Kyie",    "Kylan",    "Kylar",    "Kyle",    "Kyle-Derek",    "Kylian",    "Kym",    "Kynan",    "Kyral",    "Kyran",    "Kyren",    "Kyrillos",    "Kyro",    "Kyron",    "Kyrran",    "McKauley",    "McKay",    "McKenzie",    "McLay",    "Meftah",    "Mehmet",    "Mehraz",    "Meko",    "Melville",    "Meshach",    "Meyzhward",    "Micah",    "Michael",    "Michael-Alexander",    "Michael-James",    "Michal",    "Michat",    "Micheal",    "Michee",    "Mickey",    "Miguel",    "Mika",    "Mikael",    "Mikee",    "Mikey",    "Mikhail",    "Mikolaj",    "Miles",    "Millar",    "Miller",    "Milo",    "Milos",    "Milosz",    "Mir",    "Mirza",    "Mitch",    "Mitchel",    "Mitchell",    "Moad",    "Moayd",    "Mobeen",    "Modoulamin",    "Modu",    "Mohamad",    "Mohamed",    "Mohammad",    "Mohammad-Bilal",    "Mohammed",    "Mohanad",    "Mohd",    "Momin",    "Momooreoluwa",    "Montague",    "Montgomery",    "Monty",    "Moore",    "Moosa",    "Moray",    "Morgan",    "Morgyn",    "Morris",    "Morton",    "Moshy",    "Motade",    "Moyes",    "Msughter",    "Mueez",    "Muhamadjavad",    "Muhammad",    "Muhammed",    "Muhsin",    "Muir",    "Munachi",    "Muneeb",    "Mungo",    "Munir",    "Munmair",    "Munro",    "Murdo",    "Murray",    "Murrough",    "Murry",    "Musa",    "Musse",  ];

  const monthNames = [
    "janeiro",
    "fevereiro",
    "março",
    "abril",
    "maio",
    "junho",
    "julho",
    "agosto",
    "setembro",
    "outubro",
    "novembro",
    "dezembro",
  ];
  const gradients = [
    "linear-gradient(to left, #24c6dc, #514a9d)",
    "linear-gradient(to left, #134e5e, #71b280)",
    "linear-gradient(to left, #085078, #85d8ce)",
    "linear-gradient(to left, #f12711, #f5af19)",
    "linear-gradient(to left, #f5f5f5, #c1c1c1)",
    "linear-gradient(to left, #4776e6, #8e54e9)",
    "linear-gradient(to left, #ff8008, #ffc837)",
    "linear-gradient(to left, #1d976c, #93f9b9)",
    "linear-gradient(to left, #eb3349, #f45c43)",
    "linear-gradient(to left, #dd5e89, #f7bb97)",
    "linear-gradient(to left, #4cb8c4, #3cd3ad)",
    "linear-gradient(to left, #4cb8c4, #3cd3ad)",
    "linear-gradient(to right, #aa076b, #61045f)",
  ];
  const cripto = [
      "Bitcoin", "Ethereum", "Tether", "Dólares"]
      function activityChoose(){
  var activitys = [
        `Você transferiu para ${names[random(0, names.length - 1)]}`,
        `Você recebeu de ${names[random(0, names.length - 1)]}`,
        `Você comprou ${random(1, 100)} ${cripto[random(0, cripto.length - 1)]}`
    ]
    return activitys[random(0, activitys.length - 1)]
}
    
    const randomGradient = gradients[Math.floor(Math.random() * gradients.length)];
    function createList(){
        console.log("createList");
        for (let i = 0; i < 9; i++) {
        document.getElementById('ul-list').innerHTML += `
        <li class="liflex" style="animation-delay:${(i + 0.1)* 0.1}s;">
        <div id="square" style="background: ${gradients[random(0, gradients.length - 1)]};"></div>
        <p>${activityChoose()}</p>
        <div class="money-activity">
            <p>R$${random(0, 200)},${random(0, 99)}</p>
            <p class="small-activity">${random(1,30)} de ${monthNames[random(0, monthNames.length - 1)]}</p>
        </div>
    </li>`;
        }
    }
    createList();



    