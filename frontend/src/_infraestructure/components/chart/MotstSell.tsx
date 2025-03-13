"use client";

import { Chart } from "primereact/chart";
import { useState, useEffect } from "react";

const generateRandomSales = () =>
  Array.from({ length: 7 }, () => Math.floor(Math.random() * 50) + 10);
const generateRandomIncome = () =>
  Array.from({ length: 7 }, () => Math.floor(Math.random() * 500) + 100);

const labels = ["8", "9", "10", "11", "12", "13", "14"];

type ChartData = {
  labels: string[];
  datasets: {
    label: string;
    data: number[];
    borderColor?: string;
    backgroundColor?: string | string[];
    tension?: number;
  }[];
};

export default function Charts() {
  const [ventasDiariasData, setVentasDiariasData] = useState<ChartData | null>(
    null
  );
  const [ingresosSemanalesData, setIngresosSemanalesData] =
    useState<ChartData | null>(null);
  const [productosMasVendidosData, setProductosMasVendidosData] =
    useState<ChartData | null>(null);

  useEffect(() => {
    setVentasDiariasData({
      labels,
      datasets: [
        {
          label: "Pudin Queso",
          data: generateRandomSales(),
          borderColor: "#FF6384",
          backgroundColor: "rgba(255,99,132,0.2)",
          tension: 0.4,
        },
        {
          label: "Almojabana",
          data: generateRandomSales(),
          borderColor: "#36A2EB",
          backgroundColor: "rgba(54,162,235,0.2)",
          tension: 0.4,
        },
        {
          label: "Pan de Muerto",
          data: generateRandomSales(),
          borderColor: "#FFCE56",
          backgroundColor: "rgba(255,206,86,0.2)",
          tension: 0.4,
        },
        {
          label: "Alfajores",
          data: generateRandomSales(),
          borderColor: "#4BC0C0",
          backgroundColor: "rgba(75,192,192,0.2)",
          tension: 0.4,
        },
      ],
    });

    setIngresosSemanalesData({
      labels,
      datasets: [
        {
          label: "Ingresos Semanales",
          data: generateRandomIncome(),
          backgroundColor: "#42A5F5",
        },
      ],
    });

    setProductosMasVendidosData({
      labels: ["Pudin Queso", "Almojabana", "Pan de Muerto", "Alfajores"],
      datasets: [
        {
          label: "Unidades Vendidas",
          data: generateRandomSales(),
          backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#4BC0C0"],
        },
      ],
    });
  }, []);

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 p-6">
      <div className="bg-surface-card p-4 shadow rounded-lg">
        <h2 className="text-lg font-semibold mb-2">Ventas Diarias</h2>
        {ventasDiariasData && <Chart type="line" data={ventasDiariasData} />}
      </div>
      <div className="bg-surface-card p-4 shadow rounded-lg">
        <h2 className="text-lg font-semibold mb-2">Ingresos Semanales</h2>
        {ingresosSemanalesData && (
          <Chart type="bar" data={ingresosSemanalesData} />
        )}
      </div>
      <div className="bg-surface-card p-4 shadow rounded-lg">
        <h2 className="text-lg font-semibold mb-2">Productos Más Vendidos</h2>
        {productosMasVendidosData && (
          <Chart type="bar" data={productosMasVendidosData} />
        )}
      </div>
    </div>
  );
}
