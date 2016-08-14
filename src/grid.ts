import Vector from "./vector";

/*
*	Class Grid
*
*	creates space with widt and height
*/

export default class Grid{
	public space: string[];

	
	constructor(public width:number, public height:number){
		this.space = new Array(this.width * this.height);
	}
	/*  checks Vector inside space or not */
	public isInside(vector:Vector): boolean{

		return vector.x >= 0 && vector.x <= this.width
		&& vector.y >= 0 && vector.y <= this.height;
	}
	/* returns element from space that vector points*/
	public get(vector: Vector): string{ 

		return this.space[vector.x+vector.y*this.width];
	}
	/* sets elements value by Vector in space*/
	public set(vector: Vector, value: string): void{

		this.space[vector.x + vector.y * this.width] = value;
	}
}