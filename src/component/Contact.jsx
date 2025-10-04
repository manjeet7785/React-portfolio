import React from 'react'

const Contact = () => {
  return (
    <div name="Contact" className='max-w-screen-2xl container mx-auto px-4 md:px-20 my-16  form'>
      <h1 className='text-4xl  font-bold mb-4'>Contact me </h1>
      <p>Please Fill the out the form below to the contact me </p>
      <div className='flex flex-col items-center justify-center mt-5 '>
        <form action="https://getform.io/f/amdyxokb"
          method='POST'
          className='bg-white text-black w-96 rounded-2xl px-8 py-6'>
          <h1 className='text-xl text-semibold pb-2'>
            Send Your Message
          </h1>
          <div className='flex flex-col  pb-4'>
            <label>
              Full Name
            </label>
            <input className='rounded-sm p-1 border-[1px] text-black' type="text" name="name" placeholder='Enter Your Name' />
          </div>

          <div className='flex flex-col pb-4'>
            <label>
              Mobile Number
            </label>
            <input className='rounded-sm p-1 border-[1px] text-black' type="text" name="mobilenumber" placeholder='Enter Your number' />
          </div>

          <div className='flex flex-col pb-4'>
            <label >
              Email
            </label>
            <input className='rounded-sm p-1 border-[1px]  text-black' type="text" name="email" placeholder='Enter Your Email' />
          </div>

          <div className='flex flex-col pb-4'>
            <label htmlFor="">
              Message
            </label>
            <textarea className='rounded-sm border-[1px] p-1 text-black' type="text" name="msg" placeholder='Enter Your Name' required:true />
          </div>
          <button type='submit' className='bg-blue-700 text-white rounded-xl px-3 py-2 hover:bg-slate-950'>Send </button>
        </form>
      </div>
    </div>
  )
}

export default Contact