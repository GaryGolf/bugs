import Grid from './grid';
import Vector from './vector';

/*
*	public class World
*
*
*/

export default class World {
	public grid: Grid;
	constructor(public map: string[] , public legend: Object){
		this.grid = new Grid(map[0].length, map.length);
		map.forEach((line, y) => {
			for(let x=0, ll= line.length; x < ll; x++) 
				this.grid.set(new Vector(x,y), this.charFromElement(line[x]));
		});
	}
	public charFromElement(element: string): string {

		return element ? element : " "; // element.originalChar

	}
	public toString(): string {
		let output: string = "";
		for( let y = 0; y < this.grid.height; y++) {
			for(let x = 0; x < this.grid.width; x++) {
				output += this.charFromElement(this.grid.get(new Vector(x, y)));
			}

			output += "\n";
		}

		return output;
	}
}