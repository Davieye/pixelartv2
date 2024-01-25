import { prisma } from '$lib';
import { error } from '@sveltejs/kit';
import type { Actions, PageServerLoad } from './$types';

export const load = (async () => {


    //load all pixelart 

const arts = await prisma.pixelArt.findMany({});

    return {arts};
}) satisfies PageServerLoad;

export const actions: Actions = {
    // action to create new pixelart
    
    create: async ({ cookies, request }) => {
		const data = await request.formData();
		const name = data.get('name')?.toString();
        const height = data.get('height')?.toString();
        const width = data.get('width')?.toString();

        if (!name || !height || !width) {
            throw error(400, 'Missing name, height or width');
            
            
        }
		
        // we are now going to create height * width pixels 

        const pixels = [];
        const parsedHeight = parseInt(height, 10);
        const parsedWidth = parseInt(width, 10);

        for (let i = 0; i < parsedHeight; i++) {
            for (let j = 0; j < parsedWidth; j++){
                pixels.push({
                    x: j,
                    y: i,
                    color: 'white',
                });
            }
        }
		
        //store the pixelart in the database
        const pixelArt = await prisma.pixelArt.create({
            data: {
                name,
                width: parsedWidth,
                height: parsedHeight,
                pixels: {
                    create: pixels,
                },
            },
        });
	},
};