#pragma strict


function Start () {
  Counter.Count += 1 ;
}

function Update () {
  /* キーボードからの入力 */
  if(Input.GetKey("s"))
  {
    Application.LoadLevel("Main") ;  //Main
  }

  /* ゲームパッドからの入力 */
  if(Input.GetKey("joystick button 9"))
  {
    Application.LoadLevel("Main") ;
  }
}
