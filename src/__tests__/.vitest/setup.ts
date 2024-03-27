import { vi, beforeEach, afterEach } from 'vitest'
import { setupIntersectionMocking, resetIntersectionMocking } from 'react-intersection-observer/test-utils'
import { MotionGlobalConfig } from 'framer-motion'
import { cleanup } from '@testing-library/react'
import '@testing-library/jest-dom/vitest'

MotionGlobalConfig.skipAnimations = true

beforeEach(() => {
	setupIntersectionMocking(vi.fn)
})

afterEach(() => {
	resetIntersectionMocking()
	cleanup()
})
