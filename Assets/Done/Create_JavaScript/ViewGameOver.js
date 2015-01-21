#pragma strict

var customLabel : GUIStyle ;

function OnGUI () {
  GUI.Label(Rect(Screen.width / 2 - 100 , Screen.height / 2 - 130 , 200 , 50) , "GameOver" , customLabel) ;
}
