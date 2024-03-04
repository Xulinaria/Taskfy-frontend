import InputForm from '@/components/helper/InputFrom'

export default function Registration() {
  return (
    <div className="h-screen flex items-center justify-center">
      <form
        action=""
        className="border border-neutral-300 dark:border-neutral-700 rounded-md p-10 w-1/5"
      >
        <h1 className="text-3xl mb-10">Registration</h1>

        <InputForm title="Email" />
        <InputForm title="User name" />
        <InputForm title="Password" />
        <InputForm title="Password copy" />

        <button
          type="submit"
          className="w-full mt-10 py-4 border border-neutral-300 dark:border-neutral-700 rounded-md text-xl"
        >
          Registration
        </button>
      </form>
    </div>
  )
}
