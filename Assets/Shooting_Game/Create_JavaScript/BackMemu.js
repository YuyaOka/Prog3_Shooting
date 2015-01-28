#pragma strict

function Update () {
  if(Input.GetKey("b"))
  {
    Application.LoadLevel(0) ;
    if(Application.loadedLevelName == "Asset_Links")
    {
      Application.LoadLevel("Credit") ;
    }
    if(Application.loadedLevelName == "Material")
    {
      Application.LoadLevel("Asset_Links") ;
    }
    if(Application.loadedLevelName == "Work_assistance")
    {
      Application.LoadLevel("Material") ;
    }
    if(Application.loadedLevelName == "Unity")
    {
      Application.LoadLevel("Material") ;
    }
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
    if(Application.loadedLevelName == "Asset_Links")
    {
      Application.LoadLevel("Material") ;
    }
    if(Application.loadedLevelName == "Material")
    {
      Application.LoadLevel("Work_assistance") ;
    }
    if(Application.loadedLevelName == "Work_assistance")
    {
      Application.LoadLevel("Unity") ;
    }
    if(Application.loadedLevelName == "Unity")
    {
      Application.LoadLevel(0) ;
    }
  }

  if(Input.GetKey("joystick button 8"))
  {
    Application.LoadLevel(0) ;
  }
}
