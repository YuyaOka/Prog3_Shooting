#pragma strict

var Enemy : Transform ;

function Update ()
{
  if(Time.frameCount % 120 == 0)
  {
    Instantiate(Enemy , Vector3(11 , 0 ,Random.Range(11.7 , -13.3)) , transform.rotation) ;
  }
}
