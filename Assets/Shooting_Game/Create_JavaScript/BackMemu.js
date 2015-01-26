#pragma strict

function Update () {
  if(Input.GetKey("b"))
  {
    Application.LoadLevel(0) ;
  }

  if(Input.GetKey("joystick button 8"))
  {
    Application.LoadLevel(0) ;
  }
}
