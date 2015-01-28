#pragma strict

var customLabel : GUIStyle ;
var restart : AudioClip ;

function Start() {
  if(Score.Score > HighScore.High)
  {
    HighScore.High = Score.Score ;
  }
}

function OnGUI()
{
  GUI.Label(Rect(Screen.width / 2 - 100 , Screen.height / 2 - 70 , 200 , 50) , "RESULT\nDESTROY : " + Counter.Count , customLabel) ;
}

function Update() {
  /* キーボードからの入力 */
  if(Input.GetKey("r"))
  {
    AudioSource.PlayClipAtPoint(restart , transform.position) ;
    Invoke("game" , 3.5) ;
    Counter.Count = 0 ;
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
    AudioSource.PlayClipAtPoint(restart , transform.position) ;
    Invoke("game" , 3.5) ;
    Counter.Count = 0 ;
  }
}

function game () {
  Application.LoadLevel("Main") ;
}
