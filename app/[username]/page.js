import React from 'react'

const username = ({ params }) => {
  return (
    <>

      <div className='cover w-full bg-red-50 relative'>
        <img className='object-cover w-full h-[350px]' src='https://c10.patreonusercontent.com/4/patreon-media/p/campaign/8303782/7c372402d29c4c0f996800198cdf5571/eyJ3IjoxNjAwLCJ3ZSI6MX0%3D/2.jpg?token-time=1743724800&token-hash=_fS8or9huZsr3uhiUyvRrFfHJUjzmnFzMi1gyBruTgE%3D' alt='' />

        <div className='absolute -bottom-16 right-[46%] border-white border-2 rounded-full '>
          <img className='rounded-full w-[100px] h-[100px]' src='https://images7.alphacoders.com/367/367217.jpg' alt='' />
        </div>
      </div>
      <div className='info flex justify-center items-center my-16 flex-col '>
        <div className='font-bold text-lg'>@{params.username}</div>
        <div className='text-slate-400'>Creating Animated art for VTT,s</div>
        <div className='text-slate-400'>9,500 members . 82 posts</div>
        <div className='payment flex gap-3 w-[80%] mt-11'>
          <div className='supporters w-1/2 bg-slate-900 rounded-lg text-white p-10 '>
            {/* Show list of all the supporters as a leaderboard */}
            <h2 className='text-2xl font-bold my-3'>Supporters</h2>
            <ul className='mx-5 text-sm'>
              <li className='my-4 flex gap-2  items-center'>
                <img width={25} src='avatar.gif' alt='user avatar' />
                <span>
                  Shubham donated <span className='font-bold'>$20</span> with a message `I support you bro. Lots of Love`
                </span>
              </li>
              <li className='my-4 flex gap-2  items-center'>
                <img width={25} src='avatar.gif' alt='user avatar' />
                <span>
                  Shubham donated <span className='font-bold'>$20</span> with a message `I support you bro. Lots of Love`
                </span>
              </li>
              <li className='my-4 flex gap-2  items-center'>
                <img width={25} src='avatar.gif' alt='user avatar' />
                <span>
                  Shubham donated <span className='font-bold'>$20</span> with a message `I support you bro. Lots of Love`
                </span>
              </li>
              <li className='my-4 flex gap-2  items-center'>
                <img width={25} src='avatar.gif' alt='user avatar' />
                <span>
                  Shubham donated <span className='font-bold'>$20</span> with a message `I support you bro. Lots of Love`
                </span>
              </li>
              <li className='my-4 flex gap-2  items-center'>
                <img width={25} src='avatar.gif' alt='user avatar' />
                <span>
                  Shubham donated <span className='font-bold'>$20</span> with a message `I support you bro. Lots of Love`
                </span>
              </li>
              <li className='my-4 flex gap-2  items-center'>
                <img width={25} src='avatar.gif' alt='user avatar' />
                <span>
                  Shubham donated <span className='font-bold'>$20</span> with a message `I support you bro. Lots of Love`
                </span>
              </li>
              <li className='my-4 flex gap-2  items-center'>
                <img width={25} src='avatar.gif' alt='user avatar' />
                <span>
                  Shubham donated <span className='font-bold'>$20</span> with a message `I support you bro. Lots of Love`
                </span>
              </li>
              <li className='my-4 flex gap-2  items-center'>
                <img width={25} src='avatar.gif' alt='user avatar' />
                <span>
                  Shubham donated <span className='font-bold'>$20</span> with a message `I support you bro. Lots of Love`
                </span>
              </li>

            </ul>
          </div>

          <div className='makePayment w-1/2 bg-slate-900 rounded-lg text-white p-10'>
            <h2 className='text-2xl font-bold my-5'>Make a Payment</h2>
            <div className='flex gap-2 flex-col'>
              <div><input type='text' className='w-full p-3 rounded-lg bg-slate-800' placeholder='Enter Name' /></div>
              <input type='text' className='w-full p-3 rounded-lg bg-slate-800' placeholder='Enter Message' />
              <input type='text' className='w-full p-3 rounded-lg bg-slate-800' placeholder='Enter Amount' />

              <button type="button" className="w-full text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Pay</button>
            </div>
            {/* Or choose from these amount */}
            <div className='flex gap-2 mt-5'>
              <button className='bg-slate-800 p-3 rounded-lg'> Pay $10</button>
              <button className='bg-slate-800 p-3 rounded-lg'> Pay $20</button>
              <button className='bg-slate-800 p-3 rounded-lg'> Pay $30</button>
            </div>
          </div>

        </div>
      </div>
    </>
  )
}

export default username
