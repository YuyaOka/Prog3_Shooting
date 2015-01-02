#pragma strict

var explosion : Transform ;

function Start () {
  transform.rotation.y = -1.0 ;
}

function Update () {

  transform.position.z -= 0.15 ;

  if(transform.position.z < -14.5)
  {
    Destroy(gameObject) ;
  }
}

function OnCollisionEnter () {
  Instantiate(explosion , transform.position , transform.rotation) ;
}
