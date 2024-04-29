import NotFoundPageMC from '@/components/NotFoundPageMC'
import { Metadata } from 'next'

export const metadata : Metadata = {
  title: "404 - Page Not Found | GIGL"
} 
 
export default function NotFound() {
  return (
    <div className="page pt-8">
      <NotFoundPageMC />
    </div>
  )
}