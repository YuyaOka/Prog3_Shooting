#pragma strict

var customLabel : GUIStyle ;
var SE : AudioClip ;

function Start() {
  if(Score.Score > HighScore.High)
  {
    HighScore.High = Score.Score ;
    AudioSource.PlayClipAtPoint(SE , transform.position) ;
  }
}

function OnGUI()
{
  GUI.Label(Rect(Screen.width / 2 - 250 , Screen.height / 2 , 200 , 50) , "RESULT\nDESTROY : " + Counter.Count , customLabel) ;
}

function Update() {
  /* キーボードからの入力 */
  if(Input.GetKey("r"))
  {
    Application.LoadLevel(17) ;
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
    Application.LoadLevel(17) ;
  }
}
