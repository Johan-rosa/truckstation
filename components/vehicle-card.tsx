import type { Vehicle } from "@/types";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import {MapPin, Shield, Star, Calendar} from "lucide-react";
import {numberWithCommas} from "@/lib/utils";

interface VehicleCardProps {
  vehicle: Vehicle
}

export function VehicleCard({ vehicle }: VehicleCardProps) {
  return(
    <Card className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer p-0 gap-0">
      <div className="relative aspect-video">
        <Image src={vehicle.images[0] || "/placeholder.svg"} alt={vehicle.name} fill className="object-cover" />
        <div className="absolute top-3 right-3">
          <Badge variant={vehicle.available ? "default" : "secondary"}>
            {vehicle.available ? "Available" : "Unavailable"}
          </Badge>
        </div>
      </div>

      <CardContent className="p-4">
        <h3 className="font-semibold text-md mb-2 line-clamp-1">{vehicle.name}</h3>

        <div className="space-y-2 mb-4">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <MapPin className="w-4 h-4" />
            <span>{vehicle.location}</span>
          </div>

          <div className="flex items-center gap-4 text-sm text-gray-600">
            <div className="flex items-center gap-1">
              <Shield className={`w-4 h-4 ${vehicle.hasInsurance ? "text-green-500" : "text-gray-400"}`} />
              <span>{vehicle.hasInsurance ? "Seguro disponible" : "Sin seguro para carga"}</span>
            </div>

            <div className="flex items-center gap-1">
              <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              <span>{vehicle.rating}</span>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div>
            <span className="text-xl font-bold text-blue-600">{vehicle.currency} {numberWithCommas(vehicle.pricePerDay)}</span>
            <span className="text-gray-500 text-sm"> /  día</span>
          </div>

          <div className="flex items-center gap-1 text-sm text-gray-500">
            <Calendar className="w-4 h-4" />
            <span>Reservar</span>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}