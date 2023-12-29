// __mocks__/vitest-env.d.ts
/// <reference types="vitest" />

import "@testing-library/jest-dom/vitest";
import { vi } from "vitest";

vi.mock("zustand");
