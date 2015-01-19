#pragma strict

var customLabel : GUIStyle ;

function OnGUI()
{
  GUI.Label(Rect(Screen.width / 2 - 100 , Screen.height / 2 - 35 , 200 ,50) , "RESULT : " + Score.Score + "pt" , customLabel) ;

  if(GUI.Button(Rect(Screen.width / 2 - 100, Screen.height / 2 + 30 , 200, 50) , "Restart(R)") )
  {
    Application.LoadLevel("Main") ;
    Score.Score = 0 ;
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
