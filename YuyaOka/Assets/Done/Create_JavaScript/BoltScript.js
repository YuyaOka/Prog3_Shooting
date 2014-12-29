#pragma strict

function Update () {
  transform.position.z += 0.3 ;

  if(transform.position.z > 14.5 )
  {
    Destroy(gameObject) ;
  }
}

/*var Counter : int = 0 ;

function OnGUI() {
Counter++ ;
GUI.Label(Rect(-16.4 , -0.01 , 9.21 ,50) , "COUNT:" + Counter) ;
}
*/

function OnCollisionEnter() {
  //if(col.gameObject.tag == "Enemy" || col.gameObject.tag == "Stone") {
    //  Destroy(col.gameObject) ;
      Destroy(gameObject) ;
  //    OnGUI() ;
  //}
}
