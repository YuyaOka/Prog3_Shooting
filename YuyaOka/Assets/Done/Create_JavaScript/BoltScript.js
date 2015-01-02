#pragma strict

function Update () {
  transform.position.z += 0.3 ;

  if(transform.position.z > 14.5 )
  {
    Destroy(gameObject) ;
  }
}

function OnCollisionEnter(col : Collision) {
  if(col.gameObject.CompareTag('Enemy') || col.gameObject.tag == "Stone")
  {
    Destroy(col.gameObject) ;
    Destroy(gameObject) ;
  }
}
