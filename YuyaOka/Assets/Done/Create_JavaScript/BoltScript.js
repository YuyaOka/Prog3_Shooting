#pragma strict

function Update () {

  if(transform.position.z > 10 )
  {
    Destroy(gameObject) ;
  }
}


function OnCollisionEnter(col : Collision) {
  if(col.gameObject.tag == "Enemy" || col.gameObject.tag == "Stone") {
      Destroy(col.gameObject) ;
      Destroy(gameObject) ;
  }
}
