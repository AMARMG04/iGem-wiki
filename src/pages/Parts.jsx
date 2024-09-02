import React from 'react'

const Parts = () => {

  const contents = [
    {
      type: "Basic",
      part: "BBa_J23104",
      name: "AGM1",
      description: "RBS based on Elowitz repressilator",
      new: "existing",
    },
    {
      type: "Basic",
      part: "BBa_J23104",
      name: "AGM1",
      description: "RBS based on Elowitz repressilator",
      new: "existing",
    }, 
    {
      type: "Basic",
      part: "BBa_J23104",
      name: "AGM1",
      description: "RBS based on Elowitz repressilator",
      new: "existing",
    },
  ];

  return (
    <div className='m-11'>

      <div className='grid grid-cols-3 gap-4'>
        
        {/* Table of Contents */}
        <div className='col-span-1'>
          <div className='table-contents bg-gray-100 p-4 rounded-lg shadow'>
            <h2 className='text-lg font-bold mb-4'>Table of Contents</h2>
            <ul className='space-y-2'>
              {contents.map((item, index) => (
                <li key={index} className='text-sm text-gray-700'>
                  <a href={`#$table1`} className='hover:text-blue-500'>
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Table */}
        <div className='col-span-2'>
          <div className='flex flex-col'>
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
        </div>

      </div>
    </div>
  )
}

export default Parts;
