// Place global/shared types here
export type BrandedId<TBrand extends string> = string & { readonly __brand: TBrand };

export type Result<T, E = Error> =
	| { ok: true; value: T }
	| { ok: false; error: E };


