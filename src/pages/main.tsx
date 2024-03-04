import Sidebar from '@/components/Sidebar'
import Line from '@/components/Line'

export default function Main() {
  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'Enter') {
      return Line()
    }
  }
  return (
    <div className="flex">
      <Sidebar />
      <div className="mx-20 my-10 w-full" onKeyDown={handleKeyDown}>
        <Line />
      </div>
    </div>
  )
}
