const plan:string[] =[
	'###############',
	'#    #    # o##',
	'#    #        #',
	'#           ###',
	'#  o##       ##',
	'# ###     #   #',
	'#   ###   #   #',
	'#      #    #o#',
	'###         ###',
	'###############'
];

import Vector from './vector';
import Grid from './grid';
import World from './world';


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

	let world = new World(plan, {"o":"creatute"});
	console.log(world.toString());
	let map = world.grid.neighborhood(new Vector(4,5));
	let w2 = new World(map,{});
	console.log(w2.toString());
}

test();