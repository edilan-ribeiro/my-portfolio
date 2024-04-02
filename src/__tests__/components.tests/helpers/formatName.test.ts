import { formatName } from '@/components/Projects/helpers/formatName'

describe('Ensure the names is correctly formatted', () => {
	it('Should correctly remove the hyphens in a name or phrase and put a space in its place', () => {
		const unformattedNames = [
			'canWeBreakThisTest?',
			'What About Now?',
			'ok_$One/+More~~Time',
			'Eco--Tech',
			'Cyber-Safe',
			'Health-Care',
			'Smart-City',
			'Bio-Genetics',
			'Renewable Energy-Solutions',
			'Smart-City-Development',
			'Digital-Health-Innovation',
			'Sustainable-Agriculture-Practices',
			'Urban-Transportation-Planning',
			'Renewable-Energy-Solutions-for-Sustainable-Development',
			'Smart-City-Development-and-Urban-Planning',
			'Digital-Health-Innovation-for-Global-Wellness',
			'Clean-Energy-Initiatives-for-Environmental-Sustainability',
			'Tech-Innovation-for-Social-Impact-and-Community-Development',
			'BiO-gEnEtIcS-rEsEaRcH-aNd-DeVeLoPmEnT',
			'UrBaN-pLaNnInG-sTrAtEgIeS-aNd-SoLuTiOnS',
			'SoCiAl-eNtRePrEnEuRsHiP-iNiTiAtIvEs',
			'HeAlTh-CaRe-SyStEmS-iMpRoVeMeNt',
			'SmArT-tEcHnOlOgY-iNnOvAtIoN-aNd-AdOpTiOn',
		]

		const formattedNames = [
			'canWeBreakThisTest?',
			'What About Now?',
			'ok_$One/+More~~Time',
			'Eco  Tech',
			'Cyber Safe',
			'Health Care',
			'Smart City',
			'Bio Genetics',
			'Renewable Energy Solutions',
			'Smart City Development',
			'Digital Health Innovation',
			'Sustainable Agriculture Practices',
			'Urban Transportation Planning',
			'Renewable Energy Solutions for Sustainable Development',
			'Smart City Development and Urban Planning',
			'Digital Health Innovation for Global Wellness',
			'Clean Energy Initiatives for Environmental Sustainability',
			'Tech Innovation for Social Impact and Community Development',
			'BiO gEnEtIcS rEsEaRcH aNd DeVeLoPmEnT',
			'UrBaN pLaNnInG sTrAtEgIeS aNd SoLuTiOnS',
			'SoCiAl eNtRePrEnEuRsHiP iNiTiAtIvEs',
			'HeAlTh CaRe SyStEmS iMpRoVeMeNt',
			'SmArT tEcHnOlOgY iNnOvAtIoN aNd AdOpTiOn',
		]

		unformattedNames.forEach((unformattedName, index) => {
			expect(formatName(unformattedName)).toEqual(formattedNames[index])
		})
	})

	it('Should not return wrong names after formatting', () => {
		const unformattedNames = [
			'canWeBreakThisTest?',
			'What-About-Now?',
			'ok_$One/+More~~Time',
			'well, this is a good code',
			'gotta-go',
		]

		const formattedNames = [
			'YES WE CAN!',
			'What-About-Now?',
			'I give up ʕノ•ᴥ•ʔノ ︵ ┻━┻',
			'indeed',
			'gotta-go',
		]

		unformattedNames.forEach((unformattedName, index) => {
			expect(formatName(unformattedName)).not.toEqual(formattedNames[index])
		})
	})
})
