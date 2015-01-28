#pragma strict

function Update () {
  if(Input.GetKey("b"))
  {
    Application.LoadLevel(0) ;
  }
  if(Input.GetKey("n"))
  {
    if(Application.loadedLevelName == "Introduce")
    {
      Application.LoadLevel("ObjectIntroduce") ;
    }
    if(Application.loadedLevelName == "Credit")
    {
      Application.LoadLevel("Asset_Links") ;
    }
  }

  if(Input.GetKey("joystick button 8"))
  {
    Application.LoadLevel(0) ;
  }
}
