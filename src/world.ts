import Grid from './grid';
import Vector from './vector';

/*
*	public class World
*
*
*/

export default class World {
	public grid: Grid;

	constructor(public map: string[]){
		this.grid = new Grid(map[0].length, map.length);

		map.forEach((line, y) => {
			for(let x=0, ll= line.length; x < ll; x++) 
				this.grid.set(new Vector(x,y), line[x]);
		});
	}
	
	public toString(): string {
		let output: string = "";
		for( let y = 0; y < this.grid.height; y++) {
			for(let x = 0; x < this.grid.width; x++) {
				output += this.grid.get(new Vector(x, y));
			}

			output += "\n";
		}

		return output;
	}
	public move(from: Vector, to: Vector): void{

		this.grid.set(to,this.grid.get(from));
		this.grid.set(from," ");
	}

}