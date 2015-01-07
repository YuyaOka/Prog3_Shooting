#pragma strict

var Bolt : Transform ;
var SE : AudioClip ;

function Update ()
{
  if(Input.GetKey("joystick button 0") || Input.GetKey("/") || Input.GetKey("z") )
  {
    if(Time.frameCount % 10 == 0)
    {
      Instantiate(Bolt , transform.position , transform.rotation) ;
      AudioSource.PlayClipAtPoint(SE , transform.position) ;
    }
  }
}
