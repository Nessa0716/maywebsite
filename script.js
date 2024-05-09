// team member data
// do jumanji like you make characters like when they have strenghts and weaknesses
//or do minions and give them all traits
const teamMembers = [
    {
        name:'Lionel Messi',
        age:36,
        activePlayer:true,
        position: 'mid',
        strengths: 'ball control',
        weaknesses: 'heading ability',
        skills: ['dribbling','shooting','passing'],
        biography: 'Messi is a really cool dude'
    },
    {
        name:'Lionel Messi',
        age:36,
        activePlayer:true,
        position: 'defender',
        strengths: 'ball control',
        weaknesses: 'heading ability',
        skills: ['dribbling','shooting','passing'],
        biography: 'Messi is a really cool dude'
    }, {
        name:'Lionel Messi',
        age:36,
        activePlayer:true,
        position: 'forward',
        strengths: 'ball control',
        weaknesses: 'heading ability',
        skills: ['dribbling','shooting','passing'],
        biography: 'Messi is a really cool dude'
    },
]

function generateTeamCards(){
    const teamCardsContainer=document.getElementById('teamCards')
teamMembers.forEach(member => {
    const card = document.createElement('div')
card.classList.add('col-md-4')
//style card based on position
let backgroundColor

switch(member.position.toLowerCase()){
    case 'forward':
        backgroundColor="red"
        break
        case 'mid':
        backgroundColor="green"
        break
            case 'defender':
                backgroundColor="orange"
                break
}

card.style.backgroundColor = backgroundColor


card.innerHTML=`
<div class="card">
<div class="card-header">
${member.name}
    </div>
    <div id="cardBody" class="card-body" style="background-color:${backgroundColor}">
    <p><strong>Position</strong> ${member.position}</p>
 </div>
`


teamCardsContainer.appendChild(card)


});

}

window.onload = generateTeamCards()
