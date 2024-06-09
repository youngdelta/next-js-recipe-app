import { Card, CardContent } from '@/components/ui/card';
import Link from 'next/link';

export default function RecipeList({ recipeList }) {
	// console.log(recipeList);

	return (
		<div>
			<div className="p-4 mx-auto lg:max-w-full md:max-w-4xl sm:max-w-full">
				<h2 className="text-4xl font-bold text-gray-800 mb-12">Recipes</h2>
				<Link href={'/'}> Go to Home</Link>
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
					{recipeList && recipeList.length > 0
						? recipeList.map((r) => (
								<Link href={`/recipe-list/${r.id}`} key={r.id}>
									<Card>
										<CardContent className="bg-white rounded-md overflow-hidden shadow-md cursor-pointer hover:scale-[1.1] transition-all">
											<div className="w-full aspect-w-16 aspect-h-8 lg:h-80">
												<img className="h-full w-full object-cover object-top" src={r.image} alt={r.name} />
											</div>
											<div className="p-6">
												<h3 className="text-lg font-bold text-gray-900">{r.name}</h3>
											</div>
											<div className="mt-4 flex items-conter flex-wrap gap-2">
												<p className="text-lg text-gray-600">Rating: {r.rating}</p>
												<div className="ml-auto">
													<p className="text-lg text-gray-600 font-bold">{r.cuisine}</p>
												</div>
											</div>
										</CardContent>
									</Card>
								</Link>
						  ))
						: null}
				</div>
			</div>
		</div>
	);
}
