#pragma strict

  var Bolt : Transform ;

function Update ()
{
  var x : float = Input.GetAxis("Horizontal") ;
  var y : float = Input.GetAxis("Vertical") ;

  transform.Translate(x * 0.17 , 0 , 0) ;
  transform.Translate(0 , 0 , y * 0.17) ;

}
