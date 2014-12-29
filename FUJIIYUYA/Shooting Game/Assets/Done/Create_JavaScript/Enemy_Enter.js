#pragma strict

function Update () {

  transform.position.z -= 0.15 ;

  if(transform.position.z < -14.5)
  {
    Destroy(gameObject) ;
  }
}

function OnCollisionEnter(col : Collision) {
  if(col.gameObject.tag == "Bolt")
  {
    Destroy(gameObject) ;
  }
  if(col.gameObject.tag == "Player")
  {
    Application.LoadLevel("GameOver") ;
  }
}
