#pragma strict

function Update () {

  transform.position.z -= 0.15 ;

  if(transform.position.z < -14.5)
  {
    Destroy(gameObject) ;
  }
}

var cnt : int ;

function OnCollisionEnter () {
  cnt = cnt + 1 ;
  if(cnt == 10)
  {
    Destroy(gameObject) ;
  }
}
