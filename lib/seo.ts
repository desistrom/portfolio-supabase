import { NextSeo } from 'next-seo';
import { useRouter } from 'next/router';

import type { ComponentProps } from 'react';

export function useSeoProps(
	props: Partial<ComponentProps<typeof NextSeo>> = {},
): Partial<ComponentProps<typeof NextSeo>> {
	const router = useRouter();

	const title = 'Junae.id ─ developer';
	const description = "Hey 👋 I'm Junaedi, a developer";

	return {
		title,
		description,
		canonical: `https://junae.id/${router.asPath}`,
		openGraph: {
			title,
			description,
			site_name: 'junaedi',
			url: `https://junae.id/${router.asPath}`,
			type: 'website',
			images: [
				{
					url: '/banner.png',
					alt: description,
					width: 1280,
					height: 720,
				},
			],
		},
		twitter: {
			cardType: 'summary_large_image',
			handle: '@junaediart',
			site: '@junaediart',
		},
		...props,
	};
}
