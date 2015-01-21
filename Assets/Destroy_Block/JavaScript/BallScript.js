#pragma strict

var FirstForce:Vector3 = Vector3(300, 300, 0);

function Start () {
	rigidbody.AddForce(FirstForce);
}

function Update () {
	// ゲームオーバー判定
	if(transform.position.x < 1.48)
	{
		Application.LoadLevel(7) ;
	}
}

function OnCollisionEnter(col : Collision)
{

	var count : int = 0 ;

	// 削除判定
	if (col.gameObject.tag == "Block")
	{
		col.gameObject.SendMessage("setDamage");
	}

	rigidbody.velocity = rigidbody.velocity.normalized * 10;

	if (Mathf.Abs(rigidbody.velocity.y) < 3) {
		rigidbody.velocity.y = rigidbody.velocity.y * 3;
	}
	if (Mathf.Abs(rigidbody.velocity.x) < 3) {
		rigidbody.velocity.x = rigidbody.velocity.x * 3;
	}
}
