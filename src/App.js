import {React,Fragment} from "react";
import axios from "axios";
import {useEffect,useState} from "react";
import { Container } from "@material-ui/core";
import categories from "./Categories";
import Nav from "./Nav";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import { CheckIcon, SelectorIcon } from '@heroicons/react/solid'
import { Listbox, Transition } from '@headlessui/react';
import Definition from "./Definition";

function App() {
  const [mean,setmeaning]=useState([]);
  const [words,setwords] = useState('');
  const [search,setSearch] = useState('');
 
  const [s,sets] = useState(categories[0]);
  const dictAPI = async()=>
  {
      try {
        const d = await axios.get(`https://api.dictionaryapi.dev/api/v2/entries/${s.label}/${search}`);
        
        
      
         setmeaning(d.data)
     
        

      } catch (error) {
        console.log(error);
      }    
 

  }
  
  
  useEffect(()=>{
    dictAPI()
  },[search,s])
  return (
    <div>
   
      <Nav/>  
      <div className="p-0 sm:p-2 mt-4 ... sm:mt-8 ...">
      <div class="mt-8 ...">
    <div class="container h-40 grid justify-items-center items-center ">
        <div class=" relative">
          <span className="pb-2 ... pt-2 ... text-red-400 font-ms text-sm">
            Search a word
            </span>
            <br>
            </br>
            <div class="absolute top-4 left-3"> <i class="fa fa-search text-gray-400 z-20 hover:text-gray-500"></i> </div>
             <input type="text" value={words} onChange={(e)=>{setwords(e.target.value)}} 
             class="shadow-md text-red-500 h-12 w-64 md:w-96 pl-4 xl:pl-10 pr-20 rounded-lg z-0 focus:shadow focus:outline-none" placeholder="Search anything..."/>
            <div class="absolute top-8 right-2"> <button  onClick={(e)=>{setSearch(words)}}
            class="h-8 w-20 text-white rounded-lg bg-red-500 hover:bg-red-600">Search</button> </div>
        </div>
        
       
  <div className="w-64 md:w-96 ">
  <span className="pb-2 ... pt-2 ... text-red-400 font-ms text-sm">
            Select Language
            </span>
            <br>
            </br>
                            <Listbox value={s} onChange={sets}>
                                <div className="  mt-1">
                                <Listbox.Button className=" flow-root w-64 md:w-96 py-3.5 pl-3 pr-6 text-left bg-white rounded-lg shadow-md 
                                cursor-default focus:outline-none 
                                 sm:text-sm  focus:border-red-500
                                 focus:border-2
                               ">
                                    <div className="block float-left truncate text-red-500">{s.value}</div>
                                    <div className=" float-right inset-y-0 right-0 flex items-center  pointer-events-none">
                                    <SelectorIcon
                                        className="w-5 h-5 text-red-500"
                                        aria-hidden="true"
                                    />
                                    </div>
                                </Listbox.Button>
                                <Transition
                                    as={Fragment}
                                    leave="transition ease-in duration-100"
                                    leaveFrom="opacity-100"
                                    leaveTo="opacity-0"
                                >
                                    <Listbox.Options className="absolute z-10 w-64 md:w-96 py-2 mt-1 overflow-auto text-base bg-white rounded-md shadow-lg max-h-60 ring-1 ring-red-500 ring-opacity-5
                                     focus:outline-none sm:text-sm">
                                    {categories.map((person, personIdx) => (
                                        <Listbox.Option
                                        key={personIdx}
                                        className={({ active }) =>
                                            `${active ? 'text-red-900 ' : 'text-red-600'}
                                            hover:bg-red-200  text-white cursor-default select-none relative py-2 pl-10 pr-4`
                                        }
                                        value={person}
                                        >
                                        {({ selected, active }) => (
                                            <>
                                            <span
                                                className={`${
                                                selected ? 'font-medium' : 'font-normal'
                                                } block truncate`}
                                            >
                                                {person.value}
                                            </span>
                                            {selected ? (
                                                <span
                                                className={`${
                                                    active ? ' text-red-600' : '  text-red-600'
                                                }
                                                        hover:bg-red-300 hover:rounded-lg absolute inset-y-0 left-0 flex items-center pl-3`}
                                                >
                                                <CheckIcon className="w-5 h-5 text-red-600 hover:text-white " aria-hidden="true" />
                                                </span>
                                            ) : null}
                                            </>
                                        )}
                                        </Listbox.Option>
                                    ))}
                                    </Listbox.Options>
                                </Transition>
                                </div>
                            </Listbox>
   </div>
    </div>
    </div>
        </div> 

        <div className="xl:p-4">
        <Definition   word = {search} meanings={mean} lang={s.label} />
        </div>
        </div>
        

    
    
    
  );
}

export default App;
