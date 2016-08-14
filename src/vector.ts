export default class Vector{
 	constructor(public x:number, public y:number){}
 	plus(vector: Vector): Vector{
 		return new Vector(this.x+vector.x, this.y+vector.y);
 	}
 	toString():string {
 		return this.x+":"+this.y;
 	}
}