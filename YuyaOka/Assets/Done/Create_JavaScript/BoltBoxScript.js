#pragma strict

  var Bolt : Transform ;

function Update ()
{

  if(Input.GetKey("joystick button 0") || Input.GetKey("/") || Input.GetKey("z") )
  {
    if(Time.frameCount % 10 == 0)
    {
      Instantiate(Bolt , transform.position , transform.rotation) ;
    }
  }
}
