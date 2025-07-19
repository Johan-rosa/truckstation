export interface Vehicle {
  id: string
  name: string
  type: "truck" | "crane" | "trailer" | "excavator"
  images: string[]
  currency: string
  pricePerDay: number
  location: string
  available: boolean
  hasInsurance: boolean
  capacity: string
  year: number
  fuelType: string
  rating: number
  description: string
}