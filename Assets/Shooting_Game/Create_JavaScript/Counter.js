#pragma strict

static var Count : int = 0 ;
var customLabel : GUIStyle ;

function Update () {
  /* 中ボス */
  if(Counter.Count == 20)
  {
    if(Application.loadedLevelName != "PreBoss")
    {
      Application.LoadLevel("PreBossEnter") ;
    }
  }

  /* ラスボス */
  if(Counter.Count == 50)
  {
    if(Application.loadedLevelName != "LastBoss")
    {
      Application.LoadLevel("LastBossEnter") ;
    }
  }
}

function OnGUI () {
  GUI.Label(Rect(Screen.width / 2 + 300 , Screen.height / 2 - 300 , 100 , 100) , "COUNT : " + Count , customLabel) ;
}
