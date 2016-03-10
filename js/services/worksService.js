app.service('worksService', WorksService);

function WorksService() {
	this.works = WORKS_DATA;
}

WorksService.prototype.getWorks = function() {
	return this.works;

};

WorksService.prototype.getWork = function(id) {
	return this.works.filter(function(work) {return work.ID === id}) [0];
}

var WORKS_DATA = [{
	"Title": "Conversation with Ernst Haeckel (Work in Process)",
	"ShortDescription": "gifs, installation",
	"Description": "description/digitalAquarium.html",
	"MainImage": "images/pool_main2.jpg",
	"Pieces" : [{
		"ID": "0",
		"Name": "Underwater",
		"MImage": 'images/underwater.gif',
		"Attribute": 'Underwater - digital collage by Nadya Eidelstein',
		"Thumb": "images/underwater.jpg",
		"Materials": "Digital collage",
		"Measurements": "",
		"Status": "inactive",
		"Media": "image"
    },
    {
    	"ID": "1",
 		"Name": "Seaweeds and Shell",
		"MImage": "images/seaweeds_and_shell.gif",
		"Attribute": 'Seaweed and Shell - digital collage by Nadya Eidelstein',
		"Thumb": "images/seaweeds_and_shell.jpg",
		"Materials": "Digital collage",
		"Measurements": "",
		"Status": "inactive",
		"Media": "image"
    },
    {
    	"ID": "2",
 		"Name": "Liquid",
		"MImage": "images/liquid.gif",
		"Attribute": 'Liquid - digital collage by Nadya Eidelstein',
		"Thumb": "images/liquid.jpg",
		"Materials": "Digital collage",
		"Measurements": "",
		"Status": "inactive",
		"Media": "image"
    },
    {
    	"ID": "3",
 		"Name": "Curtain",
		"MImage": "images/curtain.gif",
		"Thumb": "images/curtain.jpg",
		"Attribute": 'Curtain - digital collage by Nadya Eidelstein',
		"Materials": "Digital collage",
		"Measurements": "",
		"Status": "inactive",
		"Media": "image"
    },
    {
    	"ID": "4",
 		"Name": "Pool",
		"MImage": "images/pool.gif",
		"Attribute": 'Pool - digital collage by Nadya Eidelstein',
		"Thumb": "images/pool.jpg",
		"Materials": "Digital collage",
		"Measurements": "",
		"Status": "inactive",
		"Media": "image"
    },
    {
    	"ID": "5",
 		"Name": "Vagina and Ball",
		"MImage": "images/vagina_and_ball.gif",
		"Attribute": 'Vagina and Ball - digital collage by Nadya Eidelstein',
		"Thumb": "images/vagina_and_ball.jpg",
		"Materials": "Digital collage",
		"Measurements": "",
		"Status": "inactive",
		"Media": "image"
    },
    {
    	"ID": "6",
 		"Name": "Bubbles",
		"MImage": "images/bubles.gif",
		"Attribute": 'Bubbles - digital collage by Nadya Eidelstein',
		"Thumb": "images/bubles.jpg",
		"Materials": "Digital collage",
		"Measurements": "",
		"Status": "inactive",
		"Media": "image"
    },
    {
    	"ID": "7",
 		"Name": "Flowers",
		"MImage": "images/flowers.gif",
		"Attribute": 'Flowers - digital collage by Nadya Eidelstein',
		"Thumb": "images/flowers.jpg",
		"Materials": "Digital collage",
		"Measurements": "",
		"Status": "inactive",
		"Media": "image"
    },
    {
    	"ID": "8",
 		"Name": "Land, Water and Creatures",
		"MImage": "images/land_water.gif",
		"Attribute": 'Land, Water, Digital Creatures - digital collage by Nadya Eidelstein',
		"Thumb": "images/land_water_72.jpg",
		"Materials": "Digital collage",
		"Measurements": "",
		"Status": "inactive",
		"Media": "image"
    },
    {
    	"ID": "9",
 		"Name": "Otherwordly Lights",
		"MImage": "images/lights.gif",
		"Attribute": 'Otherwordly Lights - digital collage by Nadya Eidelstein',
		"Thumb": "images/lights.jpg",
		"Materials": "Digital collage",
		"Measurements": "",
		"Status": "inactive",
		"Media": "image"
    },
    {
    	"ID": "10",
 		"Name": "Recursive Flowers",
		"MImage": "images/recursive_flower.gif",
		"Attribute": 'Recursive Flowers - digital collage by Nadya Eidelstein',
		"Thumb": "images/recursive_flower.jpg",
		"Materials": "Digital collage",
		"Measurements": "",
		"Status": "inactive",
		"Media": "image"
    },
    {
    	"ID": "11",
		"Name": "Springy Weed",
		"MImage": 'images/srpingy_weed.gif',
		"Attribute": 'Springy Weed - digital collage by Nadya Eidelstein',
		"Thumb": "images/srpingy_weed.jpg",
		"Materials": "Digital collage",
		"Measurements": "",
		"Status": "inactive",
		"Media": "image"
    }],
    "ID": "digital-aquarium"
}, {
	"Title": "Album Cover Design",
	"ShortDescription": "print, grafic design",
	"Description": "description/albumCover.html",
	"MainImage": "images/Album_cover_main.jpg",
	"Attribute": 'Album Cover Design, risoprint, by Nadya Eidelstein',
	"Pieces" : [{
		"ID": "0",
		"Name": "Album Cover",
		"MImage": "images/album_cover_riso.jpg",
		"Thumb": "images/album_cover_riso_thumb.jpg",
		"Materials": "Risoprint",
		"Measurements": "28 x 28 cm (11 x 11 inches)",
		"Status": "inactive",
		"Media": "image"
    },
    {
    	"ID": "1",
 		"Name": "Album Cover",
		"MImage": "images/album_cover.jpg",
		"Attribute": 'Album Cover Design - digital collage by Nadya Eidelstein',
		"Thumb": "images/album_cover_thumb.jpg",
		"Materials": "Digital collage",
		"Measurements": "",
		"Status": "inactive",
		"Media": "image" 
    }],
	"ID": "album-cover-design"
}, {
	"Title": "Programmed Bodies",
	"ShortDescription": "animation, processing, installation",
	"Description": "description/programmedBodies.html",
	"MainImage": "images/prBodies_main2.jpg",
	"Pieces" : [{
		"ID": "0",
		"Name": "Programmed Bodies #1",
		"MImage": "https://www.youtube.com/embed/xAJcj3HpK2w",
		"Thumb": "images/prBodies2_thumb.jpg",
		"Materials": "Processing, After Effects",
		"Measurements": "",
		"Status": "inactive",
		"Media": "video"
    },
    {
    	"ID": "1",
 		"Name": "Programmed Bodies #2",
		"MImage": "https://www.youtube.com/embed/8MIr3qAoHAw",
		"Thumb": "images/prBodies1_thumb.jpg",
		"Materials": "Processing, After Effects",
		"Measurements": "",
		"Status": "inactive",
		"Media": "video" 
    },
    {
    	"ID": "2",
 		"Name": "Programmed Bodies #3",
		"MImage": "https://www.youtube.com/embed/T54gMcXn410",
		"Thumb": "images/prBodies3_thumb.jpg",
		"Materials": "Processing",
		"Measurements": "",
		"Status": "inactive",
		"Media": "video" 
    },
    {
    	"ID": "3",
 		"Name": "Puberty",
		"MImage": "https://www.youtube.com/embed/VE4CQc1sLPY",
		"Thumb": "images/puberty_thumb.jpg",
		"Materials": "",
		"Measurements": "",
		"Status": "inactive",
		"Media": "video" 
    },
    {
    	"ID": "4",
 		"Name": "Frame from Programmed Bodies #1",
		"MImage": "images/screenshot_2.png",
		"Attribute": 'Frame from Programmed Bodies 1 animation by Nadya Eidelstein',
		"Thumb": "images/screenshot_2_thumb.png",
		"Materials": "",
		"Measurements": "",
		"Status": "inactive",
		"Media": "image" 
    },
    {
    	"ID": "5",
 		"Name": "Frame from Programmed Bodies #2",
		"MImage": "images/prBodies1.png",
		"Attribute": 'Frame from Programmed Bodies 2 animation by Nadya Eidelstein',
		"Thumb": "images/prBodies1_thumb.png",
		"Materials": "",
		"Measurements": "",
		"Status": "inactive",
		"Media": "image" 
    },
    {
    	"ID": "6",
 		"Name": "Frame from Programmed Bodies #3",
		"MImage": "images/prBodies3.png",
		"Attribute": 'Frame from Programmed Bodies 3 animation by Nadya Eidelstein',
		"Thumb": "images/prBodies3_thumb.png",
		"Materials": "",
		"Measurements": "",
		"Status": "inactive",
		"Media": "image" 
    }],
	"ID": "programmed-bodies"
}, {
	"Title": "Expanding Bodies",
	"ShortDescription": "laser-cutting, painting, airbrush",
	"Description": "description/expandingBodies.html",
	"MainImage": "images/expbodies_main.jpg",
	"Pieces" : [{
		"ID": "0",
		"Name": "Expanding Body #1",
		"MImage": "images/expbody1.png",
		"Attribute": 'Expanding Body 1 - painting by Nadya Eidelstein, airbrush, lasercut, acrylics',
		"Thumb": "images/expbody1_thumb.jpg",
		"Materials": "Spray-painted acrylic on wooden board",
		"Measurements": "64 x 64 cm (25 x 25 inches)",
		"Status": "inactive",
		"Media": "image"
    },
    {
    	"ID": "1",
 		"Name": "Expanding Body #2",
		"MImage": "images/expbody2.png",
		"Attribute": 'Expanding Body 2 - painting by Nadya Eidelstein, airbrush, lasercut, acrylics',
		"Thumb": "images/expbody2_thumb.jpg",
		"Materials": "Spray-painted acrylic on wooden board",
		"Measurements": "58 x 97 cm (23 x 38 inches)",
		"Status": "inactive",
		"Media": "image" 
    },
    {
    	"ID": "2",
 		"Name": "Expanding Body #3",
		"MImage": "images/expbody3.png",
		"Attribute": 'Expanding Body 3 - painting by Nadya Eidelstein, airbrush, lasercut, acrylics',
		"Thumb": "images/expbody3_thumb.jpg",
		"Materials": "Spray-painted acrylic on wooden board",
		"Measurements": "61 x 97 cm (24 x 38 inches)",
		"Status": "inactive",
		"Media": "image" 
    },
    {
    	"ID": "3",
 		"Name": "Expanding Body #4",
		"MImage": "images/expbody4.png",
		"Attribute": 'Expanding Body 4 - painting by Nadya Eidelstein, airbrush, lasercut, acrylics',
		"Thumb": "images/expbody4_thumb.png",
		"Materials": "Spray-painted acrylic on wooden board",
		"Measurements": "66 x 97 cm (26 x 38 inches)",
		"Status": "inactive",
		"Media": "image" 
    },
    {
    	"ID": "4",
 		"Name": "Expanding Body #5",
		"MImage": "images/expbody5.png",
		"Attribute": 'Expanding Body 5 - painting by Nadya Eidelstein, airbrush, lasercut, acrylics',
		"Thumb": "images/expbody5_thumb.png",
		"Materials": "Spray-painted acrylic on wooden board",
		"Measurements": "60 x 67 cm (23.5 x 26.5 inches)",
		"Status": "inactive",
		"Media": "image" 
    },
        {
    	"ID": "5",
 		"Name": "Process",
		"MImage": "images/expbody1_stencil.png",
		"Attribute": 'Expanding Body 1 - lasercut stencil by Nadya Eidelstein',
		"Thumb": "images/expbody1_stencil_thumb.png",
		"Materials": "Lasercut stencil, airbrushing",
		"Measurements": "",
		"Status": "inactive",
		"Media": "image" 
    },
        {
    	"ID": "6",
 		"Name": "Lasercut Stencil #2",
		"MImage": "images/expbody2_stencil.png",
		"Attribute": 'Expanding Body 2 - lasercut stencil by Nadya Eidelstein',
		"Thumb": "images/expbody2_stencil_thumb.png",
		"Materials": "",
		"Measurements": "58 x 97 cm (23 x 38 inches)",
		"Status": "inactive",
		"Media": "image" 
    },
        {
    	"ID": "7",
 		"Name": "Lasercut Stencil #3",
		"MImage": "images/expbody3_stencil.png",
		"Attribute": 'Expanding Body 3 - lasercut stencil by Nadya Eidelstein',
		"Thumb": "images/expbody3_stencil_thumb.png",
		"Materials": "",
		"Measurements": "61 x 97 cm (24 x 38 inches)",
		"Status": "inactive",
		"Media": "image" 
    },
        {
    	"ID": "8",
 		"Name": "Lasercut Stencil #4",
		"MImage": "images/expbody4_stencil.png",
		"Attribute": 'Expanding Body 4 - lasercut stencil by Nadya Eidelstein',
		"Thumb": "images/expbody4_stencil_thumb.png",
		"Materials": "",
		"Measurements": "66 x 97 cm (26 x 38 inches)",
		"Status": "inactive",
		"Media": "image" 
    },
        {
    	"ID": "9",
 		"Name": "Lasercut Stencil #5",
		"MImage": "images/expbody5_stencil.png",
		"Attribute": 'Expanding Body 5 - lasercut stencil by Nadya Eidelstein',
		"Thumb": "images/expbody5_stencil_thumb.png",
		"Materials": "",
		"Measurements": "60 x 67 cm (23.5 x 26.5 inches)",
		"Status": "inactive",
		"Media": "image" 
    }],
	"ID": "expanding-bodies"
}, {
	"Title": "On Growth, Form and Computers: Part 1",
	"ShortDescription": "CAD design, 3D, jewellery",
	"Description": "description/grForm1.html",
	"MainImage": "images/grForm1_main1.png",
	"Pieces" : [{
		"ID": "0",
		"Name": "Creatures Necklace",
		"MImage": "images/creatures.png",
		"Attribute": 'Creatures Necklace - by Nadya Eidelstein, lasercut, CAD design, wood, 3D technologies, jewellery',
		"Thumb": "images/creatures_thumb.png",
		"Materials": "Lasercut laminated spruce wood, carved birch and oak wood, cord, silver",
		"Measurements": "24 x 22 x 5.8 cm (9.5 x 8.6 x 2.3 inches)",
		"Status": "inactive",
		"Media": "image"
    },
    {
    	"ID": "1",
 		"Name": "Spirals Necklace",
		"MImage": "images/spirals.png",
		"Attribute": 'Spirals Necklace - by Nadya Eidelstein, lasercut, CAD design, wood, 3D technologies, jewellery',
		"Thumb": "images/spirals_thumb.png",
		"Materials": "Lasercut laminated spruce wood, cord, aluminium",
		"Measurements": "31 x 22 x 6 cm (12 x 8.6 x 2.4 inches)",
		"Status": "inactive",
		"Media": "image" 
    },
    {
    	"ID": "2",
 		"Name": "Process",
		"MImage": "images/spirals-process.png",
		"Attribute": 'Creatures Necklace, process of making - by Nadya Eidelstein, lasercut, CAD design, wood, 3D technologies, jewellery',
		"Thumb": "images/spirals-process_thumb.png",
		"Materials": "Model in 3d programme, lasercut laminated wood",
		"Measurements": "",
		"Status": "inactive",
		"Media": "image" 
    },
    {
    	"ID": "3",
 		"Name": "Spirals Necklace: details",
		"MImage": "images/spirals_details.png",
		"Attribute": 'Creatures Necklace, details - by Nadya Eidelstein, lasercut, CAD design, wood, 3D technologies, jewellery',
		"Thumb": "images/spirals_details_thumb.png",
		"Materials": "Lasercut laminated spruce wood, cord, aluminium",
		"Measurements": "61 x 97 cm (24 x 38 inches)",
		"Status": "inactive",
		"Media": "image" 
    },
    {
    	"ID": "4",
 		"Name": "Models in 3d programme, sketches",
		"MImage": "images/spiral_rings.png",
		"Attribute": 'Creature Ring, models in 3d programme, sketches - by Nadya Eidelstein, lasercut, CAD design, wood, 3D technologies, jewellery',
		"Thumb": "images/spiral_rings_thumb.png",
		"Materials": "",
		"Measurements": "",
		"Status": "inactive",
		"Media": "image" 
    },
    {
    	"ID": "5",
 		"Name": "Creature Ring #1",
		"MImage": "images/creature_ring1.png",
		"Attribute": 'Creature Ring 1 - by Nadya Eidelstein, lasercut, CAD design, wood, 3D technologies, jewellery',
		"Thumb": "images/creature_ring1_thumb.png",
		"Materials": "Lasercut laminated spruce wood",
		"Measurements": "4 x 10 cm (1.5 x 3.9 inches)",
		"Status": "inactive",
		"Media": "image" 
    },
    {
    	"ID": "6",
 		"Name": "Creature Ring #2",
		"MImage": "images/creature_ring2.png",
		"Attribute": 'Creature Ring 2 - by Nadya Eidelstein, lasercut, CAD design, wood, 3D technologies, jewellery',
		"Thumb": "images/creature_ring2_thumb.png",
		"Materials": "Lasercut laminated spruce wood",
		"Measurements": "4 x 10 cm (1.5 x 3.9 inches)",
		"Status": "inactive",
		"Media": "image" 
    },
    {
    	"ID": "7",
 		"Name": "Creature Ring #3",
		"MImage": "images/creature_ring3.png",
		"Attribute": 'Creature Ring 3 - by Nadya Eidelstein, lasercut, CAD design, wood, 3D technologies, jewellery',
		"Thumb": "images/creature_ring3_thumb.png",
		"Materials": "Lasercut laminated spruce wood",
		"Measurements": "4 x 10 cm (1.5 x 3.9 inches)",
		"Status": "inactive",
		"Media": "image" 
    },
    {
    	"ID": "8",
 		"Name": "Creatures Rings Worn",
		"MImage": "images/creatures_rings1.png",
		"Attribute": 'Creatures Rings - by Nadya Eidelstein, lasercut, CAD design, wood, 3D technologies, jewellery',
		"Thumb": "images/creatures_rings1_thumb.png",
		"Materials": "Lasercut laminated spruce wood",
		"Measurements": "",
		"Status": "inactive",
		"Media": "image" 
    },
    {
    	"ID": "9",
 		"Name": "Creatures Rings Worn",
		"MImage": "images/creatures_rings2.png",
		"Attribute": 'Creatures Rings - by Nadya Eidelstein, lasercut, CAD design, wood, 3D technologies, jewellery',
		"Thumb": "images/creatures_rings2_thumb.png",
		"Materials": "Lasercut laminated spruce wood",
		"Measurements": "",
		"Status": "inactive",
		"Media": "image" 
    },
    {
    	"ID": "10",
 		"Name": "Split Tree necklace",
		"MImage": "images/splitTree_process.png",
		"Attribute": 'Split Tree Necklace - by Nadya Eidelstein, lasercut, CAD design, wood, 3D technologies, jewellery',
		"Thumb": "images/splitTree_process_thumb.png",
		"Materials": "",
		"Measurements": "",
		"Status": "inactive",
		"Media": "image" 
    },
    {
    	"ID": "11",
 		"Name": "Split Tree necklace: process",
		"MImage": "images/splitTree.png",
		"Attribute": 'Split Tree Necklace, process of making - by Nadya Eidelstein, lasercut, CAD design, wood, 3D technologies, jewellery',
		"Thumb": "images/splitTree_thumb.png",
		"Materials": "Lasercut laminated spruce wood, silver, cord",
		"Measurements": "",
		"Status": "inactive",
		"Media": "image" 
    },
    {
    	"ID": "12",
 		"Name": "Split Tree necklace worn",
		"MImage": "images/splitTree_worn.png",
		"Attribute": 'Split Tree Necklace - by Nadya Eidelstein, lasercut, CAD design, wood, 3D technologies, jewellery',
		"Thumb": "images/splitTree_worn_thumb.png",
		"Materials": "Lasercut laminated spruce wood, silver, cord",
		"Measurements": "",
		"Status": "inactive",
		"Media": "image" 
    },
    {
    	"ID": "13",
 		"Name": "Split Tree brooch",
		"MImage": "images/splitTree_brooch1.png",
		"Attribute": 'Split Tree Brooch - by Nadya Eidelstein, lasercut, CAD design, wood, 3D technologies, jewellery',
		"Thumb": "images/splitTree_brooch1_thumb.png",
		"Materials": "Lasercut laminated spruce wood, silver",
		"Measurements": "",
		"Status": "inactive",
		"Media": "image" 
    },
    {
    	"ID": "14",
 		"Name": "Split Tree brooch",
		"MImage": "images/splitTree_brooch2.png",
		"Attribute": 'Split Tree Brooch - by Nadya Eidelstein, lasercut, CAD design, wood, 3D technologies, jewellery',
		"Thumb": "images/splitTree_brooch2_thumb.png",
		"Materials": "Lasercut laminated spruce wood, silver",
		"Measurements": "",
		"Status": "inactive",
		"Media": "image" 
    },
    {
    	"ID": "15",
 		"Name": "Spirals brooch",
		"MImage": "images/spiral_brooch.png",
		"Attribute": 'Spirals Brooch - by Nadya Eidelstein, lasercut, CAD design, wood, 3D technologies, jewellery',
		"Thumb": "images/spiral_brooch_thumb.png",
		"Materials": "Lasercut laminated spruce wood, silver",
		"Measurements": "",
		"Status": "inactive",
		"Media": "image" 
    },
    {
    	"ID": "16",
 		"Name": "Spirals brooch worn",
		"MImage": "images/spiral_brooch_worn.png",
		"Attribute": 'Spirals Brooch - by Nadya Eidelstein, lasercut, CAD design, wood, 3D technologies, jewellery',
		"Thumb": "images/spiral_brooch_worn_thumb.png",
		"Materials": "Bronze",
		"Measurements": "61 x 97 cm (24 x 38 inches)",
		"Status": "inactive",
		"Media": "image" 
    },
    {
    	"ID": "17",
 		"Name": "Fungi Bangles (Swarovski Collaboration)",
		"MImage": "images/swarovski1.png",
		"Attribute": 'Fungi Bangles - by Nadya Eidelstein, lasercut, CAD design, wood, 3D technologies, Swarovski crystals, jewellery',
		"Thumb": "images/swarovski1_thumb.png",
		"Materials": "Lasercut wood, Swarovski crystals, brass",
		"Measurements": "",
		"Status": "inactive",
		"Media": "image" 
    },
    {
    	"ID": "18",
 		"Name": "Fungi Bangles (Swarovski Collaboration)",
		"MImage": "images/swarovski2.png",
		"Attribute": 'Fungi Bangles - by Nadya Eidelstein, lasercut, CAD design, wood, 3D technologies, Swarovski crystals, jewellery',
		"Thumb": "images/swarovski2_thumb.png",
		"Materials": "Lasercut wood, Swarovski crystals, brass",
		"Measurements": "",
		"Status": "inactive",
		"Media": "image" 
    }],
	"ID": "on-growth-form-and-computer-1"
}, {
	"Title": "On Growth, Form and Computers: Part 2",
	"ShortDescription": "CAD design, 3D, jewellery",
	"Description": "description/grForm2.html",
	"MainImage": "images/grForm_min.png",
	"Pieces" : [{
		"ID": "0",
		"Name": "CNC Driftwood Necklace",
		"MImage": "images/cnc-driftwood-necklace.png",
		"Attribute": 'CNC Driftwood Necklace - by Nadya Eidelstein, lasercut, CAD design, CNC, wood, 3D technologies, jewellery',
		"Thumb": "images/cnc-driftwood_thumb.png",
		"Materials": "Oak wood, spruce wood, glass beads, silver",
		"Measurements": "30 x 21 x 5 cm (11.8 x 8.3 x 2 inches)",
		"Status": "inactive",
		"Media": "image"
    },
    {
    	"ID": "1",
 		"Name": "3d-milling process",
		"MImage": "images/cnc-process.png",
		"Attribute": 'CNC Driftwood Necklace, process of manifacturing - by Nadya Eidelstein, lasercut, CAD design, CNC, wood, 3D technologies, jewellery',
		"Thumb": "images/cnc-process_thumb.png",
		"Materials": "Found driftwood, 3d-milled oak wood",
		"Measurements": "",
		"Status": "inactive",
		"Media": "image" 
    },
    {
    	"ID": "2",
 		"Name": "CNC Driftwood Necklace Worn",
		"MImage": "images/cnc_driftwood_worn1.png",
		"Attribute": 'CNC Driftwood Necklace - by Nadya Eidelstein, lasercut, CAD design, CNC, wood, 3D technologies, jewellery',
		"Thumb": "images/cnc_driftwood_worn1_thumb.png",
		"Materials": "Oak wood, spruce wood, glass beads, silver",
		"Measurements": "30 x 21 x 5 cm (11.8 x 8.3 x 2 inches)",
		"Status": "inactive",
		"Media": "image" 
    },
    {
    	"ID": "3",
 		"Name": "CNC Driftwood Necklace Worn",
		"MImage": "images/cnc_driftwood_worn2.png",
		"Attribute": 'CNC Driftwood Necklace - by Nadya Eidelstein, lasercut, CAD design, CNC, wood, 3D technologies, jewellery',
		"Thumb": "images/cnc_driftwood_worn2_thumb.png",
		"Materials": "Oak wood, spruce wood, glass beads, silver",
		"Measurements": "30 x 21 x 5 cm (11.8 x 8.3 x 2 inches)",
		"Status": "inactive",
		"Media": "image" 
    },
    {
    	"ID": "4",
 		"Name": "CNC Twig Necklace",
		"MImage": "images/cnc-twig.png",
		"Attribute": 'CNC Twig Necklace - by Nadya Eidelstein, lasercut, CAD design, CNC, wood, 3D technologies, jewellery',
		"Thumb": "images/cnc_twig_thumb.png",
		"Materials": "Birch wood, oak wood, found object, silver",
		"Measurements": "32 x 21 x 3 cm (12.5 x 8.3 x 1.2 inches)",
		"Status": "inactive",
		"Media": "image" 
    },
    {
    	"ID": "5",
 		"Name": "3d-milling process",
		"MImage": "images/cnc-twig-process.png",
		"Attribute": 'CNC Twig Necklace, process of manifacturing - by Nadya Eidelstein, lasercut, CAD design, CNC, wood, 3D technologies, jewellery',
		"Thumb": "images/cnc-twig-process_thumb.png",
		"Materials": "Found twid, 3d-milled twig",
		"Measurements": "",
		"Status": "inactive",
		"Media": "image" 
    },
    {
    	"ID": "6",
 		"Name": "CNC Twig Necklace Worn",
		"MImage": "images/cnc-twig-worn.png",
		"Attribute": 'CNC Twig Necklace - by Nadya Eidelstein, lasercut, CAD design, CNC, wood, 3D technologies, jewellery',
		"Thumb": "images/cnc-twig-worn_thumb.png",
		"Materials": "Birch wood, oak wood, found object, silver",
		"Measurements": "32 x 21 x 3 cm (12.5 x 8.3 x 1.2 inches)",
		"Status": "inactive",
		"Media": "image" 
    }],
	"ID": "on-growth-form-and-computer-2"
}, {
	"Title": "Biomimicry",
	"ShortDescription": "CAD design, laser-cutting, jewellery",
	"Description": "description/biomimicry.html",
	"MainImage": "images/bio_main.png",
	"Pieces" : [{
		"ID": "0",
		"Name": "Biomimicry pendants",
		"MImage": "images/biomimicry_pendants.png",
		"Attribute": 'Biomimicry pendants - by Nadya Eidelstein, lasercut, CAD design, wood, 3D technologies, jewellery, seed',
		"Thumb": "images/biomimicry_pendants_thumb.png",
		"Materials": "Wood, aluminium, spray-paint, cotton cord",
		"Measurements": "3 x 5 cm (1.2 x 2 inches)",
		"Status": "inactive",
		"Media": "image"
    },
    {
    	"ID": "1",
 		"Name": "Inspiration, design development",
		"MImage": "images/sketches.png",
		"Attribute": 'Biomimicry pendants, inspiration, design development - by Nadya Eidelstein, lasercut, CAD design, wood, 3D technologies, jewellery, seed',
		"Thumb": "images/sketches_thumb.png",
		"Materials": "Sketching, 3d-programme screenshots",
		"Measurements": "",
		"Status": "inactive",
		"Media": "image" 
    },
    {
    	"ID": "2",
 		"Name": "Biomimicry pendant",
		"MImage": "images/pendant_hand.png",
		"Attribute": 'Biomimicry pendant - by Nadya Eidelstein, lasercut, CAD design, wood, 3D technologies, jewellery, seed',
		"Thumb": "images/pendant_hand_thumb.png",
		"Materials": "Wood, aluminium, spray-paint, cotton cord",
		"Measurements": "3 x 5 cm (1.2 x 2 inches)",
		"Status": "inactive",
		"Media": "image" 
    },
    {
    	"ID": "3",
 		"Name": "Biomimicry pendant",
		"MImage": "images/pendant.png",
		"Attribute": 'Biomimicry pendant - by Nadya Eidelstein, lasercut, CAD design, wood, 3D technologies, jewellery, seed',
		"Thumb": "images/pendant_thumb.png",
		"Materials": "Wood, aluminium, spray-paint, cotton cord",
		"Measurements": "3 x 5 cm (1.2 x 2 inches)",
		"Status": "inactive",
		"Media": "image" 
    },
    {
    	"ID": "4",
 		"Name": "3d renderings of Biomimicry pendants",
		"MImage": "https://www.youtube.com/embed/gzrGBiyUl6w",
		"Thumb": "images/pendants_thumb.jpg",
		"Materials": "Rhino 3d renderings",
		"Measurements": "",
		"Status": "inactive",
		"Media": "video" 
    }],
	"ID": "biomimicry"
}, {
	"Title": "Highs and Lows",
	"ShortDescription": "metalsmith, design",
	"Description": "description/medal.html",
	"MainImage": "images/medal_main2.jpg",
	"Pieces" : [{
		"ID": "0",
		"Name": "Medal: front",
		"MImage": "images/medal_front.png",
		"Attribute": 'Highs and Lows, front side - medal by Nadya Eidelstein',
		"Thumb": "images/medal_front_thumb.png",
		"Materials": "Bronze",
		"Measurements": "",
		"Status": "inactive",
		"Media": "image"
    },
    {
    	"ID": "1",
 		"Name": "Medal: back",
		"MImage": "images/medal_back2.png",
		"Attribute": 'Highs and Lows, back side - medal by Nadya Eidelstein',
		"Thumb": "images/medal_back_thumb.png",
		"Materials": "Bronze",
		"Measurements": "",
		"Status": "inactive",
		"Media": "image" 
    },
    {
    	"ID": "2",
 		"Name": "Medal: the edge",
		"MImage": "images/medal_side.png",
		"Attribute": 'Highs and Lows, the edge - medal by Nadya Eidelstein',
		"Thumb": "images/medal_side_thumb.png",
		"Materials": "Bronze",
		"Measurements": "",
		"Status": "inactive",
		"Media": "image" 
    },
    {
    	"ID": "3",
 		"Name": "Design Development",
		"MImage": "images/medal_sketches.png",
		"Attribute": 'Highs and Lows, sketches - medal by Nadya Eidelstein',
		"Thumb": "images/medal_sketches_thumb.jpg",
		"Materials": "",
		"Measurements": "",
		"Status": "inactive",
		"Media": "image" 
    }],
	"ID": "highs-and-lows"
}]