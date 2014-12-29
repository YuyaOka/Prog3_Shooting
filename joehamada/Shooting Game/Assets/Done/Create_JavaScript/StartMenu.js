#pragma strict

function OnGUI()
{
  if(GUI.Button(Rect(Screen.width / 2 - 100, Screen.height / 2 + 30 , 200, 50) , "Start Game") )
  {
    Application.LoadLevel("Main") ;
  }

  if(GUI.Button(Rect(Screen.width / 2 - 100, Screen.height / 2 + 90, 200, 50) , "Quit") )
  {
    Application.Quit() ;
  }
}
