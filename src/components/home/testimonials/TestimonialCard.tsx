import Image from 'next/image'

interface TestimonialCardProps {
  name: string
  role: string
  content: string
  avatar: string
}

const TestimonialCard = ({ name, role, content, avatar }: TestimonialCardProps) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="flex items-center mb-4">
        <Image
          src={avatar}
          alt={name}
          width={40}
          height={40}
          className="rounded-full mr-4"
        />
        <div>
          <h3 className="font-semibold">{name}</h3>
          <p className="text-sm text-gray-600">{role}</p>
        </div>
      </div>
      <p className="text-gray-700">{content}</p>
    </div>
  )
}

export default TestimonialCard

