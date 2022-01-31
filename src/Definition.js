import React from 'react';
import ReactAudioPlayer from 'react-audio-player';
import { Tab } from '@headlessui/react'

const Definition = ({word,meanings,lang}) => {
  return (
      <>
      
      {!word && <div className='sm:pl-8 ... grid items-center justify-items-center  w-full'>
          
          <span className='sm:p-4 md:p-6 xl:p-8 w-full sm:w-3/4 text-red-500 text-4xl font-Irish  rounded'>
                     Type something ................
                 </span>
                 </div> }
      {meanings[0] &&
  <div className='sm:pl-8 ... grid items-center justify-items-center  w-full '>

  <div className=' sm:ml-8 ... p-2  sm:shadow-lg sm:rounded-lg sm:p-4 md:p-6 xl:p-8 w-full sm:w-3/4'>
      <div className='sm:p-2  '> 
         <div className='p-3'>
             <span className='text-4xl font-semi-bold font-AF'>
                 {word}
                 
             </span>
         </div>
         <div className=' mt-2 ...'>
             
         {meanings[0] &&  word && (lang == "en") &&
         
         <div className='pl-3 ... text-gray-400 text-xl font-Barlow '>
             {meanings[0].phonetics[0].text}
            
             
         </div>}
         
         {meanings[0].phonetics[0].audio && word &&  (lang == "en") && <div className='mt-2 ... z-0 '>
             
               <ReactAudioPlayer className='h-8 w-64'
                       src={`${meanings[0].phonetics[0].audio}`}  controls
/>
                 </div>}
         
          </div>
      </div>
      {word &&
      <div className='mt-4 ... sm:p-0 w-full w-80 '>
            <Tab.Group>{console.log(lang)}

                <Tab.List className="flex justify-between bg-blue-500 rounded border-4 border-blue-500 
                text-white text-sm  ">
                    <Tab 
                   className= {({ selected }) =>
                   (selected
                        ? 'p-2 bg-red-500 w-full rounded'
                        : 'p-2 w-full  rounded'
                    )
                  }
                    >
                        DEFINITION
                    </Tab>
                    <Tab 
                     className= {({ selected }) =>
                     (selected
                          ? 'p-2 bg-red-500 w-full rounded'
                          : 'p-2 w-full  rounded'
                      )
                    }>
                        SYNONYMS 
                    </Tab>
                    <Tab
                     className= {({ selected }) =>
                     (selected
                          ? 'p-2 bg-red-500 w-full rounded'
                          : 'p-2 w-full  rounded'
                      )
                    }>
                        EXAMPLE
                    </Tab>
                </Tab.List>
                <Tab.Panels className="p-0 sm:p-1 text-clip">
                    <Tab.Panel> <div>
                       {meanings.map((mean)=>(
                           mean.meanings.map((definitions)=>(
                               definitions.definitions.map((definition)=>( definition.definition &&
                                   <div className='p-1'>
                                   <div className='bg-gray-100 rounded p-2'>
                                       {definition.definition}
                                   </div>
                                   </div>
                               )
                                   
                               )
                           ))
                       ))}
                  
                                  
                        </div>
                        </Tab.Panel>
                    <Tab.Panel> 
                    <div>
                       {meanings.map((mean)=>(
                           mean.meanings.map((definitions)=>(
                               definitions.definitions.map((definition)=>(
                                  
                      definition.synonyms.map((s)=>(
                        <div className='p-1'>
                        <div className='bg-gray-100 rounded p-2'>
                              {`${s},`}
                        </div>
                        </div>)
                      )
                    
                               )
                                   
                               )
                           ))
                       ))}
                  
                                  
                        </div>
                    </Tab.Panel>
                    <Tab.Panel>  
                    <div>
                       {meanings.map((mean)=>(
                           mean.meanings.map((definitions)=>(
                               definitions.definitions.map((definition)=>(
                                   definition.example &&
                                   <div className='p-1'>
                                   <div className='bg-gray-100 rounded p-2'>
                                       {definition.example}
                                   </div>
                                   </div>
                               )
                                   
                               )
                           ))
                       ))}
                  
                                  
                        </div>
                    </Tab.Panel>
                </Tab.Panels>
            </Tab.Group>
      
      
      
      </div>}
      </div>
  </div>}</>);
};

export default Definition;
