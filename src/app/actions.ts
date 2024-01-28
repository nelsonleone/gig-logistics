'use server'
 
import { revalidateTag } from 'next/cache'
 
export default async function setRevalidateDropOffs() {
  revalidateTag('dropoffs')
}