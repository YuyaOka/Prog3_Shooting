#pragma strict

static var Count : int = 0 ;
var customLabel : GUIStyle ;

function Start () {
  Count = 0 ;
}

function OnGUI () {
  GUI.Label(Rect(Screen.width / 2 + 300 , Screen.height / 2 - 300 , 100 , 100) , "COUNT : " + Count , customLabel) ;
}
