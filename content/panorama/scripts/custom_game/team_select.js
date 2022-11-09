Game.AutoAssignPlayersToTeams();

// Lock the team selection so that no more team changes can be made
Game.SetTeamSelectionLocked( true );

// Disable the auto start count down
Game.SetAutoLaunchEnabled( false );

// Set the remaining time before the game starts
Game.SetRemainingSetupTime( 0 ); 