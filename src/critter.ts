import Vector from './vector';
import Grid from './grid';
import World from './world';

/*
*		BouncingCritter
*
*		can walk 100 turns
*/

export default class Critter {

	public energy: number;
	public baige = '@';
	
	constructor(public world: World, public place: Vector) { 

		this.energy = 10;
		this.world.grid.set(this.place, "@");
		
	}
	public act(): void {

		// check energy
		;
		if (!this.healthy()) return;

		// look around for good place
		const v = this.getDirection();
		const newplace = this.place.plus(v);
		// move 
		this.move(newplace);
	}
	private move(newplace: Vector): void {
		this.world.grid.set(this.place, " ");
		this.world.grid.set(newplace, this.baige);
		this.place = newplace;
		return;
	}
	private healthy(): boolean {

		if(this.energy <= 1)  	{
			this.world.grid.set(this.place,"T"); // die
			this.energy = 0;
			return false;
		}

		this.energy --;
		return true;
	}
	private getDirection(): Vector{
		const directions = this.world.grid.freeWays(this.place);
		return this.random(directions);
	}
	private random(array: Vector[]): Vector {
		return array[Math.floor(Math.random()*array.length)];
	}
}
