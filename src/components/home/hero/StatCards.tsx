const stats = [
  { title: 'International Brands', value: '200+' },
  { title: 'Happy Customers', value: '10k+' },
  { title: 'Product Categories', value: '50+' },
]

const StatCards = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {stats.map((stat, index) => (
        <StatCard key={index} title={stat.title} value={stat.value} />
      ))}
    </div>
  )
}

const StatCard = ({ title, value }: { title: string; value: string }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 text-center">
      <h3 className="text-3xl font-bold mb-2">{value}</h3>
      <p className="text-gray-600">{title}</p>
    </div>
  )
}

export default StatCards

