#pragma strict

var explosion : Transform ;

function Update () {

  transform.position.x -= 0.1 ;
  transform.Rotate(1 , 1 , 1) ;

  if(transform.position.x < -19.4)
  {
    Destroy(gameObject) ;
  }
}

var SE : AudioClip ;

function OnCollisionEnter (col:Collision) {
  if((col.gameObject.CompareTag('Bolt'))
  {
    Instantiate(explosion , transform.position , transform.rotation) ;
    Destroy(gameObject) ;
    AudioSource.PlayClipAtPoint(SE , transform.position) ;
  }
}
