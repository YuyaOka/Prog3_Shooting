#pragma strict

var Map : AudioClip ;

function Start () {
  Score.Score = 0 ;
  Counter.Count = 0 ;
  Invoke("startSE" , 1.0) ;
}

function startSE () {
  AudioSource.PlayClipAtPoint(Map , transform.position) ;
}

function Update () {
  /* キーボードからの入力 */
  if(Input.GetKey("m"))
  {
    Application.LoadLevel("Main") ;
  }

  if(Input.GetKey("s"))
  {
    Application.LoadLevel("Survival") ;
  }

  if(Input.GetKey("t"))
  {
    Application.LoadLevel("Introduce") ;
  }

  if(Input.GetKey("c"))
  {
    Application.LoadLevel("Credit") ;
  }

  // 秘密機能で残しておこう
  if(Input.GetKey("g"))
  {
    Application.LoadLevel("GameOver") ;
  }

  if(Input.GetKey("d"))
  {
    Application.LoadLevel("TopMemu") ;
  }

  if(Input.GetKey("q"))
  {
    Application.Quit() ;
  }

  /* ゲームパッドからの入力 */
  if(Input.GetKey("joystick button 9"))   //Start
  {
    Application.LoadLevel("Main") ;
  }

  if(Input.GetKey("joystick button 8"))  // Back
  {
    Application.LoadLevel("Survival") ;
  }

}
