#pragma strict

var explosion : Transform ;

function Update ()
{
  var x : float = Input.GetAxis("Horizontal") ;
  var y : float = Input.GetAxis("Vertical") ;

  transform.Translate(x * 0.1 , 0 , 0) ;
  transform.Translate(0 , 0 , y * 0.1) ;
}

function OnCollisionEnter(col : Collision) {
  if(col.gameObject.tag == "Stone" || col.gameObject.tag == "Enemy")
  {
    //  Destroy(gameObject) ;   // ゲームオーバーなのでいらない
    Application.LoadLevel("GameOver") ;
  }
}
