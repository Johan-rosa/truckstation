"use client"

import { useState } from "react";
import Link from "next/link";
import {PageHeader} from "@/components/app-header";
import {VehicleCard} from "@/components/vehicle-card";
import {vehicles} from "@/lib/mock-data";

export default function Home() {
  console.log(vehicles[0])
  const vehiclesCards = vehicles.map(v => {
  return( 
    <Link key={v.id} href={`/vehicle/${v.id}`}>
      <VehicleCard vehicle={v} key={v.id} />
    </Link>
  );
});

  return (
    <div className="min-h-screen bg-gray-50">
      <PageHeader>
        <h1 className="py-3">Reservaciones</h1>
      </PageHeader>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {vehiclesCards}
        </div>
      </main>
    </div>
  );
}

