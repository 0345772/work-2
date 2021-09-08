import React, { useState, useEffect } from 'react';
import { PersonesList, PersonesFilter, PersoneForm, MyModal, Loader, Pagination } from './components';
import { usePersones, useFetching } from './hooks';
import './styles/App.css';
import { PersonesService } from './API';
import { getPageCount } from './utils/pages';

export function App() {

  const [persones, setPersones] = useState([])
  const [filter, setFilter] = useState({ sort: "", query: "" })
  const [modal, setModal] = useState(false)
  const [totalCount] = useState(35)
  const [totalPages, setTotalPages] = useState(0);
  const [limit] = useState(10);
  const [page, setPage] = useState(1);

  const [fetchPersones, isPersonesLoading, personesError] = useFetching(async ( ) => {
    const data = await PersonesService.getAll(limit, page);
    const persones = data.persones
      .map((persone) => {
        return {
          ...persone, id: persone.name.toLowerCase(),
          lettel: persone.name[0],
          medals: null
        }
      })
    setPersones(persones)
    console.log(totalPages)
    setTotalPages((getPageCount(totalCount, limit)))
  })

  const sortedAndSearchPersones = usePersones(persones, filter.sort, filter.query)


  // useEffect(() => {
  //     setTotalPages(getPageCount(totalCount, limit))

  //   }, [])




  useEffect(() => {
    fetchPersones(limit, page)
  }, [page])


  const createPersone = (newPersone) => {
    setPersones([...persones, newPersone])
    setModal(false)
  }



  const removePersone = (persone) => {
    setPersones(persones.filter(p => p.id !== persone.id))
  }

  const changePage = (page) => {
    setPage(page)
    fetchPersones(limit, page)
  }

  return (

    <div className="App">

      <MyModal visible={modal} setVisible={setModal}>
        <PersoneForm create={createPersone} />
      </MyModal>

      <PersonesFilter
        filter={filter}
        setFilter={setFilter}
        setModal={setModal}
      />

      {personesError &&
        <h3>Ошибочка произошла...  {personesError}</h3>
      }

      {
        isPersonesLoading
          ? <Loader />
          : <PersonesList
            remove={removePersone}
            persones={sortedAndSearchPersones}
          />
      }
     
      <Pagination 
      page={page} 
      changePage={changePage} 
      totalPages={totalPages}
       />
    </div>
  );
}
