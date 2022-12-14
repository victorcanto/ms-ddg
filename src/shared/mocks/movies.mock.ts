import { Movie } from '../models/movies.interfaces';

export const moviesMock: Movie[] = [
	{
		adult: false,
		backdrop_path: '/ugS5FVfCI3RV0ZwZtBV3HAV75OX.jpg',
		genre_ids: [16, 878, 28],
		genres: [
			{ id: 16, name: 'Animação' },
			{ id: 878, name: 'Ficção científica' },
			{ id: 28, name: 'Ação' },
		],
		id: 610150,
		original_language: 'ja',
		original_title: 'ドラゴンボール超 スーパーヒーロー',
		overview:
			'The Red Ribbon Army, an evil organization that was once destroyed by Goku in the past, has been reformed by a group of people who have created new and mightier Androids, Gamma 1 and Gamma 2, and seek vengeance against Goku and his family.',
		popularity: 16585.915,
		poster_path: '/rugyJdeoJm7cSJL1q4jBpTNbxyU.jpg',
		release_date: '2022-06-11',
		title: 'Dragon Ball Super: Super Hero',
		video: false,
		vote_average: 8,
		vote_count: 959,
		price: 79.99,
	},
	{
		adult: false,
		backdrop_path: '/vvObT0eIWGlArLQx3K5wZ0uT812.jpg',
		genre_ids: [28, 12, 14],
		genres: [
			{ id: 16, name: 'Animação' },
			{ id: 878, name: 'Ficção científica' },
			{ id: 28, name: 'Ação' },
		],
		id: 616037,
		original_language: 'en',
		original_title: 'Thor: Love and Thunder',
		overview:
			'After his retirement is interrupted by Gorr the God Butcher, a galactic killer who seeks the extinction of the gods, Thor Odinson enlists the help of King Valkyrie, Korg, and ex-girlfriend Jane Foster, who now inexplicably wields Mjolnir as the Relatively Mighty Girl Thor. Together they embark upon a harrowing cosmic adventure to uncover the mystery of the God Butcher’s vengeance and stop him before it’s too late.',
		popularity: 5372.967,
		poster_path: '/pIkRyD18kl4FhoCNQuWxWu5cBLM.jpg',
		release_date: '2022-07-06',
		title: 'Thor: Love and Thunder',
		video: false,
		vote_average: 6.8,
		vote_count: 2223,
		price: 79.99,
	},
	{
		adult: false,
		backdrop_path: '/xfNHRI2f5kHGvogxLd0C5sB90L7.jpg',
		genre_ids: [16, 28, 10751, 878, 35],
		genres: [
			{ id: 16, name: 'Animação' },
			{ id: 878, name: 'Ficção científica' },
			{ id: 28, name: 'Ação' },
			{ id: 10751, name: 'Família' },
			{ id: 35, name: 'Comédia' },
		],
		id: 539681,
		original_language: 'en',
		original_title: 'DC League of Super-Pets',
		overview:
			'When Superman and the rest of the Justice League are kidnapped, Krypto the Super-Dog must convince a rag-tag shelter pack - Ace the hound, PB the potbellied pig, Merton the turtle and Chip the squirrel - to master their own newfound powers and help him rescue the superheroes.',
		popularity: 4630.633,
		poster_path: '/r7XifzvtezNt31ypvsmb6Oqxw49.jpg',
		release_date: '2022-07-27',
		title: 'DC League of Super-Pets',
		video: false,
		vote_average: 7.6,
		vote_count: 360,
		price: 79.99,
	},
];
