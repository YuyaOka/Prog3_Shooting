#pragma strict

static var High : int ;
var customLabel : GUIStyle ;

function Awake () {
  High = PlayerPrefs.GetInt("High") ;
}

function OnGUI()
{
  GUI.Label(Rect(Screen.width / 2 + 200 , Screen.height / 2 - 350 , 100 , 100) , "HIGH SCORE : " + High + "pt", customLabel) ;
  PlayerPrefs.SetInt("High" , High) ;
}
