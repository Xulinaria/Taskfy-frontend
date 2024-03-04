export default function InputForm({ title }: { title: string }) {
  return (
    <div className="mt-3">
      <p className="text-xl">{title}</p>
      <input
        type="text"
        className="mt-1 px-3 py-2 border border-neutral-300 dark:border-neutral-700 rounded-md w-full text-black dark:bg-neutral-950 dark:text-white"
      />
    </div>
  )
}
