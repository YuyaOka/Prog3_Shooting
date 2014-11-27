#pragma strict

  var Bolt : Transform ;

function Update ()
{

  if(Input.GetKey("joystick button 0") || Input.GetKey("/"))
  {
    Instantiate(Bolt , transform.position , transform.rotation) ;
  }

}
