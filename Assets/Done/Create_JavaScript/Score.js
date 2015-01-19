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
  GUI.Label(Rect(500 , 20 , 100 , 100) , "SCORE : " + Score + "pt", customLabel) ;
}
