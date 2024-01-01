import { tokens } from '@tamagui/themes';
import { SolitoImage } from 'solito/image';
import { useLink } from 'solito/link';
import { Button, useMedia, useThemeName } from 'tamagui';

const logoMediaQuery = (size: keyof typeof tokens.size) => ({
	width: tokens.size[size].val,
	height: tokens.size[size].val,
});

export const Logo = () => {
	const theme = useThemeName();
	const media = useMedia();
	const linkProps = useLink({
		href: '/',
	});

	return (
		<Button
			size={'$2'}
			chromeless
			py="$2"
			focusStyle={{}}
			// media={'$hoverNone'}
			// hoverStyle={[globalStyles.button_hover]}
			// style={globalStyles.logomain}
			backgroundColor={'$white'}
			style={{ backgroundColor: 'transparent' }}
			icon={
				<SolitoImage
					priority
					// src={`/images/logo1_${theme}.png`}
					src={`/images/download.png`}
					alt="logo"
					resizeMode="contain"
					sizes="(max-width: 600px) 400px, 800px"
					{...logoMediaQuery(8)}
					{...((media.gtSm || media.gtMd) && {
						...logoMediaQuery(9),
					})}
					{...((media.gtLg || media.gtXl) && {
						...logoMediaQuery(12),
					})}
				/>
			}
			{...linkProps}
		/>
	);
};
