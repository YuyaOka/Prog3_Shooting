#pragma strict

function Update() {
	if(Input.GetKey(KeyCode.R))
	{
		Application.LoadLevel(6) ;
	}

	if(Input.GetKey(KeyCode.B))
	{
		Application.LoadLevel(5) ;
	}

	if(Input.GetKey(KeyCode.Q))
	{
		Application.Quit() ;
	}
}
