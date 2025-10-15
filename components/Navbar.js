'use client'

import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert"
import { ModeToggle } from './theme-btn'
import { usePathname } from 'next/navigation'
import LoadingBar from 'react-top-loading-bar'
import { Info } from "lucide-react"

const Navbar = () => {
  const [progress, setProgress] = useState(0)
  const [showAlert, setShowAlert] = useState(false)
  const [sheetOpen, setSheetOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    setProgress(20)
    setTimeout(() => setProgress(40), 100)
    setTimeout(() => setProgress(100), 400)
  }, [pathname])

  useEffect(() => {
    setTimeout(() => setProgress(0), 50)
  }, [])

  // Auto-dismiss alert after 3 seconds
  useEffect(() => {
    if (showAlert) {
      const timeout = setTimeout(() => setShowAlert(false), 3000)
      return () => clearTimeout(timeout)
    }
  }, [showAlert])

  const handleButtonClick = () => {
    setShowAlert(true)
    setSheetOpen(false)
  }

  return (
    <nav className="p-4 bg-background/50 sticky top-0 backdrop-blur border-b z-10">
      <LoadingBar
        color="#933ce6"
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />
      <div className="container mx-auto flex justify-between items-center">
        <Link href={"/"}>
          <div className="text-lg font-bold">Saim Ali</div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-4 items-center">
          <Link href="/" className="hover:scale-105 hover:font-semibold transition-transform duration-300">Home</Link>
          <Link href="/about" className="hover:scale-105 hover:font-semibold transition-transform duration-300">About</Link>
          <Link href="/contact" className="hover:scale-105 hover:font-semibold transition-transform duration-300">Contact</Link>
          <div className="flex items-center">
            <Button onClick={handleButtonClick} className="mx-1 cursor-pointer" variant="outline">Login</Button>
            <Button onClick={handleButtonClick} className="mx-1 cursor-pointer" variant="default">Signup</Button>
            <ModeToggle />
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden">
          <span className="my-4 mx-3">
            <ModeToggle />
          </span>

          <Sheet open={sheetOpen} onOpenChange={setSheetOpen}>
            <SheetTrigger>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </SheetTrigger>

            <SheetContent>
              <SheetHeader>
                <SheetTitle className="font-bold my-4">Saim Ali</SheetTitle>
                <SheetDescription>
                  <div className="flex flex-col gap-6">
                    <Link href="/">Home</Link>
                    <Link href="/about">About</Link>
                    <Link href="/contact">Contact</Link>

                    <div>
                      <Button
                        onClick={handleButtonClick}
                        className="mx-1 cursor-pointer text-xs"
                        variant="outline"
                      >
                        Login
                      </Button>
                      <Button
                        onClick={handleButtonClick}
                        className="mx-1 cursor-pointer text-xs"
                        variant="default"
                      >
                        Signup
                      </Button>
                    </div>
                  </div>
                </SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </div>
      </div>

      {/* Centered Alert visible on all screen sizes */}
      {showAlert && (
        <div className="fixed inset-0 flex items-center justify-center z-50 pointer-events-none">
          <div className="pointer-events-auto w-[90%] max-w-sm">
            <Alert variant='destructive'>
              <Info className="h-4 w-4" />
              <AlertTitle>We are Sorry!</AlertTitle>
              <AlertDescription>
                This page is not ready yet.
              </AlertDescription>
            </Alert>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar
