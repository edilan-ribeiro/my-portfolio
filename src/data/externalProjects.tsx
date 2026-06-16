export interface ExternalProject {
    id: number
    name: string
    description: string
    topics: string[]
    homepage: string
    html_url: string
    created_at: string
    cover?: string
    techs?: string[]
    showCode?: boolean
}

export const externalProjects: ExternalProject[] = [
    {
        id: 10002,
        name: 'Instituto Conecta',
        description: 'Site institucional desenvolvido para a OSC Instituto Conecta.',
        topics: ['portfolio-project'],
        homepage: 'https://www.portalconecta.org/',
        html_url: 'https://www.portalconecta.org/',
        created_at: '2026-03-01',
        cover: '/ExternalProjects/portalconecta.png',
        techs: ['WordPress', 'PHP', 'MySQL'],
        showCode: false,
    },
]
