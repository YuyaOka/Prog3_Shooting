#pragma strict

var Enemy : Transform ;

function Update ()
{
  if(Time.frameCount % 60 == 0)
  {
    Instantiate(Enemy , transform.position , transform.rotation) ;
  }
}
