#pragma strict

function Update () {
  transform.position.z -= 0.15 ;
  transform.Rotate(1 , 1 , 1) ;

  if(transform.position.z > 19.4)
  {
    Destroy(gameObject) ;
  }
}
