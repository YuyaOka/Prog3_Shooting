#pragma strict

function Update () {
  if(Input.GetKey("b"))
  {
    Application.LoadLevel(0) ;
  }
  if(Input.GetKey("h"))
  {
    Application.LoadLevel("Introduce") ;
  }
}
