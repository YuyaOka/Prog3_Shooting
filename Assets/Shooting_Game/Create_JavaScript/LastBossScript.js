#pragma strict

var hp : int = 50 ;
var SE : AudioClip ;
var explosion : Transform ;
var move : float ;
var customLabel : GUIStyle ;
var HASAMA2 : Transform ;

function Update () {
  move = Random.Range(1.0 , 3.0) ;

  if(Time.frameCount % 60 == 0)
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

    /* Z軸間での移動 */
    if(move >= 2.0 && move < 2.5)
    {
      transform.position.z -= 8.0 ;
    }
    if(move >= 2.5 && move < 3.0)
    {
      transform.position.z += 8.0 ;
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
  Instantiate(explosion , transform.position , transform.rotation) ;

  if(hp == 0)
  {
    Destroy(gameObject) ;
    Instantiate(explosion , transform.position , transform.rotation) ;
    AudioSource.PlayClipAtPoint(SE , transform.position) ;
    Instantiate(HASAMA2 , Vector3(0 , 0 , 7.27) , transform.rotation) ;
    Counter.Count += 1 ;
  }
}

function OnGUI () {
  GUI.Label(Rect(Screen.width / 2 - 300 , Screen.height / 2 - 320, 200 , 50) , "HP : " + hp , customLabel) ;
}
