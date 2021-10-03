import { Fragment } from 'react';
import SelectGroup from './SelectGroup';

const SelectGroupSelection2 = () => {
  return (
    <Fragment>
      <div className='flex-row'>
        <SelectGroup
          spacing='1'
          formWidth='100px'
          options={['Raw', 'CODA', 'Segment']}
          id='Select-1'
        />
        <SelectGroup
          spacing='1'
          formWidth='100px'
          options={['Text', 'Verb Form', 'POS', 'Lemma']}
          id='Select-2'
        />
      </div>
      <div className='flex-row'>
        <SelectGroup
          spacing='1'
          formWidth='100px'
          options={['Approximate', 'Exact']}
          id='Select-3'
        />
        <SelectGroup
          spacing='1'
          formWidth='100px'
          options={['Me', 'Wiaam', 'Sara', 'All', 'All But Me']}
          id='Select-4'
        />
      </div>
    </Fragment>
  );
};

export default SelectGroupSelection2;
