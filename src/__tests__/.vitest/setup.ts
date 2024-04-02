import { vi, beforeEach, afterEach, afterAll, beforeAll } from 'vitest'
import { setupIntersectionMocking, resetIntersectionMocking } from 'react-intersection-observer/test-utils'
import { MotionGlobalConfig } from 'framer-motion'
import { cleanup } from '@testing-library/react'
import '@testing-library/jest-dom/vitest'
import { server } from './mocks/mockServerSetup'

MotionGlobalConfig.skipAnimations = true

beforeAll(() => server.listen({ onUnhandledRequest: 'warn' }))

beforeEach(() => {
	setupIntersectionMocking(vi.fn)
})

afterEach(() => {
	resetIntersectionMocking()
	server.resetHandlers()
	cleanup()
})

afterAll(() => server.close())
