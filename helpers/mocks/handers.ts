import { rest } from 'msw'
import { queryUrl } from '../../src/constants/baseUrl'
import { mockApiData } from './testData/mockData'

export const handlers = [
    rest.get(`${queryUrl}/products/products`, (req, res, ctx) => {
        return res(
            ctx.status(200),
            ctx.json(mockApiData)
        )
    })
]