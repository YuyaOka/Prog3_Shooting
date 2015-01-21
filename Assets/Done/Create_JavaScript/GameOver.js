#pragma strict

var customLabel : GUIStyle ;

function Start() {
  if(Score.Score > HighScore.High)
  {
    HighScore.High = Score.Score ;
  }
}

function OnGUI()
{
  GUI.Label(Rect(Screen.width / 2 - 100 , Screen.height / 2 - 70 , 200 ,50) , "RESULT : " + Score.Score + "pt" , customLabel) ;

  if(GUI.Button(Rect(Screen.width / 2 - 100, Screen.height / 2 , 200, 50) , "Restart(R)") )
  {
    Application.LoadLevel("Main") ;
  }

  if(GUI.Button(Rect(Screen.width / 2 - 100, Screen.height / 2 + 60, 200, 50) , "StartMemu(M)") )
  {
    Application.LoadLevel("StartMemu") ;
  }

  if(GUI.Button(Rect(Screen.width / 2 - 100, Screen.height / 2 + 120, 200, 50) , "Quit(Q)") )
  {
    Application.Quit() ;
  }
}

function Update() {
  /* キーボードからの入力 */
  if(Input.GetKey("r"))
  {
    Application.LoadLevel("Main") ;
  }

  if(Input.GetKey("m"))
  {
    Application.LoadLevel(0) ;
  }

  if(Input.GetKey("q"))
  {
    Application.Quit() ;
  }

  if(Input.GetKey("joystick button 8"))
  {
    Application.LoadLevel(0) ;
  }

  if(Input.GetKey("joystick button 9"))
  {
    Application.LoadLevel("Main") ;
  }
}
