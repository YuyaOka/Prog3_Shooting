#pragma strict

function Update()
{
  
}

function OnGUI()
{
  GUI.Label(Rect(Screen.width / 2 - 29 , Screen.height / 2 - 50 , 200 ,50) , "Game Over" ) ;

  if(GUI.Button(Rect(Screen.width / 2 - 100, Screen.height / 2 + 30 , 200, 50) , "Restart") )
  {
    Application.LoadLevel("Main") ;
  }

  if(GUI.Button(Rect(Screen.width / 2 - 100, Screen.height / 2 + 90, 200, 50) , "Quit") )
  {
    Application.Quit() ;
  }
}
