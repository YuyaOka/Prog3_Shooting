#pragma strict

var Enemy : Transform ;

function Update ()
{
  if(Time.frameCount % 120 == 0)
  {
    Instantiate(Enemy , Vector3(-19.4 , 0 ,Random.Range(11.7 , -13.3)) , transform.rotation) ;
  }
}
