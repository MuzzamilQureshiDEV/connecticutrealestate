import type { Agent } from '../types';

/**
 * AGENT ROSTER.
 * Names, roles and regions are taken from the live site's agent page.
 *
 * CLIENT TODO: add each agent's direct phone/email and a headshot at
 * /public/images/agents/<slug>.jpg. Cards fall back to a monogram tile when no
 * photo is present, so the grid stays tidy until photography is ready.
 */
export const agents: Agent[] = [
  {
    slug: 'steve-schappert',
    name: 'Steve Schappert',
    title: 'Broker / Founder',
    region: 'Statewide',
    phone: '203-994-3950',
    bio: 'Founder of the Connecticut Real Estate Center and the coordinated network behind it, with four decades spent buying, building, renovating and selling across the state.',
  },
  {
    slug: 'alizandria-greene',
    name: 'Alizandria Rodriguez Greene',
    title: 'Recruiter',
    region: 'Statewide',
    phone: '203-565-2110',
    bio: 'Leads recruiting for the network — the first call for agents and specialists who want to work inside a coordinated team.',
  },
  {
    slug: 'christopher-tancreti',
    name: 'Christopher Tancreti',
    title: 'Agent',
    region: 'Middletown',
  },
  {
    slug: 'jennifer-altland-forgione',
    name: 'Jennifer Altland Forgione',
    title: 'Agent',
    region: 'Brookfield',
  },
  {
    slug: 'ted-ferik',
    name: 'Ted Ferik',
    title: 'Agent',
    region: 'Orange',
  },
  {
    slug: 'eladio-gonzalez',
    name: 'Eladio Gonzalez',
    title: 'Agent',
    region: 'Waterbury',
  },
  {
    slug: 'maya-urbano',
    name: 'Maya Urbano',
    title: 'Agent',
    region: 'Watertown',
  },
  {
    slug: 'glorimar-burgos',
    name: 'Glorimar Burgos',
    title: 'Agent',
    region: 'Waterbury',
  },
  {
    slug: 'robert-gary',
    name: 'Robert Gary',
    title: 'Agent in Training',
    region: 'Waterbury',
  },
];

export function getAgent(slug: string): Agent | undefined {
  return agents.find((agent) => agent.slug === slug);
}
