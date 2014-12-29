#pragma strict

function Update () {

  transform.position.x += 0.1 ;
  transform.Rotate(1 , 1 , 1) ;

  if(transform.position.x > 19.4)
  {
    Destroy(gameObject) ;
  }
}

function OnCollisionEnter (col : Collision) {
  if(col.gameObject.tag == "Bolt")
  {
    Destroy(gameObject) ;
  }
  if(col.gameObject.tag == "Player")
  {
    Application.LoadLevel("GameOver") ;
  }
}
