#pragma strict

var customLabel : GUIStyle ;
var highscoreSE : AudioClip ;

function Start() {
  if(Score.Score > HighScore.High)
  {
    HighScore.High = Score.Score ;
    AudioSource.PlayClipAtPoint(highscoreSE , transform.position) ;
  }
}

function OnGUI()
{
  GUI.Label(Rect(Screen.width / 2 - 250 , Screen.height / 2 , 200 , 50) , "RESULT\nSCORE : " + Score.Score + "pt  DESTROY : " + Survival_Counter.Count , customLabel) ;
}

var restart : AudioClip ;

function Update() {
  /* キーボードからの入力 */
  if(Input.GetKey("r"))
  {
    AudioSource.PlayClipAtPoint(restart , transform.position) ;
    Invoke("survival" , 3.5) ;
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

function survival () {
  Application.LoadLevel(17) ;
}
