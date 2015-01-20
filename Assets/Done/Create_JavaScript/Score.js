﻿#pragma strict

static var Score : int = 0 ;
var customLabel : GUIStyle ;

function Start () {
  Score = 0 ;
}

function Update () {
  if(Time.frameCount % 60 == 0)
  {
    Score += 5 ;
  }
}

function OnGUI () {
  GUI.Label(Rect(610 , 20 , 100 , 100) , "SCORE : " + Score + "pt", customLabel) ;
}
