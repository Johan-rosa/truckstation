"use client"

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { useParams } from "next/navigation";
import {vehicles} from "@/lib/mock-data";
import {Button} from "@/components/ui/button"
import { PageHeader } from "@/components/app-header";
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import {Shield, Truck, Star} from "lucide-react";
import { Vehicle } from "@/types";

export default function VehicleDetailPage() {
  const params = useParams()
  const vehicleId = params.id as string
  const vehicle = vehicles.find((v) => v.id === vehicleId)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

    if (!vehicle) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Vehicle not found</h1>
          <Link href="/">
            <Button>Back to listings</Button>
          </Link>
        </div>
      </div>
    )
  }

  return(
    <div className="min-h-screen bg-gray-50">
      <PageHeader>
        <h1 className="py-3">{ vehicle.name }</h1>
      </PageHeader>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Vehicle Images and Details */}
          <div className="space-y-6">
            <Card className="p-0">
              <CardContent className="p-0">
                <div className="relative aspect-video">
                  <Image
                    src={vehicle.images[currentImageIndex] || "/placeholder.svg"}
                    alt={vehicle.name}
                    fill
                    className="object-cover rounded-t-lg"
                  />
                </div>
                <div className="p-4">
                  <div className="flex gap-2 overflow-x-auto">
                    {vehicle.images.map((image, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentImageIndex(index)}
                        className={
                          `relative w-20 h-16 rounded-md overflow-hidden flex-shrink-0 border-2 
                          ${currentImageIndex === index ? "border-blue-500" : "border-gray-200"
                        }`}
                      >
                        <Image
                          src={image || "/placeholder.svg"}
                          alt={`${vehicle.name} ${index + 1}`}
                          fill
                          className="object-cover"
                        />
                      </button>
                    ))}
                  </div>
                </div>

              </CardContent>
            </Card>

            {AboutVehicle(vehicle)}
          </div>

        </div>
      </main>
    </div>
  )
}

const AboutVehicle = (vehicle: Vehicle) => {
  return(
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Truck className="w-5 h-5" />
          Detalles del vehículo
        </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-sm text-gray-500">Tipo</p>
              <p className="font-medium capitalize">{vehicle.type}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Capacidad</p>
              <p className="font-medium">{vehicle.capacity}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Año</p>
              <p className="font-medium">{vehicle.year}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Combustible</p>
              <p className="font-medium">{vehicle.fuelType}</p>
            </div>
          </div>

          <div className="pt-4 border-t">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-gray-500">Seguro disponible</span>
              <div className="flex items-center gap-1">
                <Shield className={`w-4 h-4 ${vehicle.hasInsurance ? "text-green-500" : "text-gray-400"}`} />
                <span className={`text-sm ${vehicle.hasInsurance ? "text-green-600" : "text-gray-500"}`}>
                  {vehicle.hasInsurance ? "Included" : "Not included"}
                </span>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-500">Puntuación</span>
              <div className="flex items-center gap-1">
                <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                <span className="text-sm font-medium">{vehicle.rating}</span>
              </div>
            </div>
          </div>

          <div className="pt-4 border-t">
            <p className="text-sm text-gray-500 mb-2">Descripción</p>
            <p className="text-sm text-gray-700">{vehicle.description}</p>
          </div>

          <div className="pt-4 border-t">
            <div className="flex items-center justify-between">
              <span className="text-lg font-semibold">Precio por día</span>
              <span className="text-2xl font-bold text-blue-600">${vehicle.pricePerDay}</span>
            </div>
          </div>
        </CardContent>
      </Card>
  )
}