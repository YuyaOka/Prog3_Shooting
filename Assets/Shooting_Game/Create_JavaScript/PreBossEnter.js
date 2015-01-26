#pragma strict

function hoge () {
  Application.LoadLevel(11) ;   //PreBoss
}

function Start () {
  Invoke("hoge" , 2.0) ;
}
