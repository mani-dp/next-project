'use client'
import { useFormStatus } from 'react-dom'

const SubmitButton = () => {
  const { pending } = useFormStatus();
  return (
    <div>
      <button
        disabled={pending}
        className='cursor-pointer bg-amber-600 p-5 rounded-4xl disabled:opacity-60' type='submit'>
        {pending ? "Booking..." : "submit"}
      </button>
    </div>
  )
}

export default SubmitButton