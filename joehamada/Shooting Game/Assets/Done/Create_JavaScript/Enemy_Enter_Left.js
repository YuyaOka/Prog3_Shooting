#pragma strict

function Update () {

  transform.position.x += 0.1 ;
  transform.Rotate(1 , 1 , 1) ;

  if(transform.position.x > 11)
  {
    Destroy(gameObject) ;
  }


}
