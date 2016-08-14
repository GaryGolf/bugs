import Vector from './vector';

export default class BouncingCritter {
	public direction: string;

	static directions = {
		"n" : new Vector(0,-1),
		"ne" : new Vector(1,-1),
		"e" : new Vector(1, 0),
		"se" : new Vector(1, 1),
		"s" : new Vector(0, 1),
		"sw" : new Vector(-1, 1),
		"w" : new Vector(-1, 0),
		"nw" : new Vector(-1,-1)
	};
	constructor(public view: string) {  // !!

	}
	private random(array: string[]): string {
		return array[Math.floor(Math.random()*array.length)];
	}
	public getDirection(): void {
		this.direction = this.random(Object.keys(this.directions))
	}
}
