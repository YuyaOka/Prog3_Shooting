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
  GUI.Label(Rect(Screen.width / 2 - 100 , Screen.height / 2 - 70 , 200 , 50) , "RESULT\nSCORE : " + Score.Score  + "pt" + "DESTROY : " + Counter.Count , customLabel) ;
}

function Update() {
  /* キーボードからの入力 */
  if(Input.GetKey("r"))
  {
    Application.LoadLevel("Main") ;
  }

  if(Input.GetKey("b"))
  {
    Application.LoadLevel(0) ;
  }

  if(Input.GetKey("q"))
  {
    Application.Quit() ;
  }

  /* ゲームパッドからの入力 */
  if(Input.GetKey("joystick button 8"))
  {
    Application.LoadLevel(0) ;
  }

  if(Input.GetKey("joystick button 9"))
  {
    Application.LoadLevel("Main") ;
  }
}
