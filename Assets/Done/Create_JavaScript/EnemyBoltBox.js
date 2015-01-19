#pragma strict

var Bolt : Transform ;
var SE : AudioClip ;

function Update ()
{
  if(Time.frameCount % 80 == 0)
  {
    Instantiate(Bolt , transform.position , transform.rotation) ;
    AudioSource.PlayClipAtPoint(SE , transform.position) ;
  }
}
