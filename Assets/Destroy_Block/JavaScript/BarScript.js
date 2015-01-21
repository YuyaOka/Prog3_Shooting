#pragma strict

function Update () {

	if(Input.GetKey(KeyCode.A))
	{
		transform.Translate(transform.forward * 0.2 ) ;
	}
	if(Input.GetKey(KeyCode.D))
	{
		transform.Translate(transform.forward * -0.2 ) ;
	}

	/* 移動制限 */
	if(transform.position.z <= -14.0 || transform.position.z >= 14.0)
	{
		var zPos : float ;
		zPos = Mathf.Clamp(transform.position.z , -14.0 , 14.0) ;
		transform.position = Vector3(1.5 , 0 , zPos) ;
	}

}
