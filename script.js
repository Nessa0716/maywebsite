// Team Member Data

const teamMembers = [
    {
      name: "Jack Hughes",
      number: "86",
      position: "forward",
      age: "22",
      skills: ["high speed', 'Stickhandling', 'Shooting', 'Skating"],
      biography:
        "Jack Hughes is a highly skilled hockey player known for his exceptional speed, agility, and playmaking ability. As the first overall pick in the 2019 NHL Draft, he quickly made an impact in the league with his impressive hockey IQ and versatility on the ice. With a promising career ahead, Hughes continues to be a key player for his team, showcasing his talent and determination every game.",
    },
    {
      name: "Erik Haula",
      number: "56",
      position: "forward",
      age: "33", 
      skills: ["versatility on the ice', 'agility', 'Shooting', 'Skating"],
      biography:
        "Erik Haula, a Finnish professional ice hockey forward, has showcased his talents in the NHL, demonstrating remarkable speed, agility, and a keen scoring touch throughout his career.",
    },
    {
      name: "Nico hischier",
      number: "13",
      position: "forward",
      age: "25",
      skills: ["precise playmaking', 'slick puck-handling', 'defensive responsibility', 'Skating"],
      biography:
        "Nico Hischier, hailing from Switzerland, quickly made his mark in the NHL as the first overall pick in the 2017 draft by the New Jersey Devils. With his dynamic skill set and leadership, he's become a cornerstone player for his team, embodying the future of Swiss hockey.",
    },
    {
      name: "Luke hughes",
      number: "43",
      position: "Defensemen",
      age: "20",
      skills: ["elite puck-moving skills', 'Stickhandling', 'offensive instincts', 'Skating"],
      biography:
        "Hailing from a hockey family with his brothers Jack and Quinn already making waves in the NHL, Luke Hughes made his mark in the USNTDP (United States National Team Development Program) with his smooth skating and offensive prowess from the blue line. With his combination of size, skill, and hockey IQ, he's poised to become a dynamic defenseman at the highest level of the game.",
    },
    {
      name: "Curtis lazar",
      number: "42 ",
      position: "Defensemen",
      age: "29",
      skills: ["high speed', 'versatility', 'defensive reliability', 'faceoff proficiency"],
      biography:
        ". Hailing from Canada, Lazar has journeyed through various teams in the NHL, showcasing his skills as a dependable forward with a strong work ethic and a knack for making key plays when it matters most.",
    },
    {
      name: "Simon nemec",
      number: "20",
      position: "Defensemen",
      age: "22",
      skills: ["high speed', 'Stickhandling', 'puck-handling abilities', 'Skating"],
      biography:
        "Nemec has risen through the ranks, showcasing his skills in various leagues and international competitions, carving out a reputation as a promising defenseman with potential to excel at the highest levels of the game  .",
    },
    {
      name: "Alexander holtz",
      number: "10",
      position: "Defensemen",
      age: "22",
      skills: ["smooth skating', 'scoring instincts', 'offensive creativity', 'ability to find open spaces on the ice"],
      biography:
        "Hailing from Saltsjö-Boo, Sweden, Holtz has made waves in junior leagues and international competitions, earning a reputation as a highly skilled sniper with the potential to become a prolific goal scorer at the professional level.",
    },
    {
      name: "Dawson mercer",
      number: "91",
      position: "Defensemen",
      age: "22",
      skills: ["high speed', 'hockey IQ', 'scoring touch', 'Skating"],
      biography:
        "Hailing from Newfoundland and Labrador, Canada, Mercer has risen through the junior ranks, impressing scouts and fans alike with his dynamic playmaking ability and determination to succeed at the highest levels of the game.",
    },
    {
      name: "Jake allen",
      number: "34",
      position: "Goalie",
      age: "33",
      skills: ["quick reflexes', 'strong positional play', 'ability to make clutch saves under pressure', 'Skating"],
      biography:
        "Hailing from Fredericton, New Brunswick, Allen has established himself as a reliable netminder in the NHL, showcasing his skills with the St. Louis Blues and later with the Montreal Canadiens. With his consistent performance and calming presence in the crease, he's proven himself to be a valuable asset to any team.",
    },
    {
      name: "Kaapo kakko",
      number: "31",
      position: "Goalie",
      age: "23",
      skills: ["puck-handling skills', 'accurate shot', 'strong hockey IQ', 'Skating"],
      biography:
        "Hailing from Turku, Finland, Kakko gained prominence in the Finnish Liiga before being selected.",
    },
  
  
  
  
  ];
  
  function generateTeamCards() {
    const teamCardsContainer = document.getElementById("teamCards");
  
    teamMembers.forEach((member) => {
      const card = document.createElement("div");
      card.classList.add('col-md-3','m-1')
  
      //style the BGColor of my card based on pos
  
      switch (member.position.toLowerCase()) {
        case "forward":
          backgroundColor = "red";
          break;
        case "Defensemen":
          backgroundColor = "green";
          break;
        case "Goalie":
          backgroundColor = "blue";
          break;
        default:
          backgroundColor = "gray";
      }
  
      card.innerHTML = `
                <div class="card">
                    <div class = "card-header">
                        ${member.name}
                    </div>
                    <div id="cardBody" class="card-body" style="background-color:${backgroundColor};">
                        <p><strong>Position:</strong> ${member.position}</p>
                    </div>
                </div>
            `;
      //will update the BG style on each child of the card
      for (let i = 0; i < card.children.length; i++) {
        card.children[i].style.backgroundColor = backgroundColor;
      }
   
      teamCardsContainer.appendChild(card);
    });
  }
  
  window.onload = generateTeamCards();