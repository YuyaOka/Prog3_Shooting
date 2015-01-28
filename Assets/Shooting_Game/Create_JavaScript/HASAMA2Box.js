#pragma strict

var kurae : AudioClip ;
var cnt : int = 0 ;
var Enemy : Transform ;

function Update ()
{
  if(Time.frameCount % 60 == 0)
  {
    cnt += 1 ;
    Instantiate(Enemy , transform.position , transform.rotation) ;
    if(cnt % 15 == 0)
    {
        AudioSource.PlayClipAtPoint(kurae , transform.position , transform.rotation) ;
    }
  }
}
