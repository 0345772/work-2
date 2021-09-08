import React from 'react';
import { MyInput, MySelect, MyButton } from '../UI';


export const PersonesFilter = ({ filter, setFilter, setModal }) => {

  return (
    <div>
      <MyInput
        value={filter.query
        }
        onChange={(e) => (setFilter({ ...filter, query: e.target.value }))
        }
        placeholder="Поиск по имени" />
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        <MySelect
          value={filter.sort}
          onChange={selectedSort => setFilter({ ...filter, sort: selectedSort }
          )}
          defaultValue="сортируем"
          options={[
            { value: "count_pub", name: "по колличеству публикаций" },
            { value: "pageviews", name: "по колличеству просмотров" },
          ]}
        />
        <MyButton
          onClick={() => setModal(true)}
          style={{ background: "green" }}
        >Добавить автора в список
        </MyButton>
      </div>
    </div>
  );
};
