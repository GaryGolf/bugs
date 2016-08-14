export default class Vector{
 	constructor(public x:number, public y:number){}
 	public plus(vector: Vector): Vector{
 		return new Vector(this.x+vector.x, this.y+vector.y);
 	}
 	public toString():string {
 		return this.x+":"+this.y;
 	}
}