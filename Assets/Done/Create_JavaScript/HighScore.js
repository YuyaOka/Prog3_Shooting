#pragma strict

static var High : int ;
var customLabel : GUIStyle ;

function OnGUI()
{
  GUI.Label(Rect(610 , 20 , 100 , 100) , "HIGH SCORE : " + High + "pt", customLabel) ;
}
