#pragma strict

function Update () {
  /* キーボードからの入力 */
  if(Input.GetKey("s"))
  {
    Application.LoadLevel("Main") ;
  }

  if(Input.GetKey("q"))
  {
    Application.Quit() ;
  }

  if(Input.GetKey("joystick button 9"))
  {
    Application.LoadLevel("Main") ;
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
}
