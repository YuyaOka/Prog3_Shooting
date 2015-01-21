#pragma strict

function Update() {
	if(Input.GetKey(KeyCode.S))
	{
		Application.LoadLevel(6) ;
	}

	if(Input.GetKey(KeyCode.Q))
	{
		Application.Quit() ;
	}

	if(Input.GetKey(KeyCode.I))
	{
		Application.LoadLevel(10) ;
	}

	if(Input.GetKey(KeyCode.B))
	{
		Application.LoadLevel(0) ;
	}
}

/*function OnGUI()
{

	if ( GUI.Button( Rect(370, 380, 200, 40), "GameStart" ) )
	{
		Application.LoadLevel(1) ;
	}

	if( GUI.Button( Rect(370, 430, 200 ,40) , "Quit Game" ) )
	{
		Application.Quit() ;
	}
}*/
