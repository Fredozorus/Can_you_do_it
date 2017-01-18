#pragma strict

function RETURN_MAINMENU()
{
    Application.LoadLevel("Menu/MainMenu");
}

function LEAVE_GAME()
{
    Application.Quit();
}