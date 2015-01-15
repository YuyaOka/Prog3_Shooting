#pragma strict

var Enemy : Transform ;

function Update ()
{
  if(Time.frameCount % 120 == 0)
  {
    Instantiate(Enemy , Vector3(Random.Range(19.4 , -19.4) , 0 ,13) , transform.rotation) ;
  }
}
