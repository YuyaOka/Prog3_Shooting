#pragma strict

var customLabel : GUIStyle ;

function OnGUI () {
  GUI.Label(Rect(Screen.width / 2 - 100 , Screen.height / 2 - 200 , 200 , 50) , "G a m e O v e r" , customLabel) ;
}
