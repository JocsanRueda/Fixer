---
description: "Create or extend a reusable, cross-platform React Native (Expo + react-native-reusables) component or feature following the project's conventions"
agent: "agent"
argument-hint: "Describe the component or feature you need (e.g. 'a Card with header/footer', 'an OTP input')"
tools: ["search", "runCommands", "runTasks"]
---

Your task: implement `${input:target:the component or feature the user asked for}` as a reusable React Native piece for this Expo app, using project conventions. Follow these steps in order and do not skip the reuse/verification steps.

## 1. Check for an existing reusable component first

- Search [components/ui](../../components/ui) and [components/navigation](../../components/navigation) for a component that already covers this need (by name and by behavior, not just exact filename).
- If a close match exists, extend/compose it instead of creating a duplicate. Only create a new file under `components/ui/` when nothing reusable already covers the case.

## 2. Check whether the primitive is installed via the reusables CLI

- This project uses the shadcn-style schema in [components.json](../../components.json) (style: `new-york`, aliases `@/components`, `@/lib/utils`, `@/components/ui`).
- Before hand-writing a new primitive, check if it is available via `react-native-reusables`:
  ```
  npx react-native-reusables@latest add <component-name>
  ```
- If the CLI adds it successfully, adapt the generated file to match this repo's existing patterns (see step 3) instead of leaving the raw output untouched.
- If the CLI does not offer the primitive, hand-write it manually following the conventions below.

## 3. Check and install required dependencies

- Inspect [package.json](../../package.json) before importing any package (e.g. `@rn-primitives/*`, `lucide-react-native`, `class-variance-authority`, `clsx`, `tailwind-merge`).
- If a dependency is missing, install it with `pnpm add <package>` (this workspace uses pnpm, see `packageManager` in package.json). Never assume a package exists — verify first.

## 4. Follow existing conventions when writing the component

Model new code after [components/ui/button.tsx](../../components/ui/button.tsx) and [components/ui/text.tsx](../../components/ui/text.tsx):

- Use `cva` (`class-variance-authority`) for variants and `cn` from [lib/utils.ts](../../lib/utils.ts) to merge Tailwind classes.
- Style with NativeWind/Tailwind classes; wrap web-only styles in `Platform.select({ web: "..." })` rather than conditionally rendering.
- Use `@rn-primitives/slot` (`asChild` pattern) when the component should support polymorphic rendering.
- Propagate text styling via `TextClassContext` when the component wraps text (as `button.tsx` does).
- Export `VariantProps` types and keep prop interfaces explicit and typed — no `any`.
- Keep components small, composable, and platform-agnostic (avoid iOS/Android-only APIs unless guarded with `Platform.OS` checks).

## 5. Validate

- Run the ESLint project task (or `pnpm lint`) and fix any reported issues.
- Confirm the component renders without new TypeScript errors.

Report back which existing component you reused (if any), what was installed, and where the new/updated file lives.
