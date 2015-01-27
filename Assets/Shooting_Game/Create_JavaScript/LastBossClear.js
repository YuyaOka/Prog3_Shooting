#pragma strict

var clear : AudioClip ;

function Start () {
  AudioSource.PlayClipAtPoint(clear , transform.position) ;
}

function Update () {

  /* キーボード入力 */
  if(Input.GetKey("b"))
  {
    Application.LoadLevel(0) ;  //StartMemu
  }
  if(Input.GetKey("q"))
  {
    Application.Quit() ;
  }

  /* ゲームパッド入力 */
  if(Input.GetKey("joystick button 8"))
  {
    Application.LoadLevel(0) ;
  }
}
