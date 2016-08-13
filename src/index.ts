const plan:string[] =[
	'###############',
	'#    #    # o##',
	'#    #        #',
	'#           ###',
	'#  o#        ##',
	'#  ##     #   #',
	'#   ###   #   #',
	'#      #    #o#',
	'###         ###',
	'###############'
];

class Vector{
 	constructor(public x:number, public y:number){}
 	plus(vector: Vector): Vector{
 		return new Vector(this.x+vector.x, this.y+vector.y);
 	}
 	toString():string {
 		return this.x+":"+this.y+"=>";
 	}
};
/*
*	Class Grid
*
*
*
*/

class Grid{
	public space: string[];

	public directions = {
		"n" : new Vector(0,-1),
		"ne" : new Vector(1,-1),
		"e" : new Vector(1, 0),
		"se" : new Vector(1, 1),
		"s" : new Vector(0, 1),
		"sw" : new Vector(-1, 1),
		"w" : new Vector(-1, 0),
		"nw" : new Vector(-1,-1)
	}
	constructor(public width:number, public height:number){
		this.space = new Array(this.width * this.height);
	}
	public isInside(vector:Vector): boolean{

		return vector.x >= 0 && vector.x <= this.width
		&& vector.y >= 0 && vector.y <= this.height;
	}
	public get(vector: Vector): string{ 

		return this.space[vector.x+vector.y*this.width];
	}

	public set(vector: Vector, value: string): void{

		this.space[vector.x + vector.y * this.width] = value;
	}
}
/*
*		class world
*
*		create world from map
*
*/
class World {
	public grid: Grid;
	constructor(public map: string[] , public legend: string){
		this.grid = new Grid(map[0].length, map.length);
		map.forEach((line, y) => {
			for(let x=0, ll= line.length; x < ll; x++) 
				this.grid.set(new Vector(x,y), this.charFromeElement(line[x]));
		});
	}
	public charFromElement(element: string): string {

		return element ? element : " "; // element.originalChar

	}
	public toString(): string {
		let output: string = "";
		for( let y = 0; y < this.grid.height; y++) {
			for(let x = 0; x < this.grid.width; x++) {
				output += charFromElement(this.grid.get(new Vector(x, y)));
			}

			output += "\n";
		}

		return output;
	}
}

function test()
{
	const v1 = new Vector(2,2);
	const v2 = new Vector(2,1);
	let v3:Vector;
	v3 = v1.plus(v2);
	console.log(v3.toString());

	const grid = new Grid(5,5);
	console.log(grid.get(new Vector(1,1)));
	grid.set(new Vector(1,1),"X");
	console.log(grid.get(new Vector(1,1)));
}

test();