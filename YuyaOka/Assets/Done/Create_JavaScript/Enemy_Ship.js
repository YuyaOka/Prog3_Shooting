#pragma strict

var Enemy : Transform ;

function Start()
{
  Instantiate(Enemy , Vector3(35.5 , 0 ,13) , transform.rotation) ;
}

function Update ()
{
  if(Time.frameCount % 100 == 0)
  {
    Instantiate(Enemy , Vector3(Random.Range(19.5 , -19.5) , 0 ,13) , transform.rotation) ;
  }

}
