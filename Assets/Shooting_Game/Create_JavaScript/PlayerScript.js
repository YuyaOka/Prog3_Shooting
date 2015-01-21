#pragma strict

var explosion : Transform ;

function Update ()
{
  var x : float = Input.GetAxis("Horizontal") ;
  var y : float = Input.GetAxis("Vertical") ;

  transform.Translate(x * 0.15 , 0 , 0) ;
  transform.Translate(0 , 0 , y * 0.15) ;

  /* 移動制限 */
  if (transform.position.x <= -10.16566 || transform.position.x >= 10.0684 ||
    transform.position.z <= -15.10404 || transform.position.z >= 10.09297)
  {
    var xPos : float ;
    var zPos : float ;
    xPos = Mathf.Clamp(transform.position.x , -18.16566 , 18.0684) ;
    zPos = Mathf.Clamp(transform.position.z , -15.10404 , 10.09297) ;
    transform.position = Vector3(xPos , 0 , zPos) ;
  }
}

var SE : AudioClip ;

function OnCollisionEnter() {
    Destroy(gameObject) ;
    AudioSource.PlayClipAtPoint(SE , transform.position) ;
    Instantiate(explosion , transform.position , transform.rotation) ;

    Application.LoadLevel("GameOver") ;
}
