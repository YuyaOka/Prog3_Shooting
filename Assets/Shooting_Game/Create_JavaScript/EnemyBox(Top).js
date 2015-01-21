#pragma strict

var Enemy : Transform ;

function Update ()
{
  if(Time.frameCount % 80 == 0)
  {
    Instantiate(Enemy , Vector3(Random.Range(18.0684 , -18.16566) , 0 ,13) , transform.rotation) ;
  }
}
