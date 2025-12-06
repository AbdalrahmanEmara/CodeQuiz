import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/login/signup')({
  component: SignUp,
})

function SignUp() {
  return <div>Hello "/login/signup"!</div>
}
