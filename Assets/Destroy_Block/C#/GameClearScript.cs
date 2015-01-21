using UnityEngine;
using System.Collections;

public class GameClearScript : MonoBehaviour {

	static int Blockcnt ;

	// Use this for initialization
	void Start () {

	Blockcnt = GameObject.FindGameObjectsWithTag("Block").Length ;

	}

	public void setDamage() {
		Destroy(gameObject);

		Blockcnt--;
		if (Blockcnt == 0) {
			Application.LoadLevel(8);
		}
	}

}
