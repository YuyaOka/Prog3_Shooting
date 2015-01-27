#pragma strict

static var Score : int = 0 ;
var customLabel : GUIStyle ;

function Update () {
  if(Time.frameCount % 60 == 0)
  {
    Score += 5 ;
  }
}

function OnGUI () {
  if(Application.loadedLevelName == "Survival")
  {
    GUI.Label(Rect(Screen.width / 2 + 300 , Screen.height / 2 - 350 , 100 , 100) , "SCORE : " + Score + "pt", customLabel) ;
  }
}
