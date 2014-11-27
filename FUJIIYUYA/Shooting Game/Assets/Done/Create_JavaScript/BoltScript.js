#pragma strict

function Update () {

  if(transform.position.z > 10 )
  {
    Destroy(gameObject) ;
  }


}
