import ServicesGrid from "./ServicesGrid";

export default function OfferedServicesSection() {
  return (
    <div>
       <div className="m-4 md:m-10">
        <h2 className="text-center text-5xl font-bold text-blue-900">Serviços Ofertados</h2>
        <ServicesGrid />
       </div>
    </div>
  );
}