export default function PaymentsCard() {
  return (
<section className="bg-white dark:bg-gray-900">
  <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
      <div className="mx-auto max-w-screen-md text-center mb-8 lg:mb-12">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">For crazy gamers like you.</h2>
          <p className="mb-5 font-light text-gray-500 sm:text-xl dark:text-gray-400">We focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth.</p>
      </div>
      <div className="space-y-8 lg:space-y-0"> 
          <div className="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-primeColor opacity-90 rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
              <h3 className="mb-4 text-2xl text-white font-semibold">Enterprise</h3>
              <p className="font-light text-gray-500 sm:text-lg dark:text-gray-400">Best for large scale uses and extended redistribution rights.</p>
              <div className="flex justify-center items-baseline my-8">
                  <span className="mr-2 text-4xl text-white font-extrabold">100 Points</span>
                  <span className="text-gray-500 text-3xl dark:text-gray-200">- $20</span>
              </div>
              <ul role="list" className="mb-8 space-y-4 text-left">
                  <li className="flex items-center space-x-3">
                      <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                      <span className="text-white">Individual configuration</span>
                  </li>
                  <li className="flex items-center space-x-3">
                      <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                      <span className="text-white">No setup, or hidden fees</span>
                  </li>
                  <li className="flex items-center space-x-3">
                      <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                      <span className="text-white">Team size: <span className="font-semibold">100+ developers</span></span>
                  </li>
                  <li className="flex items-center space-x-3">
                      <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                      <span className="text-white">Premium support: <span className="font-semibold text-gray-500">36 months</span></span>
                  </li>
                  <li className="flex items-center space-x-3">
                      <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                      <span className="text-white">Free updates: <span className="font-semibold text-gray-500">36 months</span></span>
                  </li>
              </ul>
              <a href="#" className="text-white bg-black hover:bg-black hover:opacity-70 focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white  dark:focus:ring-primary-900">Purchase Points</a>
          </div>
      </div>
  </div>
</section>  )
}
