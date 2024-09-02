import React from 'react'
import { contents, links } from '../data/table';

const Parts = () => {


  return (
    <div className='m-11'>

      <div className='grid grid-cols-3 gap-4 '>
        
        {/* Table of Contents */}
        <div className='col-span-1'>
          <div className='table-contents bg-gray-100 p-4 rounded-lg shadow sticky top-48'>
            <h2 className='text-[30px] font-bold mb-4'>Table of Contents</h2>
            <ul className='space-y-2'>
              {links.map((item, index) => (
                <li key={index} className='text-[20px] text-black font-medium'>
                  <a href={`#${item.href}`} className='hover:text-blue-500'>
                    {item.label}
                  </a>
                </li>
                
              ))}
            </ul>
          </div>
        </div>

        {/* Table */}
        <div className='col-span-2'>
          <div className='mb-10  flex flex-col' id='table1'>
            <div>
                <h1 className='my-2 font-bold text-[35px]'>Parts Collection</h1>
            </div>
            <div className='-m-1.5 overflow-x-auto'>
              <div className='p-1.5 min-w-full inline-block align-middle'>
                <div className='border rounded-lg shadow overflow-hidden'>
                  <table className='min-w-full divide-y divide-gray-200'>
                    <thead>
                      <tr className='divide-x divide-gray-200'>
                        <th scope='col' className="px-6 py-3 text-center text-xs  text-black font-bold uppercase">Type</th>
                        <th scope='col' className="px-6 py-3 text-center text-xs  text-black font-bold uppercase">Part Number</th>
                        <th scope='col' className="px-6 py-3 text-center text-xs  text-black font-bold uppercase">Name</th>
                        <th scope='col' className="px-6 py-3 text-center text-xs  text-black font-bold uppercase">Description</th>
                        <th scope='col' className="px-6 py-3 text-center text-xs  text-black font-bold uppercase">New/existing</th>
                      </tr>
                    </thead>
                    <tbody className='divide-y divide-gray-200'>
                      {contents.map((item) => (
                        <tr key={item.part} id={item.part} className='divide-x'>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800">{item.type}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">{item.part}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">{item.name}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">{item.description}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">{item.new}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>


                  
                </div>
              </div>
            </div>
          </div>

          <div className=' mb-10 flex flex-col'id='table2'>
         
          <div>
                <h1 className='my-2 font-bold text-[35px]'>Basic Parts</h1>
            </div>
            
            <div className='-m-1.5 overflow-x-auto' >
              <div className='p-1.5 min-w-full inline-block align-middle'>
                <div className='border rounded-lg shadow overflow-hidden'>
               
                  <table  className='min-w-full divide-y divide-gray-200'>
                    <thead>
                      <tr className='divide-x divide-gray-200'>
                        <th scope='col' className="px-6 py-3 text-center text-xs  text-black font-bold uppercase">Type</th>
                        <th scope='col' className="px-6 py-3 text-center text-xs  text-black font-bold uppercase">Part Number</th>
                        <th scope='col' className="px-6 py-3 text-center text-xs  text-black font-bold uppercase">Name</th>
                        <th scope='col' className="px-6 py-3 text-center text-xs  text-black font-bold uppercase">Description</th>
                        <th scope='col' className="px-6 py-3 text-center text-xs  text-black font-bold uppercase">New/existing</th>
                      </tr>
                    </thead>
                    <tbody className='divide-y divide-gray-200'>
                      {contents.map((item) => (
                        <tr key={item.part} id={item.part} className='divide-x'>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800">{item.type}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">{item.part}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">{item.name}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">{item.description}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">{item.new}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>


                  
                </div>
              </div>
            </div>
          </div>


          <div className=' mb-10 flex flex-col' id='table3'>
          <div>
                <h1 className='my-2 font-bold text-[35px]'>Composite Parts</h1>
            </div>
            <div className='-m-1.5 overflow-x-auto'>
              <div className='p-1.5 min-w-full inline-block align-middle'>
                <div className='border rounded-lg shadow overflow-hidden'>
                  <table  className='min-w-full divide-y divide-gray-200'>
                    <thead>
                      <tr className='divide-x divide-gray-200'>
                        <th scope='col' className="px-6 py-3 text-center text-xs  text-black font-bold uppercase">Type</th>
                        <th scope='col' className="px-6 py-3 text-center text-xs  text-black font-bold uppercase">Part Number</th>
                        <th scope='col' className="px-6 py-3 text-center text-xs  text-black font-bold uppercase">Name</th>
                        <th scope='col' className="px-6 py-3 text-center text-xs  text-black font-bold uppercase">Description</th>
                        <th scope='col' className="px-6 py-3 text-center text-xs  text-black font-bold uppercase">New/existing</th>
                      </tr>
                    </thead>
                    <tbody className='divide-y divide-gray-200'>
                      {contents.map((item) => (
                        <tr key={item.part} id={item.part} className='divide-x'>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800">{item.type}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">{item.part}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">{item.name}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">{item.description}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">{item.new}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>


                  
                </div>
              </div>
            </div>
          </div>
        </div>

          




      </div>
    </div>
  )
}

export default Parts;
