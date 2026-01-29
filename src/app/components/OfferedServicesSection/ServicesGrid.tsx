const gridItems = [
  {
    id: 1,
    name: "Conta Digital PJ",
    description: "Conta digital completa para empresas gerenciarem entradas, saídas e saldo em tempo real.",
    icon: "https://fonts.gstatic.com/s/i/materialicons/account_balance/v12/24px.svg"
  },
  {
    id: 2,
    name: "Pix Empresarial",
    description: "Receba e envie pagamentos via Pix com rapidez, segurança e disponibilidade 24/7.",
    icon: "https://fonts.gstatic.com/s/i/materialicons/card_travel/v12/24px.svg"
  },
  {
    id: 3,
    name: "Boletos Registrados",
    description: "Emita e gerencie boletos registrados com controle de vencimentos e pagamentos.",
    icon: "https://fonts.gstatic.com/s/i/materialicons/receipt/v6/24px.svg"
  },
  {
    id: 4,
    name: "Links de Pagamento",
    description: "Crie links de pagamento personalizados para vender online de forma simples.",
    icon: "https://fonts.gstatic.com/s/i/materialicons/link/v17/24px.svg"
  },
  {
    id: 5,
    name: "Pix Recorrente",
    description: "Automatize cobranças recorrentes como mensalidades e assinaturas usando Pix.",
    icon: "https://fonts.gstatic.com/s/i/materialicons/money/v12/24px.svg"
  },
  {
    id: 6,
    name: "API e Integrações",
    description: "Integre sistemas financeiros usando APIs, webhooks e SDKs do banco.",
    icon: "https://fonts.gstatic.com/s/i/materialicons/api/v4/24px.svg"
  },
  {
    id: 7,
    name: "Gestão de Cobranças",
    description: "Centralize cobranças, acompanhe pagamentos e reduza inadimplência.",
    icon: "https://fonts.gstatic.com/s/i/materialicons/request_page/v7/24px.svg"
  },
  {
    id: 8,
    name: "Pagamento em Lote",
    description: "Realize múltiplos pagamentos de uma só vez com agilidade e controle.",
    icon: "https://fonts.gstatic.com/s/i/materialicons/playlist_add_check/v14/24px.svg"
  },
  {
    id: 9,
    name: "Emissão de Nota Fiscal",
    description: "Emita notas fiscais eletrônicas integradas às suas vendas e recebimentos.",
    icon: "https://fonts.gstatic.com/s/i/materialicons/receipt_long/v6/24px.svg"
  }
];

export default function ServicesGrid() {
  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {gridItems.map((item) => (
          <div
            key={item.id}
            className="bg-white p-6 rounded-xl shadow-md shadow-blue-200 border border-blue-200 hover:shadow-lg transition-shadow duration-300"
          >
            <div className="flex items-center mb-4">
              <img src={item.icon} alt={item.name} className="w-8 h-8 mr-3" />
              <h3 className="text-xl font-bold text-blue-950">{item.name}</h3>
            </div>
            <p className="text-gray-700">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
