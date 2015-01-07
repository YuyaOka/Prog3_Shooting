#pragma strict

var explosion : Transform ;
//var rl_jd : int ;

function Update () {

  transform.position.z -= 0.15 ;

/*    Z軸のある程度の場所に進んだら進む方向を変える
  if(transform.position.z == Random.Range(3.3 , -8.34))
  {
    rl_jd = ( Random.Range(2 , 10) % 2 );
    if(rl_jd == 1)
    {
      transform.Translate(0.15 , 0 , -0.15) ;
    }
    if(rl_jd == 2)
    {
      transform.Translate(-0.15 , 0 , -0.15) ;
    }
  }
*/

if(transform.position.z < -14.5)
  {
    Destroy(gameObject) ;
  }

}

var SE : AudioClip ;

function OnCollisionEnter () {
  Instantiate(explosion , transform.position , transform.rotation) ;

  AudioSource.PlayClipAtPoint(SE , transform.position) ;
}
