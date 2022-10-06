import 'whatwg-fetch';
import { renderWithRedux, createWithRedux, mockedNavigate } from "./helpers/testHelpers/renderWithRedux"
// import fetch, { Headers, Request, Response } from 'node-fetch';
import AbortController from 'abort-controller';
import { server } from './helpers/mocks/server';

jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');
let global:any;
// global.fetch = fetch;
// global.Headers = Headers;
// global.Request = Request;
// global.Response = Response;
global.AbortController = AbortController;

global.renderWithRedux = renderWithRedux;
global.createWithRedux = createWithRedux;
global.mockedNavigate = mockedNavigate;
// jest.useFakeTimers();


beforeAll(() => server.listen({ onUnhandledRequest: 'error' }));
afterEach(() => server.resetHandlers());
afterAll(() => server.close());
