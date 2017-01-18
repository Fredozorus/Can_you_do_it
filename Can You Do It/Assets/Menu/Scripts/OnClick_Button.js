#pragma strict

function START_TUTO()
{
    Application.LoadLevel("Game/Tuto/Level_001");
}

function START_GAME()
{
    Application.LoadLevel("Game/Level_001");
}

function LEAVE_GAME()
{
    Application.Quit();
}