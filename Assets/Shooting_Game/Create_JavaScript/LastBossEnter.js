#pragma strict

function hoge () {
  Application.LoadLevel(15) ;   //LastBoss
}

function Start () {
  Invoke("hoge" , 2.0) ;
}
