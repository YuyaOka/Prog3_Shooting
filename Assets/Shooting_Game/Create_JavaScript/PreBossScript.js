#pragma strict

var hp : int ;
var SE : AudioClip ;
var explosion : Transform ;
var move : float ;

function Update () {
  move = Random.Range(1.0 , 3.0) ;

  if(Time.frameCount % 70 == 0)
  {
    /* X軸間での移動 */
    if(move >= 1.0 && move < 1.5)
    {
      transform.position.x -= 8.0 ;
    }
    if(move >= 1.5 && move < 2.0)
    {
      transform.position.x += 8.0 ;
    }
    if(transform.position.x <= -10.16566)
    {
      transform.position.x += 8.0 ;
    }
    if(transform.position.x >= 10.0684)
    {
      transform.position.x -= 8.0 ;
    }
    /* Z軸間での移動 */
    if(move >= 2.0 && move < 2.5)
    {
      transform.position.z -= 8.0 ;
    }
    if(move >= 2.5 && move < 3.0)
    {
      transform.position.z += 8.0 ;
    }
    if(transform.position.z <= -15.10404)
    {
      transform.position.z += 8.0 ;
    }
    if(transform.position.z >= 10.09297)
    {
      transform.position.z -= 8.0 ;
    }
  }

  /* 移動制限 */
  if(transform.position.x <= -10.16566 || transform.position.x >= 10.0684 ||
    transform.position.z <= -15.10404 || transform.position.z >= 10.09297)
  {
    var xPos : float ;
    var zPos : float ;
    xPos = Mathf.Clamp(transform.position.x , -18.16566 , 18.0684) ;
    zPos = Mathf.Clamp(transform.position.z , -15.10404 , 10.09297) ;
    transform.position = Vector3(xPos , 0 , zPos) ;
  }
}

function OnCollisionEnter(col : Collision) {
  hp -= 1 ;

  if(hp == 0)
  {
    Destroy(gameObject) ;
    Instantiate(explosion , transform.position , transform.rotation) ;
    AudioSource.PlayClipAtPoint(SE , transform.position) ;
    Application.LoadLevel(12) ;   //PreBoss_Clear
  }
}
