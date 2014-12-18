#pragma strict

function OnGUI()
{
  if(GUI.Button(Rect(320,120,100,35) , "Game Start") )
  {
    Application.LoadLevel("Main") ;
  }
  if(GUI.Button(Rect(320,170,100,35) , "Quit") )
  {
    Application.Quit() ;
  }
}
