import React from 'react'
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
const Alert = () => {
  return (
    <div>
      <Alert variant="default | destructive">
  <Terminal />
  <AlertTitle>Heads up!</AlertTitle>
  <AlertDescription>
    You can add components and dependencies to your app using the cli.
  </AlertDescription>
</Alert>
    </div>
  )
}

export default Alert
