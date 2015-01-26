#pragma strict

var Map : AudioClip ;

function map () {
  Application.LoadLevel("Main") ;
}

function survival () {
  Application.LoadLevel("Survival") ;
}

function Start () {
  Score.Score = 0 ;
  Counter.Count = 0 ;
}

function Update () {
  /* キーボードからの入力 */
  if(Input.GetKey("m"))
  {
    AudioSource.PlayClipAtPoint(Map , transform.position) ;
    Invoke("map" , 1) ;
  }

  if(Input.GetKey("s"))
  {
    AudioSource.PlayClipAtPoint(Map , transform.position) ;
    Invoke("survival" , 1) ;
  }

  if(Input.GetKey("t"))
  {
    Application.LoadLevel("Introduce") ;
  }

  if(Input.GetKey("c"))
  {
    Application.LoadLevel("Credit") ;
  }

  if(Input.GetKey("q"))
  {
    Application.Quit() ;
  }

  /* ゲームパッドからの入力 */
  if(Input.GetKey("joystick button 9"))
  {
    AudioSource.PlayClipAtPoint(Map , transform.position) ;
    Invoke("map" , 1) ;
  }

  if(Input.GetKey("joystick button 7 && joystick button 9"))  //RT + START
  {
    AudioSource.PlayClipAtPoint(Map , transform.position) ;
    Invoke("survival" , 1) ;
  }

  // 秘密機能で残しておこう
  if(Input.GetKey("g"))
  {
    Application.LoadLevel("GameOver") ;
  }

  if(Input.GetKey("d"))
  {
    Application.LoadLevel(5) ;
  }
}
