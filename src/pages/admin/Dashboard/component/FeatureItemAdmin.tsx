import React from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

function FeatureItemAdmin() {
    const data = [
        { name: "Thứ 2", value: 4000 },
        { name: "Thứ 3", value: 3000 },
        { name: "Thứ 4", value: 2000 },
        { name: "Thứ 5", value: 2780 },
        { name: "Thứ 6", value: 1890 },
        { name: "Thứ 7", value: 2390 },
        { name: "Chủ nhật", value: 3490 }
      ];
  return (
    <div>
             <div className='border bg-zinc-900 border-zinc-700 p-[1rem] rounded-sm'>
                        <div className='grid grid-cols-2 gap-[1rem]'>
                          <div>
                            <h2 className='text-[.9rem] font-bold text-zinc-400'>Online</h2>
                            <p className='text-white py-2 text-[1.2rem]'>
                                3.000 người
                            </p>
                            <div className='text-[.8rem] text-zinc-500'>
                                <span className='bg-green-400 p-[.2rem]'>+20.9k</span> Since last week
                            </div>
                        </div>   
                        <ResponsiveContainer width="100%" height={100}>
              <LineChart data={data}>
             
                <Tooltip />
                <Line type="monotone" dataKey="value" stroke="#8884d8" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
                        </div>
                       
                    </div>
    </div>
  )
}

export default FeatureItemAdmin