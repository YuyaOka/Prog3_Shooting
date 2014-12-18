#pragma strict

function Start ()
{
	Destroy(gameObject,3);
	Destroy(gameObject.Find("vehicle_enemyShip"),0.3);
}
