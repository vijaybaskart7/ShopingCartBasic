import { setupServer } from 'msw/node'
import { handlers } from './handers'

export const server = setupServer(...handlers)