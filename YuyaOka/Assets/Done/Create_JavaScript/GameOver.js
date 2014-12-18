#pragma strict

function OnGUI()
{
  if(GUI.Button(Rect(320,200,100,35) , "Restart") )
  {
    Application.LoadLevel("Main") ;
  }

  if(GUI.Button(Rect(320,250,100,35) , "Quit") )
  {
    Application.Quit() ;
  }

}
