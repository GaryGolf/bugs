const plan:string[] =[
	'###############',
	'#    #    #  ##',
	'#    #        #',
	'#           ###',
	'#   ##       ##',
	'# ###     #   #',
	'#   ###   #   #',
	'#      #    # #',
	'###         ###',
	'###############'
];

import Vector from './vector';
import Grid from './grid';
import World from './world';
import Critter from './critter';


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

	let world = new World(plan);
	console.log('\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n');
	console.log(world.toString());


	let cd1 = new Critter(world, new Vector(2,2));
	setInterval(() => {
		cd1.act();
		console.log('\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n');
		console.log(world.toString());
	//	console.log("\n"+cd1.energy+"%");
	},1000)

	
}

test();