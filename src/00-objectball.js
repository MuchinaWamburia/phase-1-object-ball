let game;
let homePlayers ;
let awayPlayers ;
let allPlayers ;

// variable 'teamTheme'takes an argument of that is team name
// pushes them to an array to await team scores
function teamThemes (input){
  const teamTheme = []  
  if (input === homeTeamName()){  
  teamTheme .push (game.home.teamTheme )  
  }
  
  if (input === awayTeamName()){  
  teamTheme .push (game.away.teamTheme )  
  }  
  return teamTheme   
  }  

  // iterate through that team's players and tally their points to return a total
  // know the winning team.
function teamScore(team){
let score = 0
for (const player in team){
score += (team[player].points)
}
return score
}  
function winningTeam(){
  let homeTeamPoints = teamScore(homePlayers)  
  let awayTeamPoints = teamScore(awayPlayers)  
  let winningTeam;  
  if (homeTeamPoints > awayTeamPoints) {  
  winningTeam = game.home.teamName  
  }
  
  else {  
  winningTeam = game.away.teamName  
  }  
  return winningTeam  
  }