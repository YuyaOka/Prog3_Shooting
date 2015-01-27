#pragma strict

var Health : Transform ;

function Update ()
{
  if(Time.frameCount % Random.Range(1000 , 2000) == 0)
  {
    Instantiate(Health , Vector3(Random.Range(18.0684 , -18.16566) , 0 ,13) , transform.rotation) ;
  }
}
