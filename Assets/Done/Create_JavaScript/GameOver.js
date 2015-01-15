#pragma strict

function OnGUI()
{
  if(GUI.Button(Rect(Screen.width / 2 - 100, Screen.height / 2 + 30 , 200, 50) , "Restart(R)") )
  {
    Application.LoadLevel("Main") ;
  }

  if(GUI.Button(Rect(Screen.width / 2 - 100, Screen.height / 2 + 90, 200, 50) , "Quit(Q)") )
  {
    Application.Quit() ;
  }

  /* キーボードからの入力 */
  if(Input.GetKey("r"))
  {
    Application.LoadLevel("Main") ;
  }

  if(Input.GetKey("q"))
  {
    Application.Quit() ;
  }
}
