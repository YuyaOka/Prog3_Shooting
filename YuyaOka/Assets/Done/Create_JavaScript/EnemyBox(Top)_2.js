#pragma strict

var explosion : Transform ;

function Update () {

  transform.position.z -= 0.1 ;
  transform.Rotate(1 , 1 , 1) ;

  if(transform.position.z < -14.5)
  {
    Destroy(gameObject) ;
  }
}

function OnCollisionEnter() {
  Instantiate(explosion , transform.position , transform.rotation) ;
}
