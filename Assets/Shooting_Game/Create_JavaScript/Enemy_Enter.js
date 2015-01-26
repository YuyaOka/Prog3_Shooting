#pragma strict

var explosion : Transform ;

function Update () {
  transform.position.z -= 0.15 ;

  if(transform.position.z < -14.5)
  {
    Destroy(gameObject) ;
  }
}

var SE : AudioClip ;

function OnCollisionEnter (col : Collision) {
  if(col.gameObject.CompareTag('Bolt'))
  {
    Destroy(gameObject) ;
    Instantiate(explosion , transform.position , transform.rotation) ;
    AudioSource.PlayClipAtPoint(SE , transform.position) ;
    Score.Score = Score.Score + 20 ;
    Counter.Count = Counter.Count + 1 ;
  }
}
