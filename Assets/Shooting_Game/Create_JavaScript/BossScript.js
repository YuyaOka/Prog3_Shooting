#pragma strict

var hp : int = 50 ;
var SE : AudioClip ;
var explosion : Transform ;

function OnCollisionEnter(col:Collision)
{
    hp = hp - 1 ;
    if(hp == 0)
    {
        Destroy(gameObject) ;
        Instantiate(explosion , transform.position , transform.rotation) ;
        AudioSource.PlayClipAtPoint(SE , transform.position) ;
        Application.LoadLevel("GameClear") ;
    }
}
