#pragma strict

var SE : AudioClip ;

function hoge () {
  Application.LoadLevel(15) ;   //LastBoss
}

function Start () {
  AudioSource.PlayClipAtPoint(SE , transform.position) ;
  Invoke("hoge" , 9.0) ;
}
