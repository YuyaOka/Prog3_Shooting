#pragma strict

var explosion : Transform ;

function Start () {

}

function Update () {

  transform.position.z -= 0.15 ;

  if(transform.position.z < -14.5)
  {
    Destroy(gameObject) ;
  }

}

var SE : AudioClip ;

function OnCollisionEnter () {
  Instantiate(explosion , transform.position , transform.rotation) ;
  AudioSource.PlayClipAtPoint(SE , transform.position) ;
  Score.Score = Score.Score + 20 ;
}
